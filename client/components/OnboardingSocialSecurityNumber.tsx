import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, useFormikContext, useFormik } from "formik";
import * as yup from "yup"; // for everything
import {
  BlueHatFormInput,
  BlueHatFormInputFeedback,
  BlueHatForm,
} from "../style/form";
import { useStoreState, useStoreActions } from "../store";

import { Heading1, SmallBody } from "../style/typography";

import { PrimaryButton } from "../style/buttons";
import { CenteredCol } from "./Register.styled";

const schema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
});

const UserSocialSecurityNumber = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      firstName: "",
      lastName: "",
      phone: "",
      dateOfBirth: "",
      idNumber: "",
      idType: "ssn",
      line1: "",
      line2: "",
      city: "",
      state: "",
      country: "US",
      postalCode: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // register({
      //   firstName: values.firstName,
      // });
      console.log(values);
      //   formik.resetForm();
    },
  });
  return (
    <>
      <Row>
        <Col style={{ flexDirection: "column" }}>
          <div>
            <Heading1>Personal Information</Heading1>
          </div>
          <div>
            <SmallBody>
              Enter your social security number. We need this information to
              verify your identity.
            </SmallBody>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>
              Social Secuirty Number
            </Form.Label>
            <BlueHatFormInput
              type="text"
              name="lastName"
              // style={{ width: "100%" }}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.lastName && !formik.errors.lastName}
              isInvalid={
                (formik.submitCount || formik.touched.lastName) &&
                !!formik.errors.lastName
              }
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.lastName}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12}>
          <PrimaryButton
            block
            className="mt-3"
            // style={{ width: 400 }}
            onClick={() => {
              formik.submitForm(formik.values);
            }}
            variant="success"
          >
            Continue
          </PrimaryButton>
        </Col>
      </Row>
      <Row className="mt-5">
        <CenteredCol>
          <img
            src="https://i.imgur.com/JLiEv7N.png"
            height={45}
            width={"auto"}
          />
        </CenteredCol>
        {/* <Col>
          <img
            src="https://i.imgur.com/MqShubV.png"
            height={60}
            width={"auto"}
          />
        </Col> */}
      </Row>
    </>
  );
};

export default UserSocialSecurityNumber;
