import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Heading1 } from "../style/typography";
import { TopRow } from "../style/system";

const Projects = () => {
  return (
    <Container>
      <TopRow>
        <Col>
          <Heading1>Projects</Heading1>
        </Col>
      </TopRow>
    </Container>
  );
};

export default Projects;
