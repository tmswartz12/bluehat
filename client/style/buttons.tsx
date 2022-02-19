import { Button } from "react-bootstrap";
import styled from "styled-components";
import {
  b500,
  b600,
  danger,
  g100,
  g200,
  g500,
  g600,
  g700,
  info,
  success,
  white,
} from "./colors";

const BlueHatButton = styled(Button)`
  padding: 10px 16px;
  border-radius: 0px;
  border: 0px;
  font-family: "exo";
  font-weight: 600 !important;
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  outline: 0 !important;
  box-shadow: none !important;

  /* identical to box height, or 125% */

  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize !important;
  color: ${white};
  :active {
    outline: 0 !important;
    box-shadow: none !important;
  }
`;

export const PrimaryButton = styled(BlueHatButton)`
  color: ${white};
  background-color: ${b500};
  :hover {
    background-color: ${b600};
  }
  :active {
    background-color: ${b600} !important;
  }
  :focus {
    color: ${white};
    background-color: ${b500};
  }
`;

export const PrimaryButtonOutline = styled(PrimaryButton)`
  color: ${b600};
  background-color: ${white};
  border: ${b500} 1px solid !important;
  :hover {
    background-color: ${b600};
    border: ${b600} 1px solid !important;
  }
  :active {
    background-color: ${b600} !important;
    border: ${b600} 1px solid !important;
    color: ${white} !important;
  }
  :focus {
    color: ${b600};
    background-color: ${white};
    border: ${b500} 1px solid !important;
  }
`;

export const SecondaryButton = styled(BlueHatButton)`
  color: white;
  background-color: ${g600};
  :hover {
    background-color: ${g700};
  }
  :active {
    background-color: ${g700} !important;
  }
  :focus {
    color: white;
    background-color: ${g600};
  }
`;

export const SecondaryButtonOutline = styled(BlueHatButton)`
  color: ${g600};
  background-color: ${white};
  border: ${g500} 1px solid !important;
  :hover {
    background-color: ${g600};
    border: ${g600} 1px solid !important;
  }
  :active {
    background-color: ${g600} !important;
    border: ${g600} 1px solid !important;
  }
  :focus {
    color: ${g600};
    background-color: ${white};
    border: ${g500} 1px solid !important;
  }
`;

export const SuccessButton = styled(BlueHatButton)`
  color: ${white};
  background-color: ${success};
  :hover {
    background-color: #218838;
  }
  :active {
    background-color: #218838 !important;
  }
  :focus {
    color: ${white};
    background-color: ${success};
  }
`;

export const SuccessButtonOutline = styled(BlueHatButton)`
  color: ${success};
  background-color: ${white};
  border: ${success} 1px solid !important;
  :hover {
    background-color: ${success};
    border: ${success} 1px solid !important;
  }
  :active {
    background-color: ${success} !important;
    border: ${success} 1px solid !important;
  }
  :focus {
    color: ${success};
    background-color: ${white};
    border: ${success} 1px solid !important;
  }
`;

export const DangerButton = styled(BlueHatButton)`
  color: ${white};
  background-color: ${danger};
  :hover {
    background-color: #c82333;
  }
  :active {
    background-color: #c82333 !important;
  }
  :focus {
    color: ${white};
    background-color: ${danger};
  }
`;

export const DangerButtonOutline = styled(BlueHatButton)`
  color: ${danger};
  background-color: ${white};
  border: ${danger} 1px solid !important;
  :hover {
    background-color: ${danger};
    border: ${danger} 1px solid !important;
  }
  :active {
    background-color: ${danger} !important;
    border: ${danger} 1px solid !important;
  }
  :focus {
    color: ${danger};
    background-color: ${white};
    border: ${danger} 1px solid !important;
  }
`;

export const InfoButton = styled(BlueHatButton)`
  color: ${white};
  background-color: ${info};
  :hover {
    background-color: #138496;
  }
  :active {
    background-color: #138496 !important;
  }
  :focus {
    color: ${white};
    background-color: ${info};
  }
`;

export const InfoButtonOutline = styled(BlueHatButton)`
  color: ${info};
  background-color: ${white};
  border: ${info} 1px solid !important;
  :hover {
    background-color: ${info};
    border: ${info} 1px solid !important;
  }
  :active {
    background-color: ${info} !important;
    border: ${danger} 1px solid !important;
  }
  :focus {
    color: ${info};
    background-color: ${white};
    border: ${info} 1px solid !important;
  }
`;

export const LightButton = styled(BlueHatButton)`
  color: ${g700};
  background-color: ${g100};
  :hover {
    color: ${g700};
    background-color: ${g200};
  }
  :active {
    color: ${g700} !important;
    background-color: ${g200} !important;
  }
  :focus {
    color: ${g700} !important;
    background-color: ${g100};
  }
`;

export const LightButtonOutline = styled(BlueHatButton)`
  color: ${info};
  background-color: ${white};
  border: ${info} 1px solid !important;
  :hover {
    background-color: ${info};
    border: ${info} 1px solid !important;
  }
  :active {
    background-color: ${info} !important;
    border: ${danger} 1px solid !important;
  }
  :focus {
    color: ${info};
    background-color: ${white};
    border: ${info} 1px solid !important;
  }
`;
