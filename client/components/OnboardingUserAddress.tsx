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

const schema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
});

const UserAddress = () => {
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
            <SmallBody>Enter your current home address.</SmallBody>
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>
              Street Address
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

export default UserAddress;
