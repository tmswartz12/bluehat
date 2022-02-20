import React from "react";
import {
  RegistrationPanelRight,
  RegistrationPanelLeft,
  CenteredCol,
} from "./Register.styled";
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

import OnboardingUserInfo from "./OnboardingUserInfo";
import OnboardingUserAddress from "./OnboardingUserAddress";
import OnboardingSocialSecurityNumber from "./OnboardingSocialSecurityNumber";
import OnboardingBusinessInfo from "./OnboardingBusinessInfo";

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

  const user = useStoreState((state) => state.user.data);

  const getNextQuestion = () => {
    switch (user.onboardingStatus) {
      case "userInfo":
        return <OnboardingUserInfo />;
      case "userAddress":
        return <OnboardingUserAddress />;
      case "socialSecurityNumber":
        return <OnboardingSocialSecurityNumber />;
      case "businessInfo":
        return <OnboardingBusinessInfo />;
      default:
    }
  };
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
          {getNextQuestion()}
        </RegistrationPanelRight>
      </Row>
    </Container>
  );
};

export default Onboarding;
