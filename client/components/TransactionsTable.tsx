import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';
import {
  WhiteSiteRow,
  Progress,
  BlueHatTable,
  BlueHatTableHeading,
  DetailsHeader,
  DetailsCell,
  BlueHatTableCell,
  StageHeader,
  StageCell,
  TableRow,
} from '../style/system';
import { Heading1, Body } from '../style/typography';
import {
  TransactionSmallBody,
  StageWrapper,
} from './Transactions.styled';
import moment from 'moment';

import {
  FaClipboardCheck,
  FaReceipt,
} from 'react-icons/fa';
import {
  GrPowerCycle,
} from 'react-icons/gr';
import {
  BiListPlus,
} from 'react-icons/bi';
import {
  MdDomain,
} from 'react-icons/md';

import TransactionsModal from './TransactionsModal';
import { Transactions } from '../types/transaction';
import { currencyFormatter } from '../util/currency-formatter';


interface TransactionTableProps {
  allTransactions: Transactions
}

const TransactionsTable = ({ allTransactions }: TransactionTableProps) => {
  const [showModal, toggleModal] = useState(false);
  const [transaction, setTransaction] = useState(null);

  const handleSelectTransaction = (selectedTransaction: any) => {
    setTransaction(selectedTransaction);
    toggleModal(true);
  };
  return (
    <React.Fragment>
      <WhiteSiteRow>
        {!allTransactions.length ?
        <Col>
              You have no transactions. Swipe your BlueHat card to see all of your transactions here.
        </Col>
        :
        <Col xs={12}>
          <Row>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    {" "}
                    <TransactionSmallBody>Search</TransactionSmallBody>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Search transactions"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    {" "}
                    <TransactionSmallBody>Dates</TransactionSmallBody>
                  </Form.Label>
                  <Form.Control type="date" placeholder="Select a Date" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form.Label>
                <TransactionSmallBody>Projects</TransactionSmallBody>
              </Form.Label>
              <Form.Control as="select" aria-label="Default select example" className="show-tick">
                {/* <option>Open this select menu</option> */}
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>
                <TransactionSmallBody>Stages</TransactionSmallBody>
              </Form.Label>{" "}
              <Form.Control as="select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <BlueHatTable responsive>
                <thead>
                  <tr>
                    <BlueHatTableHeading></BlueHatTableHeading>
                    <DetailsHeader>Details</DetailsHeader>
                    <BlueHatTableHeading>Project</BlueHatTableHeading>
                    <StageHeader>Stages</StageHeader>
                    <BlueHatTableHeading>Amount</BlueHatTableHeading>
                    <BlueHatTableHeading>Cashback</BlueHatTableHeading>
                    <BlueHatTableHeading></BlueHatTableHeading>

                  </tr>
                </thead>
                <tbody>
                  {allTransactions.map(transaction => {
                    return (
<TableRow onClick={() => handleSelectTransaction({ name: 'tyler' })}>
                    <BlueHatTableCell></BlueHatTableCell>
                    <DetailsCell>
                      <div>{transaction.merchant.merchantName}</div>
                      <div>
                        <TransactionSmallBody>
                         {`${moment(transaction.txnDate).format('MMM DD')}`} | {`${transaction.user.firstName[0]}. ${transaction.user.lastName}`} | {transaction.merchant.merchantCategory}
                        </TransactionSmallBody>
                      </div>
                    </DetailsCell>
                    {transaction.project ? <BlueHatTableCell>Unassigned</BlueHatTableCell> : <BlueHatTableCell>Assign a Project</BlueHatTableCell>}
                    <StageCell>
                      <StageWrapper stage={transaction.stage} type={'receipt'}>
                        <FaReceipt />
                      </StageWrapper>
                      <StageWrapper stage={transaction.stage} type={'project'}>
                        <MdDomain />
                      </StageWrapper>
                      <StageWrapper stage={transaction.stage} type={'projectManagement'}>
                        <BiListPlus />
                      </StageWrapper>
                      <StageWrapper stage={transaction.stage} type={'accounting'}>
                        <FaClipboardCheck />
                      </StageWrapper>
                    </StageCell>
                    <BlueHatTableCell>{currencyFormatter(transaction.amount)}</BlueHatTableCell>
                    <BlueHatTableCell>$1.45</BlueHatTableCell>
                    <BlueHatTableCell>></BlueHatTableCell>
                  </TableRow>
                    );
                  })}

                  <TableRow>
                    <BlueHatTableCell>
                      <div>
                      <GrPowerCycle />

                      </div>
                      </BlueHatTableCell>{" "}
                    <DetailsCell>
                      <div>F.W. Webb Plumbing Supply</div>
                      <div>
                        <TransactionSmallBody>
                          Mar 25 | C. McDonough | Materials + Supplies
                        </TransactionSmallBody>
                      </div>
                    </DetailsCell>
                    <BlueHatTableCell>Huntington Hospital</BlueHatTableCell>
                  </TableRow>
                </tbody>
              </BlueHatTable>
            </Col>
          </Row>
        </Col>}
      </WhiteSiteRow>
      <TransactionsModal
        show={showModal}
        hide={() => toggleModal(false)}
        transaction={transaction}
      />
     </React.Fragment>);
};

export default TransactionsTable
;
