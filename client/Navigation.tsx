import React from "react";
import { Navbar, Container, NavDropdown, Nav, Badge } from "react-bootstrap";
import { useStoreState, useStoreActions } from "./store";
import { Link } from "react-router-dom";

import { ProSidebar, Menu, SubMenu, SidebarHeader } from "react-pro-sidebar";
import {
  FaHeart,
  FaGem,
  FaMoneyBillAlt,
  FaCreditCard,
  FaHardHat,
  FaBuilding,
  FaPiggyBank,
  FaUniversity,
} from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
import { MenuItemStyled } from "./Navigation.styled";

import Cookies from "js-cookie";
import { b100 } from "./style/colors";

const Navigation = () => {
  const hasCookie = Boolean(Cookies.get("blueHatAuth"));
  const user = useStoreState((state) => state.user.data);

  /**
   * This is the Navbar for logged out users & users who have not completed onboarding
   */

  /**
   * This is the Navbar for logged in users past onboarding
   */
  if (user && user.onboardingStatus === "complete") {
    return (
      <ProSidebar breakPoint="sm" style={{ height: `100vh` }}>
        <Menu iconShape="square">
          <MenuItemStyled icon={<FaGem />}>
            Dashboard
            <Link to="/" />
          </MenuItemStyled>
          <SubMenu title="Transactions" icon={<FaMoneyBillAlt />}>
            <MenuItemStyled>
              My Transactions
              <Link to="/transactions?filter=me" />
            </MenuItemStyled>
            <MenuItemStyled>
              All Transactions
              <Link to="/transactions?filter=all" />
            </MenuItemStyled>
          </SubMenu>
          <MenuItemStyled icon={<FaCreditCard />}>
            Cards
            <Link to="/cards" />
          </MenuItemStyled>
          <MenuItemStyled icon={<FaHardHat />}>
            Projects
            <Link to="/projects" />
          </MenuItemStyled>
          <MenuItemStyled icon={<FaBuilding />}>
            Company
            <Link to="/company" />
          </MenuItemStyled>
          <MenuItemStyled
            icon={<FaUniversity />}
            active={false}
            suffix={<div className="coming-soon-badge">Coming Soon</div>}
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
