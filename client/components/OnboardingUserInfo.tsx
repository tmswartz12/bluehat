import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, useFormikContext, useFormik } from "formik";
import * as yup from "yup"; // for everything
import moment from "moment";
import {
  BlueHatFormInput,
  BlueHatFormInputFeedback,
  BlueHatForm,
  BlueHatCleave,
} from "../style/form";
import { useStoreState, useStoreActions } from "../store";

import { Heading1, SmallBody } from "../style/typography";

import { PrimaryButton } from "../style/buttons";
import { OnboardingProgress } from "./Onboarding.styled";

const schema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  dateOfBirth: yup
    .string()
    .test("Date Of Birth", "Must be older than 18 years old", (value) => {
      return moment().diff(moment(value), "years") >= 18;
    }),
});

const UserInfo = () => {
  const submitUserInfo = useStoreActions((actions) => actions.user.onboarding);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      dateOfBirth: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const formattedPhone = values.phone.replace(/[^\d\+]/g, "");
      submitUserInfo({
        firstName: values.firstName,
        lastName: values.lastName,
        phone: formattedPhone,
        dateOfBirth: values.dateOfBirth,
      });
      // console.log(values);
      //   formik.resetForm();
    },
  });
  return (
    <>
      <Row>
        <OnboardingProgress now={25} animated />
      </Row>
      <Row>
        <Col style={{ flexDirection: "column" }}>
          <div>
            <Heading1>Personal Information</Heading1>
          </div>
          <div>
            <SmallBody>
              Enter information about yourself to apply for a BlueHat credit
              card.
            </SmallBody>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={6}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>FirstName</Form.Label>
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
            <Form.Label style={{ fontWeight: "600" }}>Last Name</Form.Label>
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
        <Col xs={6}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>Phone Number</Form.Label>
            <BlueHatCleave
              // type="text"
              name="phone"
              // style={{ width: "400px" }}
              // value={formik.values.phone}
              // onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.phone && !formik.errors.phone}
              // isInvalid={
              //   (formik.submitCount || formik.touched.phone) &&
              //   !!formik.errors.phone
              // }
              options={{
                phone: true,
                phoneRegionCode: "us",
                delimiter: "—",
                prefix: "+1",
              }}
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.phone}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
        <Col xs={6}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>Date Of Birth</Form.Label>
            <BlueHatFormInput
              type="date"
              name="dateOfBirth"
              // style={{ width: "400px" }}
              value={formik.values.dateOfBirth}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.dateOfBirth && !formik.errors.dateOfBirth}
              isInvalid={
                (formik.submitCount || formik.touched.dateOfBirth) &&
                !!formik.errors.dateOfBirth
              }
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.dateOfBirth}
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
          >
            Continue
          </PrimaryButton>
        </Col>
      </Row>
    </>
  );
};

export default UserInfo;
