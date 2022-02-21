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

import { PrimaryButton, LoadingButton } from "../style/buttons";
import { US_STATES } from "../util/us-states";
import { OnboardingProgress } from "./Onboarding.styled";

const schema = yup.object({
  line1: yup.string().required("Required"),
  line2: yup.string(),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  postalCode: yup.string().required("Required"),
});

const UserAddress = () => {
  const submitUserAddress = useStoreActions(
    (actions) => actions.user.onboarding
  );
  const loading = useStoreState((state) => state.user.loading);

  const formik = useFormik({
    initialValues: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      country: "US",
      postalCode: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      submitUserAddress({
        address: {
          line1: values.line1,
          line2: values.line2,
          city: values.city,
          state: values.state,
          country: "US",
          postalCode: values.postalCode,
        },
      });
      console.log(values);
      //   formik.resetForm();
    },
  });
  return (
    <>
      <Row>
        <OnboardingProgress now={60} animated />
      </Row>
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
              name="line1"
              // style={{ width: "100%" }}
              value={formik.values.line1}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.line1 && !formik.errors.line1}
              isInvalid={
                (formik.submitCount || formik.touched.line1) &&
                !!formik.errors.line1
              }
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.line1}
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
              name="line2"
              // style={{ width: "100%" }}
              value={formik.values.line2}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.line2 && !formik.errors.line2}
              isInvalid={
                (formik.submitCount || formik.touched.line2) &&
                !!formik.errors.line2
              }
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.line2}
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
              name="city"
              // style={{ width: "100%" }}
              value={formik.values.city}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.city && !formik.errors.city}
              isInvalid={
                (formik.submitCount || formik.touched.city) &&
                !!formik.errors.city
              }
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.city}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
        <Col xs={4}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>State</Form.Label>
            <Form.Control
              name="state"
              as="select"
              value={formik.values.state}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.state && !formik.errors.state}
              isInvalid={
                (formik.submitCount || formik.touched.state) &&
                !!formik.errors.state
              }
            >
              <option>Select State</option>;
              {US_STATES.map((state) => {
                return (
                  <option value={state} key={state}>
                    {state}
                  </option>
                );
              })}
            </Form.Control>
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.state}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
        <Col xs={4}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>Zipcode</Form.Label>
            <BlueHatFormInput
              type="text"
              name="postalCode"
              value={formik.values.postalCode}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.postalCode && !formik.errors.postalCode}
              isInvalid={
                (formik.submitCount || formik.touched.postalCode) &&
                !!formik.errors.postalCode
              }
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.postalCode}
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
              Continue{" "}
            </PrimaryButton>
          )}
        </Col>
      </Row>
    </>
  );
};

export default UserAddress;
