import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { useDropzone } from "react-dropzone";
import { useStoreState, useStoreActions } from "../store";
import { Body, Heading4 } from "../style/typography";
import { FileUploadDropZone } from "./UploadReceipt.styled";
import { PrimaryButton } from "../style/buttons";
import {
  BlueHatFormInput,
  BlueHatFormInputFeedback,
  BlueHatForm,
} from "../style/form";

import { FaCheckCircle } from "react-icons/fa";
import { success } from "../style/colors";

import { Formik, useFormikContext, useFormik } from "formik";
import * as yup from "yup"; // for everything

const schema = yup.object({
  project: yup.string(),
});

const UploadReceipt = () => {
  const uploadReceipt = useStoreActions(
    (actions) => actions.receipt.uploadReceipt
  );

  const getProjects = useStoreActions(
    (actions) => actions.project.getProjectsByTransaction
  );

  const allProjects = useStoreState((state) => state.project.projects);

  let { transactionId } = useParams();

  useEffect(() => {
    getProjects(transactionId);
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedFile(acceptedFiles[0]);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      project: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const data = new FormData();
      data.append("file", selectedFile);
      data.append("file_name", selectedFile.name);
      const body = {
        data,
        transactionId,
      };
      uploadReceipt(body);
    },
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg,image/png",
  });
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {selectedFile ? (
              <FileUploadDropZone isDragActive={isDragActive}>
                <FaCheckCircle color={success} size={100} />
                <Body style={{ marginTop: 5 }}>{selectedFile.name}</Body>
              </FileUploadDropZone>
            ) : (
              <FileUploadDropZone isDragActive={isDragActive}>
                <Body>Click here to upload your receipt</Body>
              </FileUploadDropZone>
            )}
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12}>
          <BlueHatForm noValidate>
            <Form.Label style={{ fontWeight: "600" }}>
              Select a project
            </Form.Label>
            <Form.Control
              name="project"
              as="select"
              value={formik.values.project}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.project && !formik.errors.project}
              isInvalid={
                (formik.submitCount || formik.touched.project) &&
                !!formik.errors.project
              }
            >
              <option>Select Project</option>;
              {allProjects.map((project) => {
                return (
                  <option value={project._id} key={project._id}>
                    {project.name}
                  </option>
                );
              })}
            </Form.Control>
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.project}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12}>
          <PrimaryButton
            block
            onClick={() => {
              formik.submitForm(formik.values);
            }}
            className="mt-3"
            // style={{ position: "fixed", bottom: 0, width: "100%", left: 0 }}
          >
            Submit
          </PrimaryButton>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadReceipt;
