import { Button } from "react-bootstrap";
import styled from "styled-components";
import { b500, b600, g500, g600, g700, success, white } from "./colors";

const BlueHatButton = styled(Button)`
  padding: 10px 16px;
  border-radius: 0px;
  border: 0px;
  font-family: "exo";
  font-weight: 600 !important;
  font-size: 16px;
  line-height: 20px;
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
  :focus {
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
  :focus {
    background-color: ${b600} !important;
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
  :focus {
    background-color: ${b600} !important;
    border: ${b600} 1px solid !important;
    color: ${white} !important;
  }
`;

export const SecondaryButton = styled(BlueHatButton)`
  color: white;
  background-color: ${g600};
  :hover {
    background-color: ${g700} !important;
  }
  :focus {
    background-color: ${g700} !important;
  }
`;

export const SecondaryButtonOutline = styled(BlueHatButton)`
  color: ${g600};
  background-color: ${white};
  border: ${g500} 1px solid !important;
  :hover {
    background-color: ${g600};
    border: ${g600} 1px solid !important;
    color: ${white} !important;
  }
  :focus {
    background-color: ${g600} !important;
    border: ${g600} 1px solid !important;
    color: ${white} !important;
  }
`;

export const SuccessButton = styled(BlueHatButton)`
  color: ${white};
  background-color: ${success};
  :hover {
    background-color: #218838 !important;
  }
  :focus {
    background-color: #218838 !important;
  }
`;

export const SuccessButtonOutline = styled(BlueHatButton)`
  color: ${success};
  background-color: ${white};
  border: ${success} 1px solid !important;
  :hover {
    background-color: ${success};
    border: ${success} 1px solid !important;
    color: ${white} !important;
  }
  :focus {
    background-color: ${success} !important;
    border: ${success} 1px solid !important;
    color: ${white} !important;
  }
`;
