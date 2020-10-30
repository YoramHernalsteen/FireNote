import React, {useState} from "react";
import styled from "@emotion/styled";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import {useActiveNoteContext, useNoteContext} from "../context";
import {NotesFormCategories, NotesFormStatus, NotesFormText, NotesFormTitle} from "./notesForm";
import uuid from "react-uuid";


const StyledH1 = styled.h1`
  margin-top: 5em;
`;

export function EditForm(){
    const{activeNote}=useActiveNoteContext();
    const {addNote} = useNoteContext();
    const[note, setNote]= useState({id:uuid(), title:activeNote.title, text: activeNote.text, category:activeNote.category, status:activeNote.status});
    let history = useHistory();
    function handleSubmit(e){
        e.preventDefault();
        addNote(note);
        history.push("/");
    }
return <>
    <StyledH1>NOTE EDITOR</StyledH1>
    <Form onSubmit={handleSubmit}>
        <NotesFormTitle setNote={setNote} note={note}/>
        <NotesFormText setNote={setNote} note={note}/>
        <NotesFormCategories setNote={setNote} note={note}/>
        <NotesFormStatus setNote={setNote} note={note}/>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>

</>
}