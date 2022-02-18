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

const Dashboard = () => {
  return (
    <Container>
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
      <Row>
        <Col>
          <div>1</div>
          <div>3</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
