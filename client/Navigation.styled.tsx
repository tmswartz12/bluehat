import styled from "styled-components";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { g600, g700, g800, info, success } from "./style/colors";

export const MenuItemStyled = styled(MenuItem)`
  color: ${g800} !important;
`;

export const ComingSoon = styled.div`
  padding: 6px 12px;
  font-size: 9px;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: "Roboto";
  color: #ffffff;
  background: ${success};
`;
