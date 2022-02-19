import styled from "styled-components";
import { g700, g500, g600, success, danger } from "../style/colors";
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

export const StageWrapper = styled.span`
  height: 32px;
  width: 32px;
  margin-right: 2px;
  padding: 8px;
  background-color: rgba(62, 178, 130, 0.2);
  color: ${success};
`;
