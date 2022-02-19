import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import { PrimaryButton, SecondaryButton } from "../style/buttons";
import { TopRow, RightCol } from "../style/system";
import { Heading1, Body } from "../style/typography";
import { fluidWidth } from "../style/window";

import useWindowSize from "../util/useWindowSize";

import TransactionsHeader from "./TransactionsHeader";
import TransactionsTable from "./TransactionsTable";
import TransactionsModal from "./TransactionsModal";

const Transactions = () => {
  const [showModal, toggleModal] = useState(false);
  const [transaction, setTransaction] = useState(null);

  const handleSelectTransaction = (selectedTransaction) => {
    setTransaction(selectedTransaction);
    toggleModal(true);
  };

  const [filter, setFilter] = useState("");
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    console.log("query", queryParams);
    const term = queryParams.get("filter");
    setFilter(term);
  }, [window.location.search]);

  const size = useWindowSize();
  const makeContainerFluid = Boolean(size.width < fluidWidth);
  return (
    <Container fluid={makeContainerFluid}>
      <TopRow>
        <Col>
          <Heading1>Transactions</Heading1>
        </Col>
        <RightCol>
          <PrimaryButton>Make Payment</PrimaryButton>
        </RightCol>
      </TopRow>
      <TransactionsHeader />
      <TransactionsTable handleSelectTransaction={handleSelectTransaction} />
      <TransactionsModal
        show={showModal}
        hide={() => toggleModal(false)}
        transaction={transaction}
      />
    </Container>
  );
};

export default Transactions;
