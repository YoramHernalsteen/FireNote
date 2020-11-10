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

const ButtonStyled = styled(Button)`
   background-color: ${({theme}) =>theme.colors.secondaryDark};
   color: white;
   &:hover{
    background-color:${({theme}) =>theme.colors.favoriteRed};
    text-decoration: none;
    color: white;
    }
    &:focus{
    background-color:${({theme}) =>theme.colors.secondaryDark};
    text-decoration: none;
    color: white;
    }
    
`;
const StyledCard = styled(Card)`
   margin-top: 3em;
    @media (min-width: 1000px) {
   min-width: 45%;
  }
  @media (max-width: 999px) {
    min-width: 95%;
  }
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: ${(props) => props.status === 'NA' ? 'white' :
                        props.status === 'To do' ? '#ff4019' : 
                            props.status === 'In progress' ? '#1899f5' : 
                                props.status === 'On hold' ? '#f5d018' : '#1ed47c'};
`;
const StyledUser = styled.p`
  text-align: center;
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
        <StyledCard id={note.title}>
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
                    <StyledUser>Made by {note.user}</StyledUser>
                    <SpanLeft><ButtonStyled onClick={()=>{
                        setActiveNote(note);
                        setShowEdit(true);
                    }}><MdEdit/></ButtonStyled></SpanLeft>
                    <SpanRight><ButtonStyled onClick={handleShowDelete}><MdDelete/></ButtonStyled></SpanRight>
                </Styledp>
            </Card.Footer>
        </StyledCard>
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
                    <SpanLeft><ButtonStyled onClick={handleClose}>Close</ButtonStyled></SpanLeft>
                    <SpanRight><ButtonStyled onClick={()=>deleteNote(note.id)}>Yes, I am sure!</ButtonStyled></SpanRight>
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
                    <SpanLeft><ButtonStyled onClick={handleClose}>Close</ButtonStyled></SpanLeft>
                    <SpanRight id="spanRight" ><Link to="/editor">Yes, I am sure!</Link></SpanRight>
                </Styledp>
            </Modal.Footer>
        </Modal>
    </>
}
