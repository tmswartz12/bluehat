import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  PrimaryButton,
  SecondaryButton,
  PrimaryButtonOutline,
  SecondaryButtonOutline,
  SuccessButton,
  SuccessButtonOutline,
} from "../style/buttons";
import { Heading1 } from "../style/typography";
import { TopRow } from "../style/system";

const Dashboard = () => {
  return (
    <Container>
      <TopRow>
        <Col>
          <Heading1 style={{ fontWeight: "bold" }}>Dashboard</Heading1>
        </Col>
      </TopRow>
      <Row>
        <Col>
          <PrimaryButton>Primary</PrimaryButton>
          <PrimaryButtonOutline>Primary</PrimaryButtonOutline>
          <SecondaryButton>Secondary</SecondaryButton>
          <SecondaryButtonOutline>Secondary</SecondaryButtonOutline>
          <SuccessButton>Success</SuccessButton>
          <SuccessButtonOutline>Success</SuccessButtonOutline>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
