import React, {useState} from "react";
import styled from "@emotion/styled";
import {MdDelete} from "react-icons/md";
import {MdEdit} from "react-icons/md";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useNoteContext} from "../context";

const SpanLeft = styled.span`
  float: left;
`;
const SpanRight = styled.span`
 float: right;
`;
const Styledp = styled.p`
width: 100%;
`;
export function NoteI(props){
    const{note}= props;
    const[show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <Card>
            <Card.Header>
                <SpanLeft>{note.category}</SpanLeft>
                <SpanRight>{note.status}</SpanRight>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {note.title}
                </Card.Title>
                <Card.Text>
                    {note.text}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Styledp><SpanLeft><Button><MdEdit/></Button></SpanLeft><SpanRight><Button onClick={handleShow}><MdDelete/></Button></SpanRight></Styledp>
            </Card.Footer>
        </Card>
        <ConfirmationMessage show={show} handleClose={handleClose} note={note}/>
    </>
}

function ConfirmationMessage(props){
    const{show,handleClose, note} = props;
    const{deleteNote} = useNoteContext();
    return <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You are about to delete the note {note.title}
            </Modal.Body>
            <Modal.Footer>
                <Styledp>
                    <SpanLeft><Button onClick={handleClose}>Close</Button></SpanLeft>
                    <SpanRight><Button onClick={()=>deleteNote(note)}>I am sure</Button></SpanRight>
                </Styledp>
            </Modal.Footer>
        </Modal>
        </>
}