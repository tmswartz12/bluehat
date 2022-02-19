import React from "react";
import { Navbar, Container, NavDropdown, Nav, Badge } from "react-bootstrap";
import { useStoreState, useStoreActions } from "./store";
import { Link } from "react-router-dom";

import { ProSidebar, Menu, SubMenu, SidebarHeader } from "react-pro-sidebar";
import { FaCreditCard, FaHardHat, FaUniversity } from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
import { ComingSoon, MenuItemStyled } from "./Navigation.styled";

import Cookies from "js-cookie";
import { MdApps, MdOutlineSwapHoriz, MdPeople } from "react-icons/md";
import useWindowSize from "./util/useWindowSize";

const Navigation = () => {
  const hasCookie = Boolean(Cookies.get("blueHatAuth"));
  const user = useStoreState((state) => state.user.data);

  /**
   * This is the Navbar for logged in users past onboarding
   */
  const size = useWindowSize();

  const collapseNavigation = Boolean(size.width < 1010);

  if (user && user.onboardingStatus === "complete") {
    return (
      <ProSidebar
        breakPoint="md"
        style={{ height: `100vh` }}
        collapsed={collapseNavigation}
      >
        <Menu iconShape="square">
          <MenuItemStyled icon={<MdApps />}>
            Dashboard
            <Link to="/" />
          </MenuItemStyled>
          <MenuItemStyled icon={<MdOutlineSwapHoriz />}>
            Transactions
            <Link to="/transactions?filter=me" />
          </MenuItemStyled>
          {/* <SubMenu title="Transactions" icon={<MdOutlineSwapHoriz />}>
            <MenuItemStyled>
              My Transactions
              <Link to="/transactions?filter=me" />
            </MenuItemStyled>
            <MenuItemStyled>
              All Transactions
              <Link to="/transactions?filter=all" />
            </MenuItemStyled>
          </SubMenu> */}
          <MenuItemStyled icon={<FaCreditCard />}>
            Cards
            <Link to="/cards" />
          </MenuItemStyled>
          <MenuItemStyled icon={<FaHardHat />}>
            Projects
            <Link to="/projects" />
          </MenuItemStyled>
          <MenuItemStyled icon={<MdPeople />}>
            Company
            <Link to="/company" />
          </MenuItemStyled>
          <MenuItemStyled
            icon={<FaUniversity />}
            active={false}
            suffix={<ComingSoon>Coming Soon</ComingSoon>}
          >
            Banking
          </MenuItemStyled>
        </Menu>
      </ProSidebar>

      // <Navbar collapseOnSelect expand="lg">
      //   <Container fluid>
      //     <Navbar.Brand href="/home">
      //       <img
      //         src="https://i.imgur.com/uSrS3lQ.png"
      //         width={"auto"}
      //         height={"25"}
      //       />
      //     </Navbar.Brand>
      //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //     <Navbar.Collapse id="responsive-navbar-nav">
      //       <Nav className="me-auto">
      //         <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      //         <Nav.Link href="/projects">Projects</Nav.Link>
      //         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
      //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      //           <NavDropdown.Item href="#action/3.2">
      //             Another action
      //           </NavDropdown.Item>
      //           <NavDropdown.Item href="#action/3.3">
      //             Something
      //           </NavDropdown.Item>
      //           <NavDropdown.Divider />
      //           <NavDropdown.Item href="#action/3.4">
      //             Separated link
      //           </NavDropdown.Item>
      //         </NavDropdown>
      //       </Nav>
      //       <Nav>
      //         <Nav.Link href="/cards">Cards</Nav.Link>
      //         <Nav.Link eventKey={2} href="/company">
      //           Company
      //         </Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Container>
      // </Navbar>
    );
  } else {
    return null;
  }
};

export default Navigation;
