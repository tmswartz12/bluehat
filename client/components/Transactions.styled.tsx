import styled from "styled-components";
import {
  g100,
  g700,
  g500,
  g600,
  success,
  danger,
  b500,
  white,
} from "../style/colors";
import { Body, LargeBody, SmallBody, XXLBoldBody } from "../style/typography";

export const CurrentBalance = styled(XXLBoldBody)`
  color: ${g700};
`;

export const TotalAvailable = styled(XXLBoldBody)`
  color: ${g500};
  font-weight: 400;
`;

export const TransactionSmallBody = styled(SmallBody)`
  color: ${g600};
  font-size: 12px;
`;

export const TransactionsBody = styled(Body)`
  color: ${g600};
  font-weight: 700;
`;

export const TransactionLargeBody = styled(LargeBody)`
  color: ${g700};
  font-weight: 700;
`;

export const NextPaymentBadge = styled.div`
  color: ${danger};
  width: 71px;
  height: 28px;
  background-color: rgba(229, 82, 69, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 700;
`;

const STAGE = {
  unassigned: "unassigned",
  needsReceipt: "needsReceipt",
  needsProject: "needsProject",
  needsProjectManagement: "needsProjectManagement",
  needsAccounting: "needsAccounting",
  complete: "complete",
};

export const StageWrapper = styled.span`
  height: 32px;
  width: 32px;
  margin-right: 2px;
  padding: 8px;
  background-color: ${(props) => {
    if (props.stage === STAGE.complete) {
      return "rgba(62, 178, 130, 0.2)";
    }
    if (props.type === "receipt") {
      // ACTIVE
      if (props.stage === STAGE.unassigned) {
        return `${b500}`;
      }
      // COMPLETE
      if (
        props.stage === STAGE.needsProject ||
        props.stage === STAGE.needsProjectManagement ||
        props.stage === STAGE.needsAccounting ||
        props.stage === STAGE.complete
      ) {
        return "rgba(62, 178, 130, 0.2)";
      }
      return `${g100}`;
    }
    if (props.type === "project") {
      // ACTIVE
      if (props.stage === STAGE.needsProject) {
        return `${b500}`;
      }
      // COMPLETE
      if (
        props.stage === STAGE.needsProjectManagement ||
        props.stage === STAGE.needsAccounting ||
        props.stage === STAGE.complete
      ) {
        return "rgba(62, 178, 130, 0.2)";
      }
    }

    if (props.type === "projectManagement") {
      // ACTIVE
      if (props.stage === STAGE.needsProjectManagement) {
        return `${b500}`;
      }
      // COMPLETE
      if (
        props.stage === STAGE.needsAccounting ||
        props.stage === STAGE.complete
      ) {
        return "rgba(62, 178, 130, 0.2)";
      }
    }
    if (props.type === "accounting") {
      // ACTIVE
      if (props.stage === STAGE.needsAccounting) {
        return `${b500}`;
      }
      // COMPLETE
      if (props.stage === STAGE.complete) {
        return "rgba(62, 178, 130, 0.2)";
      }
    }
    return `${g100}`;
  }}};
  color: ${(props) => {
    if (props.stage === STAGE.complete) {
      return `${success}`;
    }
    if (props.type === "receipt") {
      // Actve
      if (props.stage === STAGE.unassigned) {
        return `${white}`;
      }
      // COMPLETE
      if (
        props.stage === STAGE.needsProject ||
        props.stage === STAGE.needsProjectManagement ||
        props.stage === STAGE.needsAccounting ||
        props.stage === STAGE.complete
      ) {
        return `${success}`;
      }
    }

    if (props.type === "project") {
      // Actve
      if (props.stage === STAGE.needsProject) {
        return `${white}`;
      }
      // COMPLETE
      if (
        props.stage === STAGE.needsProjectManagement ||
        props.stage === STAGE.needsAccounting ||
        props.stage === STAGE.complete
      ) {
        return `${success}`;
      }
    }
    if (props.type === "projectManagement") {
      // ACTIVE
      if (props.stage === STAGE.needsProjectManagement) {
        return `${white}`;
      }
      // COMPLETE
      if (
        props.stage === STAGE.needsAccounting ||
        props.stage === STAGE.complete
      ) {
        return `${success}`;
      }
    }

    if (props.type === "accounting") {
      // ACTIVE
      if (props.stage === STAGE.needsAccounting) {
        return `${white}`;
      }
      // COMPLETE
      if (props.stage === STAGE.complete) {
        return `${success}`;
      }
    }
    return `${g500}`;
  }};
`;
