import styled from "styled-components";
import { g600 } from "./colors";

const BlueHatHeading = styled.span`
  font-family: "Exo";
  font-style: normal;
`;

const Heading = styled(BlueHatHeading)`
  font-family: "Exo";
  font-style: normal;
  font-weight: 600;
`;

export const Heading1 = styled(Heading)`
  font-size: 40px;
  line-height: 56px;
  font-weight: bold !important;
`;

export const Heading2 = styled(Heading)`
  font-size: 32px;
  line-height: 48px;
`;

export const Heading3 = styled(Heading)`
  font-size: 28px;
  line-height: 40px;
`;

export const Heading4 = styled(Heading)`
  font-size: 24px;
  line-height: 32px;
`;

export const Heading5 = styled(Heading)`
  font-size: 20px;
  line-height: 32px;
`;

export const Heading6 = styled(Heading)`
  font-size: 16px;
  line-height: 24px;
`;

const BlueHatBody = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const Body = styled(BlueHatBody)`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const BoldBody = styled(Body)`
  font-weight: bold;
`;

export const SmallBody = styled(BlueHatBody)`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.02em;
`;

export const SmallBoldBody = styled(SmallBody)`
  font-weight: bold;
`;

export const MediumBody = styled(BlueHatBody)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const MediumBoldBody = styled(MediumBody)`
  font-weight: bold;
`;

export const LargeBody = styled(BlueHatBody)`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`;

export const LargeBoldBody = styled(LargeBody)`
  font-weight: bold;
`;

export const XLBody = styled(BlueHatBody)`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const XLBoldyBody = styled(XLBody)`
  font-weight: bold;
`;

export const XXLBody = styled(BlueHatBody)`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
`;

export const XXLBoldBody = styled(XXLBody)`
  font-weight: bold;
`;
