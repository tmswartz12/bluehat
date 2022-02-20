import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Form, Card } from "react-bootstrap";
import {
  PrimaryButton,
  SecondaryButton,
  SecondaryButtonOutline,
} from "../style/buttons";

import {
  WhiteSiteRow,
  BlueHatTable,
  BlueHatTableHeading,
  DetailsHeader,
  DetailsCell,
  BlueHatTableCell,
  TableRow,
  TopRow,
  RightCol,
  SecondaryNav,
  SecondaryNavTab,
} from "../style/system";
import { Heading1, Body, Heading4 } from "../style/typography";

import { ProjectSmallBody } from "./Projects.styled";
import TransactionsHeader from "./TransactionsHeader";
import TransactionsTable from "./TransactionsTable";

const SelectedProject = () => {
  return (
    <Container>
      <TopRow>
        <Col>
          <div>
            <Heading1>Huntington Hospital</Heading1>
          </div>
          <div>
            <Body>100 W California Blvd Pasadena CA</Body>
          </div>
        </Col>
        <RightCol>
          <SecondaryButtonOutline style={{ marginRight: 5 }}>
            Edit Project
          </SecondaryButtonOutline>
          <PrimaryButton>Upload Contract</PrimaryButton>
        </RightCol>
      </TopRow>
      <TransactionsHeader />
      <TransactionsTable />
    </Container>
  );
};

export default SelectedProject;
