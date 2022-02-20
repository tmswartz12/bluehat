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
import { CenteredCol } from "./Register.styled";
import { OnboardingProgress } from "./Onboarding.styled";

const schema = yup.object({
  idNumber: yup.string().required("Required"),
});

const UserSocialSecurityNumber = () => {
  const submitIdNumber = useStoreActions((actions) => actions.user.onboarding);

  const formik = useFormik({
    initialValues: {
      idNumber: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const formattedId = values.idNumber.replace(/[^\d\+]/g, "");

      submitIdNumber({
        idNumber: formattedId,
        idType: "ssn",
      });
      //   formik.resetForm();
    },
  });
  return (
    <>
      <Row>
        <OnboardingProgress now={80} animated />
      </Row>
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
            <BlueHatCleave
              name="idNumber"
              // style={{ width: "400px" }}
              // value={formik.values.phone}
              // onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.idNumber && !formik.errors.idNumber}
              // isInvalid={
              //   (formik.submitCount || formik.touched.phone) &&
              //   !!formik.errors.phone
              // }
              options={{
                blocks: [3, 2, 4],
                delimiter: "—",
                numericOnly: true,
              }}
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
