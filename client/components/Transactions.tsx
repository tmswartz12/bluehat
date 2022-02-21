import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import { PrimaryButton, SecondaryButton } from "../style/buttons";
import {
  TopRow,
  RightCol,
  SecondaryNav,
  SecondaryNavTab,
  SiteRow,
} from "../style/system";
import { Heading1, Body } from "../style/typography";
import { fluidWidth } from "../style/window";

import useWindowSize from "../util/useWindowSize";

import TransactionsHeader from "./TransactionsHeader";
import TransactionsTable from "./TransactionsTable";
import { useStoreState, useStoreActions } from "../store";

const Transactions = () => {
  const getTransactions = useStoreActions(
    (actions) => actions.transaction.getTransactions
  );
  const allTransactions = useStoreState(
    (state) => state.transaction.allTransactions
  );

  console.log({ allTransactions });

  useEffect(() => {
    getTransactions();
  }, []);

  const [filter, setFilter] = useState("");
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    console.log("query", queryParams);
    const term = queryParams.get("filter");
    setFilter(term);
  }, [window.location.search]);

  const size = useWindowSize();
  return (
    <Container>
      <TopRow>
        <Col>
          <Heading1>Transactions</Heading1>
        </Col>
        <RightCol>
          <PrimaryButton>Make Payment</PrimaryButton>
        </RightCol>
      </TopRow>
      <Row style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Col>
          <SecondaryNav>
            <SecondaryNavTab
              eventKey="home"
              title="All Credit"
            ></SecondaryNavTab>
            <SecondaryNavTab
              eventKey="1"
              title="Material Spend"
            ></SecondaryNavTab>
          </SecondaryNav>
        </Col>
      </Row>
      <TransactionsHeader allTransactions={allTransactions} />
      <TransactionsTable allTransactions={allTransactions} />
    </Container>
  );
};

export default Transactions;
