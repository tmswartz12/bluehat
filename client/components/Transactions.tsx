import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import { PrimaryButton, SecondaryButton } from "../style/buttons";
import { TopRow, RightCol } from "../style/system";
import { Heading1, Body } from "../style/typography";

import TransactionsHeader from "./TransactionsHeader";
import TransactionsTable from "./TransactionsTable";

const Transactions = () => {
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    console.log("query", queryParams);
    const term = queryParams.get("filter");
    setFilter(term);
  }, [window.location.search]);
  return (
    <Container>
      <TopRow>
        <Col>
          <Heading1>Transactions</Heading1>
          {filter}
        </Col>
        <RightCol>
          <PrimaryButton>Make Payment</PrimaryButton>
        </RightCol>
      </TopRow>
      <TransactionsHeader />
      <TransactionsTable />
    </Container>
  );
};

export default Transactions;
