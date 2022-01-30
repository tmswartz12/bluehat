import styled from "styled-components";
import { Col } from "react-bootstrap";
import { b100 } from "../style/colors";

export const RegistrationPanel = styled(Col)`
  height: 100vh;
`;

export const RegistrationPanelLeft = styled(RegistrationPanel)`
  color: white;
  background: ${b100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegistrationPanelRight = styled(RegistrationPanel)`
  color: ${b100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const CenteredCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
