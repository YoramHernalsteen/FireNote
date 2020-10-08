import React from "react";
import styled from "@emotion/styled";


const NoteItem = styled.div`
   background-color: #f0c806;
   border-radius: 8px;
   width: 280px;
   margin: 0 10px 20px;
   box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
   transition: all 0.5s;
   font-family: "Baskerville Old Face", cursive;
`;

function NoteTitle(props) {
    const {title} = props;
    return <>
        <h2>{title}</h2>
    </>
}

function NoteText(props) {
    const {text} = props;
    return <>
        <p>{text}</p>
    </>
}

export function Note(props) {
    const {note} = props;
    console.log(note.title);
    console.log(note.text);
    return <>
        <NoteItem>
            <NoteTitle title={note.title}/>
            <NoteText text={note.text}/>
        </NoteItem>

    </>
}