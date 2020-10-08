import React, {useState} from "react";
import styled from "@emotion/styled";
import uuid from "react-uuid";
const NoteForm = styled.form`
  width: 350px;
  margin-left: 10%;
  display:${(props)=>props.open? "block": "none"};
  
`;

const StyledH2 = styled.button`
  margin-top: 7em;
  margin-left: 10%;
  padding: 1em;
  background-color: #07004d;
  color: white;
  font-size: 1.25em;
  border-radius: 8px;
`;

const FormGroup = styled.div `
  display: flex;
  flex-direction: column;
`;

const ButtonStyled = styled.button`
    margin-top: 1em;
    padding: 1em;
    background-color: #07004d;
    color: white;
    font-size: 1.25em;
    border-radius: 8px;
`;

const LabelStyled = styled.label`
  margin-top: 1em ;
  font-size: 1.25em;
`;

const TextAreaStyled = styled.textarea`
    height: 100px;
`;

export function NotesForm(props){
    const{addNote}=props;
    const[note, setNote]= useState({
        id: "",
        title: "",
        text: ""
    });
    const[open, setOpen] = useState(false);
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
        <StyledH2 onClick={()=>setOpen(true)}>Create new note</StyledH2>
        <NoteForm onSubmit={handleSubmit} open={open}>
            <FormGroup>
                <LabelStyled htmlFor="notesform_title">TITLE</LabelStyled>
                <input type="text" id="notesform_title" name="notesform_title" onChange={handleTitleChange} value={note.title}/>
            </FormGroup>
            <FormGroup>
                <LabelStyled htmlFor="notesform_note">NOTE</LabelStyled>
                <TextAreaStyled id="notesform_note" name="notesform_note" onChange={handleTextChange} value={note.text} />
            </FormGroup>
            <ButtonStyled type="submit" onClick={()=>setOpen(false)}>Create note</ButtonStyled>
        </NoteForm>

        </>
}