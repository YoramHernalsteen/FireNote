import React, {useState} from "react";
import styled from "@emotion/styled";
import uuid from "react-uuid";
import "firebase/firestore";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import {useNoteContext} from "../contexts/notecontext";
import {useAuth} from "../contexts/user_context";


const StyledH1 = styled.h1`
  margin-top: 5em;
`;

export function NotesFormTitle(props){
    const {setNote, note} = props;
    function handleTitleChange(e){
        setNote({...note, title:e.target.value});

    }
    return <>
        <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" placeholder="Title" id="notesform_title" name="notesform_title" onChange={handleTitleChange} value={note.title} />
        </Form.Group>
    </>
}

export function NotesFormText(props){
    const{setNote, note} = props;
    function handleTextChange(e){
        setNote({...note, text: e.target.value});
    }
    return <>
        <Form.Group>
            <Form.Label>Text:</Form.Label>
            <Form.Control as="textarea" placeholder="Text" rows={3} id="notesform_note" name="notesform_note" onChange={handleTextChange} value={note.text}/>
        </Form.Group>
    </>
}
export function NotesFormCategories(props){
    const{setNote, note} = props;
    function handleCategoryChange(e){
        setNote({...note,category: e.target.value});
    }
    return <>
        <Form.Group>
            <Form.Label>Category:</Form.Label>
            <Form.Control as="select" id="notesform_category" name="notesform_category" onChange={handleCategoryChange} value={note.category}>
                <option>Work</option>
                <option>Groceries</option>
                <option>Home</option>
                <option>Family</option>
                <option>Random</option>
            </Form.Control>
        </Form.Group>
    </>
}
export function NotesFormStatus(props){
    const {setNote, note} = props;
    function handleStatusChange(e){
        setNote({...note,status: e.target.value});
    }
    return <>
        <Form.Group>
            <Form.Label>Status:</Form.Label>
            <Form.Control as="select" id="notesform_status" name="notesform_status" onChange={handleStatusChange} value={note.status}>
                <option>To do</option>
                <option>In progress</option>
                <option>On hold</option>
                <option>Done</option>
                <option>NA</option>
            </Form.Control>
        </Form.Group>
        </>

}
function validate(note){
    const errors = [];
    if(note.title.length === 0){
        errors.push("Title can't be empty!");
    }
    if(note.text.length === 0){
        errors.push("Text can't be empty!");
    }
    if(note.status.length === 0){
        errors.push("Status can't be empty!");
    }
    if(note.category.length === 0){
        errors.push("Category can't be empty!");
    }
    return errors;
}
const Error = styled.p`

`;
const ErrorSpan = styled.span`
 font-size: 1.5em;
 color:${({theme}) =>theme.colors.favoriteRed};
 
`;
export function NotesForm(){
    let history = useHistory();
    const{addNote}=useNoteContext();
    const[note, setNote]= useState({
        id: "",
        title: "",
        text: "",
        category: "Work",
        status: "To do",
        user: ""
    });
    const { currentUser } = useAuth();
    const [errors, setErrors] = useState([]);


    function handleSubmit(e){
        e.preventDefault();
        const error = validate(note);
        if(error.length> 0){
            setErrors(error);
            return;
        }
        console.log(currentUser.email)
        addNote({...note, id: uuid(), user:currentUser.email});
        console.log(note.title);
        setNote({...note, title:"", text: "" });
        history.push("/");

    }
    return <>
        <StyledH1>NOTE CREATOR</StyledH1>
        <Form onSubmit={handleSubmit}>
            {errors.map(error =>(
                <Error key={error}><ErrorSpan>Error</ErrorSpan>: {error}</Error>
            ))}
           <NotesFormTitle setNote={setNote} note={note}/>
           <NotesFormText setNote={setNote} note={note}/>
           <NotesFormCategories setNote={setNote} note={note}/>
           <NotesFormStatus setNote={setNote} note={note}/>
           <Button id="submit" variant="primary" type="submit">
                Submit
           </Button>
        </Form>
    </>
}