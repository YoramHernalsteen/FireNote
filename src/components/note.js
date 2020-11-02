import React, {useState} from "react";
import styled from "@emotion/styled";
import {MdDelete} from "react-icons/md";
import {MdEdit} from "react-icons/md";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom";
import {useActiveNoteContext} from "../contexts/active_notecontext";
import {useNoteContext} from "../contexts/notecontext"

const SpanLeft = styled.span`
  float: left;
`;
const SpanRight = styled.span`
 float: right;
`;
const Styledp = styled.p`
width: 100%;
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: ${(props) => props.status === 'NA' ? 'white' :
                        props.status === 'To do' ? 'red' : 
                            props.status === 'In progress' ? 'yellow' : 'green'};
`;
export function NoteI(props){
    const{note}= props;
    const[showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const {setActiveNote} = useActiveNoteContext();
    return <>
        <Card id={note.title}>
            <StyledCardHeader status={note.status}>
                <SpanLeft>{note.category}</SpanLeft>
                <SpanRight>{note.status}</SpanRight>
            </StyledCardHeader>
            <Card.Body id="body">
                <Card.Title id="title">
                    {note.title}
                </Card.Title>
                <Card.Text>
                    {note.text}
                </Card.Text>
            </Card.Body>
            <Card.Footer id="footer">
                <Styledp>
                    <p>{note.id}</p>
                    <SpanLeft><Button onClick={()=>{
                        setActiveNote(note);
                        setShowEdit(true);
                    }}><MdEdit/></Button></SpanLeft>
                    <SpanRight><Button onClick={handleShowDelete}><MdDelete/></Button></SpanRight>
                </Styledp>
            </Card.Footer>
        </Card>
        <ConfirmationMessageDelete show={showDelete} handleClose={handleCloseDelete} note={note}/>
        <ConfirmationMessageEdit show={showEdit} handleClose={handleCloseEdit} note={note}/>
    </>
}

function ConfirmationMessageDelete(props){
    const{show,handleClose, note} = props;
    const{deleteNote} = useNoteContext();
    return <>
        <Modal show={show} onHide={handleClose} id="delete">
            <Modal.Header closeButton>
                <Modal.Title>Delete confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You are about to delete the note {note.title}
            </Modal.Body>
            <Modal.Footer>
                <Styledp>
                    <SpanLeft><Button onClick={handleClose}>Close</Button></SpanLeft>
                    <SpanRight><Button onClick={()=>deleteNote(note.id)}>Yes, I am sure!</Button></SpanRight>
                </Styledp>
            </Modal.Footer>
        </Modal>
        </>
}
function ConfirmationMessageEdit(props){
    const{show, handleClose, note} = props;
    return <>
        <Modal show={show} onHide={handleClose} id="edit">
            <Modal.Header closeButton>
                <Modal.Title>Edit confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You are about to edit the note {note.title}.
            </Modal.Body>
            <Modal.Footer id="footerModal">
                <Styledp>
                    <SpanLeft><Button onClick={handleClose}>Close</Button></SpanLeft>
                    <SpanRight id="spanRight" ><Link to="/editor">Yes, I am sure!</Link></SpanRight>
                </Styledp>
            </Modal.Footer>
        </Modal>
    </>
}
