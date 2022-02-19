import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TopRow } from "../style/system";
import { Heading1 } from "../style/typography";

const Company = () => {
  return (
    <Container>
      <TopRow>
        <Col>
          <Heading1>Company</Heading1>
        </Col>
      </TopRow>
    </Container>
  );
};

export default Company;
