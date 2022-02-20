import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import history from '../history';
import { PrimaryButton } from '../style/buttons';

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
import { Heading1 } from '../style/typography';

import { ProjectSmallBody } from './Projects.styled';

const Projects = () => {
  return (
    <Container>
      <TopRow>
        <Col>
          <Heading1>Projects</Heading1>
        </Col>
        <RightCol>
          <PrimaryButton>Add Project</PrimaryButton>
        </RightCol>
      </TopRow>
      <Row style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Col>
          <SecondaryNav>
            <SecondaryNavTab
              eventKey="home"
              title="All Projects"
            ></SecondaryNavTab>
            <SecondaryNavTab
              eventKey="1"
              title="My Projects"
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
                    {' '}
                    <ProjectSmallBody>Search</ProjectSmallBody>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Search projects..."
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form.Label>
                <ProjectSmallBody>Status</ProjectSmallBody>
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
                <ProjectSmallBody>Role</ProjectSmallBody>
              </Form.Label>{' '}
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
                    <DetailsHeader>Project</DetailsHeader>
                    <BlueHatTableHeading>Client</BlueHatTableHeading>
                    <BlueHatTableHeading>Project Manager</BlueHatTableHeading>
                    <BlueHatTableHeading>Status</BlueHatTableHeading>
                    <BlueHatTableHeading>Spend</BlueHatTableHeading>
                    <BlueHatTableHeading></BlueHatTableHeading>

                  </tr>
                </thead>
                <tbody>
                  <TableRow onClick={() => history.push('/projects/123')}>
                    <DetailsCell>
                      <div>Hunting Hospital</div>
                      <div>
                        <ProjectSmallBody>
                          100 W California Blvd Pasadena CA
                        </ProjectSmallBody>
                      </div>
                    </DetailsCell>
                    <BlueHatTableCell>
                      Jones CM, INC
                    </BlueHatTableCell>
                    <BlueHatTableCell>Tyler Swartz</BlueHatTableCell>
                    <BlueHatTableCell>
                      Live
                    </BlueHatTableCell>
                    <BlueHatTableCell>$1,456.22</BlueHatTableCell>
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

export default Projects;
