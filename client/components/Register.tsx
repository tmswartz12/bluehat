import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useStoreState, useStoreActions } from "../store";
import {
  RegistrationPanelRight,
  RegistrationPanelLeft,
  CenteredCol,
} from "./Register.styled";
import { Formik, useFormikContext, useFormik } from "formik";
import * as yup from "yup"; // for everything

const schema = yup.object({
  email: yup.string().required("Required"),
});

const Register = () => {
  const user = useStoreState((state) => state.user.data);
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
        <RegistrationPanelLeft xs={6}>
          <img
            src="https://i.imgur.com/GOBosyk.png"
            width={"auto"}
            height={"100px"}
          />
          <p className="mt-3">The Contractor's Credit Card </p>
        </RegistrationPanelLeft>
        <RegistrationPanelRight xs={6}>
          <Row>
            <CenteredCol xs={12}>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Label style={{ fontWeight: "600" }}>
                  Enter your email to get started...
                </Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  style={{ width: "400px" }}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  isValid={formik.touched.email && !formik.errors.email}
                  isInvalid={
                    (formik.submitCount || formik.touched.email) &&
                    !!formik.errors.email
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form>
            </CenteredCol>
          </Row>
          <Row>
            <CenteredCol xs={12}>
              <Button
                block
                className="mt-3"
                style={{ width: 400 }}
                onClick={() => {
                  formik.submitForm(formik.values);
                }}
                variant="success"
              >
                Get Started
              </Button>
            </CenteredCol>
          </Row>
          <Row className="mt-3">
            <CenteredCol xs={12} style={{ width: 400 }}>
              <div style={{ width: 400 }}>
                <p style={{ width: 400 }}> Forgot your password?</p>
              </div>
            </CenteredCol>
          </Row>
        </RegistrationPanelRight>
      </Row>
    </Container>
  );
};

export default Register;
