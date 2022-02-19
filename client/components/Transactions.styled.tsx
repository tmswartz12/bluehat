import styled from "styled-components";
import { g700, g500, g600, success } from "../style/colors";
import { LargeBody, SmallBody, XXLBoldBody } from "../style/typography";

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

export const TransactionLargeBody = styled(LargeBody)`
  color: ${g700};
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
