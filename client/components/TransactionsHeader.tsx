import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import { RightCol, WhiteSiteRow, Progress } from "../style/system";
import { Heading1, Body } from "../style/typography";
import {
  CurrentBalance,
  TotalAvailable,
  TransactionSmallBody,
  TransactionLargeBody,
} from "./Transactions.styled";

import { FaClipboardCheck, FaReceipt } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { BiListPlus } from "react-icons/bi";
import { MdDomain } from "react-icons/md";

const TransactionsHeader = () => {
  return (
    <WhiteSiteRow>
      <Col xs={5}>
        <Row>
          <Col>
            <div>
              <TransactionSmallBody>Current Balance</TransactionSmallBody>
            </div>
            <div>
              <CurrentBalance>$7,935</CurrentBalance>
            </div>
          </Col>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <div>
                <TransactionSmallBody>Total Available</TransactionSmallBody>
              </div>
              <div>
                <TotalAvailable>$38,000</TotalAvailable>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: 8 }}>
          <Col>
            <Progress now={40} />
          </Col>
        </Row>
        <Row style={{ marginTop: 16 }}>
          <Col>
            <div>
              <TransactionSmallBody>Next Payment</TransactionSmallBody>
            </div>
            <div>
              <TransactionLargeBody>Mar 31</TransactionLargeBody>
            </div>
          </Col>
          <Col>
            <div>
              <TransactionSmallBody>Available Cashback</TransactionSmallBody>
            </div>
            <div>
              <TransactionLargeBody>TBD</TransactionLargeBody>
            </div>
          </Col>
        </Row>
      </Col>
      <RightCol>Hey</RightCol>
    </WhiteSiteRow>
  );
};

export default TransactionsHeader;
