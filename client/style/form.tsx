import styled from "styled-components";
import { Form } from "react-bootstrap";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.us";

export const BlueHatForm = styled(Form)``;

export const BlueHatFormInput = styled(Form.Control)``;

export const BlueHatFormInputFeedback = styled(Form.Control.Feedback)``;

export const PhoneNumber = styled(Cleave)`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}


`;
