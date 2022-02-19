import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TopRow } from "../style/system";
import { Heading1 } from "../style/typography";

const Cards = () => {
  return (
    <Container>
      <TopRow>
        <Col>
          <Heading1>Cards</Heading1>
        </Col>
      </TopRow>
    </Container>
  );
};

export default Cards;
