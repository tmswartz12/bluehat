import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import { PrimaryButton, SecondaryButton } from "../style/buttons";

import {
  WhiteSiteRow,
  Progress,
  BlueHatTable,
  BlueHatTableHeading,
  DetailsHeader,
  DetailsCell,
  BlueHatTableCell,
  StageHeader,
  StageCell,
  TableRow,
  TopRow,
  RightCol
} from "../style/system";
import { Heading1, Body } from "../style/typography";
import {
  CurrentBalance,
  TransactionSmallBody,
  TransactionLargeBody,
  StageWrapper
} from "./Transactions.styled";

import {
  CardSmallBody
} from './Cards.styled'


const Cards = () => {
  return (
    <Container>
      <TopRow>
        <Col>
          <Heading1>Cards</Heading1>
        </Col>
        <RightCol>
          <PrimaryButton>Add Card</PrimaryButton>
        </RightCol>
      </TopRow>
      <WhiteSiteRow>
      <Col xs={12}>
          <Row>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    {" "}
                    <TransactionSmallBody>Search</TransactionSmallBody>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Search cards..."
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form.Label>
                <TransactionSmallBody>Status</TransactionSmallBody>
              </Form.Label>
              <Form.Control as="select" aria-label="Default select example" className="show-tick">
                {/* <option>Open this select menu</option> */}
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>
                <TransactionSmallBody>Option 3</TransactionSmallBody>
              </Form.Label>{" "}
              <Form.Control as="select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <BlueHatTable responsive>
                <thead>
                  <tr>
                    <DetailsHeader>Card</DetailsHeader>
                    <BlueHatTableHeading>Cardholder</BlueHatTableHeading>
                    <BlueHatTableHeading>Current Balance</BlueHatTableHeading>
                    <BlueHatTableHeading>Monthly Limit</BlueHatTableHeading>
                    <BlueHatTableHeading>Requires Approval</BlueHatTableHeading>
                    <BlueHatTableHeading></BlueHatTableHeading>

                  </tr>
                </thead>
                <tbody>
                  <TableRow >
                    <DetailsCell>
                      <div>General Expense Card</div>
                      <div>
                        <CardSmallBody>
                          Physical | 5432
                        </CardSmallBody>
                      </div>
                    </DetailsCell>
                    <BlueHatTableCell>
                    <div>Chris McDonough</div>
                      <div>
                        <CardSmallBody>
                          Project Manager
                        </CardSmallBody>
                      </div>
                    </BlueHatTableCell>
                    <BlueHatTableCell>$1,456.22</BlueHatTableCell>
                    <BlueHatTableCell>$1,456.22</BlueHatTableCell>
                    <BlueHatTableCell>Yes</BlueHatTableCell>
                    <BlueHatTableCell>></BlueHatTableCell>
                  </TableRow>
                </tbody>
              </BlueHatTable>
            </Col>
          </Row>
        </Col>
      </WhiteSiteRow>
    </Container>
  );
};

export default Cards;
