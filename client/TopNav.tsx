import React from "react";
import { Navbar, Container, NavDropdown, Nav, Badge } from "react-bootstrap";
import useWindowSize from "./util/useWindowSize";
const TopNav = () => {
  const size = useWindowSize();
  console.log("size", size);
  const showAllNavOptions = size.width < 768;
  return (
    <Navbar collapseOnSelect expand="md" style={{ backgroundColor: `white` }}>
      <Container fluid>
        <Navbar.Brand href="/home">
          <img
            src="https://i.imgur.com/idM68KR.png"
            width={"auto"}
            height={"25"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {showAllNavOptions && (
              <>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
              </>
            )}
          </Nav>

          <Nav>
            <Nav.Link eventKey={2} href="/profile">
              Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
