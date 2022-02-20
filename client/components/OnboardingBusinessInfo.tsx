import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, useFormikContext, useFormik } from "formik";
import * as yup from "yup"; // for everything
import {
  BlueHatFormInput,
  BlueHatFormInputFeedback,
  BlueHatForm,
  BlueHatCleave,
} from "../style/form";
import { useStoreState, useStoreActions } from "../store";

import { Heading1, SmallBody } from "../style/typography";

import { PrimaryButton } from "../style/buttons";
import { Progress } from "../style/system";
import { OnboardingProgress } from "./Onboarding.styled";
import { US_STATES } from "../util/us-states";

const ENTITY_TYPES = {
  soleProprietor: "Sole Proprietor",
  singleMemberLLC: "Single Member LLC",
  limitedLiabilityCompany: "Limited Liability Company",
  generalPartnership: "General Partnership",
  unlistedCorporation: "Unlisted Corporation",
  publiclyTradedCorporation: "Publicly Traded Corporation",
  association: "Association",
  nonProfit: "Non Profit",
  governmentOrganization: "Government Organization",
  revocableTrust: "Revocable Trust",
  irrevocableTrust: "Irrevocable Trust",
  estate: "Estate",
};

const schema = yup.object({
  legalName: yup.string().required("Required"),
  // entityType: yup.string().required("Required"),
  // dba: yup.string().required("Required"),
  idNumber: yup.string().required("Required"),
  title: yup.string().required("Required"),
  ownership: yup.string().required("Required"),
  formationDate: yup.string().required("Required"),
  // industry: yup.string().required("Required"),
  line1: yup.string().required("Required"),
  line2: yup.string(),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  postalCode: yup.string().required("Required"),
});

const BusinessInfo = () => {
  const submitBusinessInfo = useStoreActions(
    (actions) => actions.business.onboarding
  );

  const formik = useFormik({
    initialValues: {
      legalName: "",
      entityType: "",
      idNumber: "",
      dba: "",
      idType: "",
      title: "",
      ownership: "",
      formationDate: "",
      industry: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      country: "US",
      postalCode: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const formattedId = values.idNumber.replace(/[^\d\+]/g, "");

      console.log({ values });

      const keys = Object.keys(ENTITY_TYPES);
      let formatted = "";
      const value = keys.forEach((key) => {
        if (ENTITY_TYPES[key] === values.entityType) {
          formatted = key;
          return key;
        }
      });
      console.log("value", value);

      submitBusinessInfo({
        legalName: values.legalName,
        entityType: formatted,
        dba: values.legalName,
        idType: "ein",
        idNumber: formattedId,
        title: values.title,
        ownership: values.ownership,
        formationDate: values.formationDate,
        industry: "construction",
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
        <Col xs={6}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>
              Legal Business Name
            </Form.Label>
            <BlueHatFormInput
              type="text"
              name="legalName"
              value={formik.values.legalName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.legalName && !formik.errors.legalName}
              isInvalid={
                (formik.submitCount || formik.touched.legalName) &&
                !!formik.errors.legalName
              }
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.legalName}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
        <Col xs={6}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>Entity Type</Form.Label>
            <Form.Control
              name="entityType"
              as="select"
              value={formik.values.entityType}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.entityType && !formik.errors.entityType}
              isInvalid={
                (formik.submitCount || formik.touched.entityType) &&
                !!formik.errors.entityType
              }
            >
              <option>Select Entity Type</option>;
              {Object.values(ENTITY_TYPES).map((type) => {
                return (
                  <option value={type} key={type}>
                    {type}
                  </option>
                );
              })}
            </Form.Control>
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.state}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={6}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>Business EIN</Form.Label>

            <BlueHatCleave
              name="idNumber"
              onChange={formik.handleChange}
              options={{
                blocks: [2, 7],
                delimiter: "—",
                numericOnly: true,
              }}
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.idNumber}
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
              name="formationDate"
              // style={{ width: "400px" }}
              value={formik.values.formationDate}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={
                formik.touched.formationDate && !formik.errors.formationDate
              }
              isInvalid={
                (formik.submitCount || formik.touched.formationDate) &&
                !!formik.errors.formationDate
              }
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.formationDate}
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
              name="title"
              // style={{ width: "400px" }}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.title && !formik.errors.title}
              isInvalid={
                (formik.submitCount || formik.touched.title) &&
                !!formik.errors.title
              }
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.title}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
        <Col xs={6}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>Ownership</Form.Label>
            <BlueHatFormInput
              type="text"
              name="ownership"
              // style={{ width: "400px" }}
              value={formik.values.ownership}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.ownership && !formik.errors.ownership}
              isInvalid={
                (formik.submitCount || formik.touched.ownership) &&
                !!formik.errors.ownership
              }
            />
            <BlueHatFormInputFeedback type="invalid">
              {formik.errors.ownership}
            </BlueHatFormInputFeedback>
          </BlueHatForm>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12}>
          <BlueHatForm noValidate onSubmit={formik.handleSubmit}>
            <Form.Label style={{ fontWeight: "600" }}>
              Business Address
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
          <PrimaryButton
            block
            className="mt-3"
            // style={{ width: 400 }}
            onClick={() => {
              formik.submitForm(formik.values);
            }}
            variant="success"
          >
            Submit Application
          </PrimaryButton>
        </Col>
      </Row>
    </>
  );
};

export default BusinessInfo;
