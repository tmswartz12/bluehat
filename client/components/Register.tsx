import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useStoreState, useStoreActions } from "../store";
import MoonLoader from "react-spinners/MoonLoader";
import { SpinnerCircular } from "spinners-react";

import {
  RegistrationPanelRight,
  RegistrationPanelLeft,
  CenteredCol,
} from "./Register.styled";
import { Formik, useFormikContext, useFormik } from "formik";
import * as yup from "yup"; // for everything

import { Heading1, SmallBody } from "../style/typography";
import { LoadingButton, PrimaryButton } from "../style/buttons";
import {
  BlueHatFormInput,
  BlueHatForm,
  BlueHatFormInputFeedback,
} from "../style/form";

const schema = yup.object({
  email: yup.string().required("Required"),
});

const Register = () => {
  const user = useStoreState((state) => state.user.data);
  const loading = useStoreState((state) => state.user.loading);
  const register = useStoreActions((actions) => actions.user.register);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      register({
        email: values.email,
      });
      console.log(values);
      //   formik.resetForm();
    },
  });
  return (
    <Container fluid>
      <Row>
        <RegistrationPanelLeft sm={6}>
          <img
            src="https://i.imgur.com/GOBosyk.png"
            width={"auto"}
            height={"100px"}
          />
          <p className="mt-3">The Contractor's Credit Card </p>
        </RegistrationPanelLeft>
        <RegistrationPanelRight xs={12} sm={6}>
          <Row>
            <Col style={{ flexDirection: "column" }}>
              <div>
                <Heading1>Welcome to BlueHat</Heading1>
              </div>
              <div>
                <SmallBody>
                  Register for a BlueHat card and get approved instantly
                </SmallBody>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12}>
              <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
                <BlueHatFormInput
                  type="text"
                  name="email"
                  placeholder="Enter your email..."
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  isValid={formik.touched.email && !formik.errors.email}
                  isInvalid={
                    (formik.submitCount || formik.touched.email) &&
                    !!formik.errors.email
                  }
                />
                <BlueHatFormInputFeedback type="invalid">
                  {formik.errors.email}
                </BlueHatFormInputFeedback>
              </BlueHatForm>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              {loading ? (
                <LoadingButton block />
              ) : (
                <PrimaryButton
                  block
                  onClick={() => {
                    formik.submitForm(formik.values);
                  }}
                >
                  Get Started
                </PrimaryButton>
              )}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              <div>
                <p> Forgot your password?</p>
              </div>
            </Col>
          </Row>
        </RegistrationPanelRight>
      </Row>
    </Container>
  );
};

export default Register;
