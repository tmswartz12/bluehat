import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

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
      <Row>
        <Col>Transactions {filter}</Col>
      </Row>
    </Container>
  );
};

export default Transactions;
