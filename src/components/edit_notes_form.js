import React, {useState} from "react";
import styled from "@emotion/styled";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import {useNoteContext} from "../context";


const StyledH1 = styled.h1`
  margin-top: 5em;
`;

export function EditForm(){
return <>
    <StyledH1>NOTE EDITOR</StyledH1>
</>
}