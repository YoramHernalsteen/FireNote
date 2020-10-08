import React, {useState} from "react";
import styled from "@emotion/styled";
import uuid from "react-uuid";
const NoteForm = styled.form`
  display: block;
  width: 80%;
  margin: auto;
`;

const FormGroup = styled.div `
  display: flex;
  flex-direction: column;
`;

const ButtonStyled = styled.button`
    padding: 1em;
    background-color: black;
    color: white;
`;

export function NotesForm(props){
    const{addNote}=props;
    const[note, setNote]= useState({
        id: "",
        title: "",
        text: ""
    });
    function handleTitleChange(e){
        setNote({...note, title:e.target.value});

    }
    function handleTextChange(e){
        setNote({...note, text: e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        addNote({...note, id: uuid()});
        console.log(note.title);
        setNote({...note, title:"", text: "" })


    }
    return <>
        <h2>Create new note</h2>
        <NoteForm onSubmit={handleSubmit}>
            <FormGroup>
                <label htmlFor="notesform_title">TITLE</label>
                <input type="text" id="notesform_title" name="notesform_title" onChange={handleTitleChange} value={note.title}/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="notesform_note">NOTE</label>
                <textarea id="notesform_note" name="notesform_note" onChange={handleTextChange} value={note.text} />
            </FormGroup>
            <ButtonStyled type="submit">Create note</ButtonStyled>
        </NoteForm>

        </>
}