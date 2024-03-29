import styled from "styled-components";
import {
  Col,
  Row,
  ProgressBar,
  Table,
  Nav,
  Tab,
  Tabs,
  Alert,
} from "react-bootstrap";
import { b400, b500, b800, g100, g600, g700, white } from "./colors";

export const TopRow = styled(Row)`
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const SiteRow = styled(Row)`
  margin-top: 20px;
  padding: 20px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const WhiteSiteRow = styled(SiteRow)`
  background-color: ${white};
  padding: 20px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 20px;
`;

export const RightCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Progress = styled(ProgressBar)`
  height: 7px;
  border-radius: 0px;
`;

export const BlueHatTable = styled(Table)`
  border-top: 0px;
  padding: 0px;
`;

export const BlueHatTableHeading = styled.th`
  color: ${g600};
  font-size: 14px !important;
  font-family: "Roboto";
`;

export const BlueHatTableCell = styled.td`
  color: ${g700};
  font-size: 16px !important;
  font-family: "Roboto";
  line-height: 24px;
  vertical-align: middle !important;
`;

export const DetailsHeader = styled(BlueHatTableHeading)`
  min-width: 220px;
`;

export const StageHeader = styled(BlueHatTableHeading)`
  min-width: 140px;
`;

export const DetailsCell = styled(BlueHatTableCell)`
  min-width: 20px;
`;

export const StageCell = styled(BlueHatTableCell)`
  min-width: 140px;
`;

export const TableRow = styled.tr`
  :hover {
    background-color: ${g100};
    cursor: pointer;
  }
`;

export const SecondaryNav = styled(Tabs)`
  border-bottom: 1px solid #dee3e6;
`;

export const SecondaryNavTab = styled(Tab)`
  border-left: 0px !important;
  border-right: 0px !important;
  background-color: transparent !important;
  :focus {
    border-left: 0px !important;
    border-right: 0px !important;
    background-color: transparent !important;
  }
  :active {
    border-left: 0px !important;
    border-right: 0px !important;
    background-color: transparent !important;
  }
`;

export const BlueHatAlert = styled(Alert)`
  border-radius: 0px !important;
  color: ${(props) => {
    if (props.variant === "primary") {
      return `${white}`;
    }
  }};
  background-color: ${(props) => {
    if (props.variant === "primary") {
      return `${b400}`;
    }
  }};
`;
