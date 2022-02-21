import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Form, Card } from 'react-bootstrap';
import { PrimaryButton, SecondaryButton } from '../style/buttons';

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
} from '../style/system';
import { Heading1, Body } from '../style/typography';

import {
  CardSmallBody,
} from './Cards.styled';

import { useStoreState, useStoreActions } from '../store';


const Cards = () => {
  const getAllCards = useStoreActions(
    (actions) => actions.card.getCards
  );

  const createCard = useStoreActions(
    (actions) => actions.card.createCard
  );

  const allCards = useStoreState(
    (state) => state.card.allCards
  );
  useEffect(() => {
    getAllCards();
  }, []);

  const handleAddCard = () => {
    createCard({
      label: 'Tylers card',
      limitAmount: '1050.00',
      limitInterval: 'monthly',
      allowedCategories: [],
      blockedCategories: [],
      cardType: 'physical',
    });
  };
  return (
    <Container>
      <TopRow>
        <Col>
          <Heading1>Cards</Heading1>
        </Col>
        <RightCol>
          <PrimaryButton onClick={() => handleAddCard()}>Add Card</PrimaryButton>
        </RightCol>
      </TopRow>
      {Boolean(allCards.length) && <Row style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Col>
          <SecondaryNav>
            <SecondaryNavTab
              eventKey="home"
              title="All Cards"
            ></SecondaryNavTab>
            <SecondaryNavTab
              eventKey="1"
              title="My Cards"
            ></SecondaryNavTab>
          </SecondaryNav>
        </Col>
      </Row>}
      <WhiteSiteRow>
      {!allCards.length ? <Col>
      You have not created any cards. Add one by clicking "Add Card" above.
      </Col> : <Col xs={12}>
          <Row>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    {" "}
                    <CardSmallBody>Search</CardSmallBody>
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
                <CardSmallBody>Status</CardSmallBody>
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
                <CardSmallBody>Option 3</CardSmallBody>
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
        </Col>}
      </WhiteSiteRow>
    </Container>
  );
};

export default Cards;
