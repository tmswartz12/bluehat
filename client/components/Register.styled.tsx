import styled from "styled-components";
import { Col } from "react-bootstrap";
import { b800, b100 } from "../style/colors";
import { EXTRA_SMALL, LARGE, MEDIUM, SMALL } from "../style/window";

export const RegistrationPanel = styled(Col)`
  height: 100vh;
`;

export const RegistrationPanelLeft = styled(RegistrationPanel)`
  color: white;
  background: ${b800};
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  @media (max-width: ${SMALL}) {
    display: none !important;
  } ;
`;

export const RegistrationPanelRight = styled(RegistrationPanel)`
  display: flex;
  flex-direction: column !important;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: ${LARGE}) {
    padding-left: 30px;
    padding-right: 30px;
  } ;
`;

export const CenteredCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
