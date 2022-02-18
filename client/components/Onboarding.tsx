import React from "react";
import {
  RegistrationPanelRight,
  RegistrationPanelLeft,
  CenteredCol,
} from "./Register.styled";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, useFormikContext, useFormik } from "formik";
import * as yup from "yup"; // for everything

const schema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
});

/**
 *
   "firstName": "Chris",
   "middleName": "",
   "lastName": "Tyler Test",
   "phone": "+19113409215",
   "dateOfBirth": "1974-01-25",
   "idNumber": "245230123",
   "idType": "ssn",
   "address": {
       "addressType": "mailing",
       "line1": "123 Main St",
       "line2": "",
       "city": "New York",
       "state": "NY",
       "country": "US",
       "postalCode": "10001"
   }
}
 */

const Onboarding = () => {
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
    <Container fluid>
      <Row className="mt-3">
        <RegistrationPanelLeft xs={6}>
          <img
            src="https://i.imgur.com/GOBosyk.png"
            width={"auto"}
            height={"100px"}
          />
          <p className="mt-3">The Contractor's Credit Card </p>
        </RegistrationPanelLeft>
        <RegistrationPanelRight xs={6}>
          <Row className="mt-3" style={{ paddingLeft: 50, paddingRight: 50 }}>
            <Col xs={6}>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Label style={{ fontWeight: "600" }}>FirstName</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  // style={{ width: "400px" }}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  isValid={formik.touched.firstName && !formik.errors.firstName}
                  isInvalid={
                    (formik.submitCount || formik.touched.firstName) &&
                    !!formik.errors.firstName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.firstName}
                </Form.Control.Feedback>
              </Form>
            </Col>
            <Col xs={6}>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Label style={{ fontWeight: "600" }}>Last Name</Form.Label>
                <Form.Control
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
                <Form.Control.Feedback type="invalid">
                  {formik.errors.lastName}
                </Form.Control.Feedback>
              </Form>
            </Col>
          </Row>

          <Row className="mt-3" style={{ paddingLeft: 50, paddingRight: 50 }}>
            <Col xs={12}>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Label style={{ fontWeight: "600" }}>
                  Phone Number
                </Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  // style={{ width: "400px" }}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  isValid={formik.touched.firstName && !formik.errors.firstName}
                  isInvalid={
                    (formik.submitCount || formik.touched.firstName) &&
                    !!formik.errors.firstName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.firstName}
                </Form.Control.Feedback>
              </Form>
            </Col>
          </Row>

          <Row className="mt-3" style={{ paddingLeft: 50, paddingRight: 50 }}>
            <Col xs={6}>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Label style={{ fontWeight: "600" }}>
                  Date Of Birth
                </Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  // style={{ width: "400px" }}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  isValid={formik.touched.firstName && !formik.errors.firstName}
                  isInvalid={
                    (formik.submitCount || formik.touched.firstName) &&
                    !!formik.errors.firstName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.firstName}
                </Form.Control.Feedback>
              </Form>
            </Col>
            <Col xs={6}>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Label style={{ fontWeight: "600" }}>
                  Social Security Number
                </Form.Label>
                <Form.Control
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
                <Form.Control.Feedback type="invalid">
                  {formik.errors.lastName}
                </Form.Control.Feedback>
              </Form>
            </Col>
          </Row>
          <Row className="mt-3" style={{ paddingLeft: 50, paddingRight: 50 }}>
            <Col xs={12}>
              <Button
                block
                className="mt-3"
                // style={{ width: 400 }}
                onClick={() => {
                  formik.submitForm(formik.values);
                }}
                variant="success"
              >
                Continue
              </Button>
            </Col>
          </Row>
          {/* <Row className="mt-3" style={{paddingLeft: 50, paddingRight: 50}}>
            <Col xs={12} style={{ width: 400 }}>
              <div style={{ width: 400 }}>
                <p style={{ width: 400 }}> Forgot your password?</p>
              </div>
            </Col>
          </Row> */}
        </RegistrationPanelRight>
      </Row>
    </Container>
  );
};

export default Onboarding;
