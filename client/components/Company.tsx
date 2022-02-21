import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Form, Card } from 'react-bootstrap';
import { PrimaryButton, SecondaryButton } from '../style/buttons';
import { useStoreState, useStoreActions } from '../store';


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


import { CompanySmallBody } from './Company.styled';


const Company = () => {
  const business = useStoreState((state) => state.business.data);
  const employees = useStoreState((state) => state.business.employees);

  const getBusiness = useStoreActions(
    (actions) => actions.business.getBusiness
  );

  useEffect(() => {
    if (!business || !employees.length) {
      getBusiness();
    }
  }, []);
  return (
     <Container>
      <TopRow>
        <Col>
           <Heading1> Company</Heading1>
        </Col>
        <RightCol>
          <PrimaryButton>Add Employee</PrimaryButton>
        </RightCol>
      </TopRow>
      <Row style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Col>
          <SecondaryNav>
            <SecondaryNavTab
              eventKey="home"
              title="All Employees"
            ></SecondaryNavTab>
            <SecondaryNavTab
              eventKey="1"
              title="Pending Invites"
            ></SecondaryNavTab>
          </SecondaryNav>
        </Col>
      </Row>
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
                    <CompanySmallBody>Search</CompanySmallBody>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Search employees..."
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form.Label>
                <CompanySmallBody>Status</CompanySmallBody>
              </Form.Label>
              <Form.Control as="select" aria-label="Default select example" className="show-tick">
                {/* <option>Open this select menu</option> */}
                <option value="1">All</option>
                <option value="1">Live</option>
                <option value="1">Frozen</option>
                <option value="2">Shipped</option>
                <option value="3">Pending Verification</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>
                <CompanySmallBody>Role</CompanySmallBody>
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
                    <DetailsHeader>Employee</DetailsHeader>
                    <BlueHatTableHeading>Role</BlueHatTableHeading>
                    <BlueHatTableHeading>Phone Number</BlueHatTableHeading>
                    <BlueHatTableHeading>Status</BlueHatTableHeading>
                    <BlueHatTableHeading>Period Spend</BlueHatTableHeading>
                    <BlueHatTableHeading></BlueHatTableHeading>

                  </tr>
                </thead>
                <tbody>
                  {employees.map(employee => {
                    const { firstName, lastName, email, role, phone } = employee;
                    return (
                    <TableRow >
                    <DetailsCell>
                      <div>{`${firstName} ${lastName}`}</div>
                      <div>
                        <CompanySmallBody>
                          {email}
                        </CompanySmallBody>
                      </div>
                    </DetailsCell>
                    <BlueHatTableCell>
                      {role}
                    </BlueHatTableCell>
                    <BlueHatTableCell>{phone}</BlueHatTableCell>
                    <BlueHatTableCell>
                      Accepted
                    </BlueHatTableCell>
                    <BlueHatTableCell>$1,456.22</BlueHatTableCell>
                    <BlueHatTableCell>></BlueHatTableCell>
                  </TableRow>
                    );
                  })}

                </tbody>
              </BlueHatTable>
            </Col>
          </Row>
        </Col>
      </WhiteSiteRow>
    </Container>
  );
};

export default Company;
