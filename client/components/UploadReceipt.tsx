import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useStoreState, useStoreActions } from "../store";
import { Body, Heading4 } from "../style/typography";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FileUploadDropZone } from "./UploadReceipt.styled";
import { PrimaryButton } from "../style/buttons";

import { FaCheckCircle } from "react-icons/fa";
import { success } from "../style/colors";

const UploadReceipt = () => {
  const uploadReceipt = useStoreActions(
    (actions) => actions.receipt.uploadReceipt
  );

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

  const onSubmit = () => {
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("file_name", selectedFile.name);
    uploadReceipt(data);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
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
          <PrimaryButton
            block
            onClick={() => onSubmit()}
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
