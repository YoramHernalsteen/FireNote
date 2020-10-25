import React, {useState} from "react";
import styled from "@emotion/styled";
import uuid from "react-uuid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';


const StyledH1 = styled.h1`
  margin-top: 5em;
`;
export function NotesForm(props){
    const{addNote}=props;
    const[note, setNote]= useState({
        id: "",
        title: "",
        text: "",
        category: "",
        status: ""
    });
    function handleTitleChange(e){
        setNote({...note, title:e.target.value});

    }
    function handleTextChange(e){
        setNote({...note, text: e.target.value});
    }
    function handleCategoryChange(e){
        setNote({...note,category: e.target.value});
    }
    function handleStatusChange(e){
        setNote({...note,status: e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        addNote({...note, id: uuid()});
        console.log(note.title);
        setNote({...note, title:"", text: "" })


    }
    return <>
        <StyledH1>NOTE CREATOR</StyledH1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="Title" id="notesform_title" name="notesform_title" onChange={handleTitleChange} value={note.title} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Text:</Form.Label>
                <Form.Control as="textarea" placeholder="Text" rows={3} id="notesform_note" name="notesform_note" onChange={handleTextChange} value={note.text}/>
            </Form.Group>
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
            <Form.Group>
                <Form.Label>Status:</Form.Label>
                <Form.Control as="select" id="notesform_status" name="notesform_status" onChange={handleStatusChange} value={note.status}>
                    <option>To do</option>
                    <option>In progress</option>
                    <option>Done</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
}