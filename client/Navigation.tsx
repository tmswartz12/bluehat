import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Cookies from "js-cookie";

const Navigation = () => {
  const hasCookie = Boolean(Cookies.get("blueHatAuth"));

  /**
   * This is the Navbar for logged out users & users who have not completed onboarding
   */

  /**
   * This is the Navbar for logged in users past onboarding
   */
  if (hasCookie) {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">
            <img
              src="https://i.imgur.com/uSrS3lQ.png"
              width={"auto"}
              height={"25"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/cards">Cards</Nav.Link>
              <Nav.Link eventKey={2} href="/company">
                Company
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return null;
  }
};

export default Navigation;
