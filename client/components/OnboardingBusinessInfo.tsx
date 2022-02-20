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
import { Progress } from "../style/system";
import { OnboardingProgress } from "./Onboarding.styled";

const schema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
});

const BusinessInfo = () => {
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
        <OnboardingProgress now={90} animated />
      </Row>
      <Row>
        <Col style={{ flexDirection: "column" }}>
          <div>
            <Heading1>Business Information</Heading1>
          </div>
          <div>
            <SmallBody>
              Enter information about your business to finish your BlueHat
              credit card application.
            </SmallBody>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>
              Legal Business Name
            </Form.Label>
            <BlueHatFormInput
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
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.firstName}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={6}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>Business EIN</Form.Label>
            <BlueHatFormInput
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
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.firstName}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
        <Col xs={6}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>
              Formation Date
            </Form.Label>
            <BlueHatFormInput
              type="date"
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
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.firstName}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={6}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>Your Title</Form.Label>
            <BlueHatFormInput
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
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.firstName}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
        <Col xs={6}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>Ownership</Form.Label>
            <BlueHatFormInput
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
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.firstName}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
      </Row>
      <Row className="mt-4">
        <hr />
      </Row>
      <Row className="mt-3">
        <Col xs={12}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>
              Business Address
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
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>Line 2</Form.Label>
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
        <Col xs={4}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>City</Form.Label>
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
        <Col xs={4}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>State</Form.Label>
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
        <Col xs={4}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>Zipcode</Form.Label>
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
    </>
  );
};

export default BusinessInfo;
