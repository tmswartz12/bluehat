import styled from "styled-components";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { g600, g700, g800 } from "./style/colors";

export const MenuItemStyled = styled(MenuItem)`
  color: ${g800} !important;
  :hover {
    color: red !important;
  }
`;
