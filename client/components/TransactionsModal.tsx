import React from "react";
import { Modal } from "react-bootstrap";

interface ModalProps {
  show: boolean;
  hide: () => void;
  transaction: any;
}

const TransactionsModal = ({ show, hide, transaction }: ModalProps) => {
  return (
    <Modal centered size={"lg"} show={show} onHide={() => hide()}>
      <div>Hello</div>
    </Modal>
  );
};

export default TransactionsModal;
