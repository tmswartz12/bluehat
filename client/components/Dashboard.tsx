import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  PrimaryButton,
  SecondaryButton,
  PrimaryButtonOutline,
  SecondaryButtonOutline,
  SuccessButton,
  SuccessButtonOutline,
  DangerButton,
  DangerButtonOutline,
  InfoButton,
  InfoButtonOutline,
  LightButton,
} from "../style/buttons";
import { Heading1 } from "../style/typography";
import {
  BlueHatAlert,
  SecondaryNav,
  SecondaryNavTab,
  TopRow,
} from "../style/system";

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
          <DangerButton>Danger</DangerButton>
          <DangerButtonOutline>Danger</DangerButtonOutline>
          <InfoButton>Info</InfoButton>
          <InfoButtonOutline>Info</InfoButtonOutline>
          <LightButton>Light</LightButton>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <SecondaryNav>
            <SecondaryNavTab eventKey="home" title="Tab 1"></SecondaryNavTab>
            <SecondaryNavTab eventKey="1" title="Tab 2"></SecondaryNavTab>
            <SecondaryNavTab eventKey="2" title="Tab 3"></SecondaryNavTab>
          </SecondaryNav>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <BlueHatAlert variant="primary">Hey</BlueHatAlert>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
