import React, {useState} from "react";
import styled from "@emotion/styled";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import {useActiveNoteContext} from "../contexts/active_notecontext";
import {useNoteContext} from "../contexts/notecontext";
import {NotesFormCategories, NotesFormDate, NotesFormStatus, NotesFormText, NotesFormTitle} from "./notesForm";


const StyledH1 = styled.h1`
  margin-top: 5em;
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
export function EditForm(){
    const{activeNote}=useActiveNoteContext();
    const {addNote} = useNoteContext();
    const[note, setNote]= useState(activeNote);
    let history = useHistory();
    function handleSubmit(e){
        e.preventDefault();
        addNote({...note});
        history.push("/");
    }
return <>
    <StyledH1>NOTE EDITOR</StyledH1>
    <Form onSubmit={handleSubmit}>
        <NotesFormTitle setNote={setNote} note={note}/>
        <NotesFormText setNote={setNote} note={note}/>
        <NotesFormCategories setNote={setNote} note={note}/>
        <NotesFormStatus setNote={setNote} note={note}/>
        <NotesFormDate setNote={setNote} note={note}/>
        <ButtonStyled id="submit" variant="primary" type="submit">
            Submit
        </ButtonStyled>
    </Form>

</>
}