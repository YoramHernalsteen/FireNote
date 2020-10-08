import React from "react";
import styled from "@emotion/styled";


const NoteItem = styled.div`
   background-color: #fcefef;
   border-radius: 8px;
   border: solid black 2px;
   width: 350px;
   margin: 0 10px 20px;
   box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
   transition: all 0.5s;
`;

const Title=styled.h2`
    text-align: center;
    text-decoration: black;
    text-decoration-line: underline;
`;

const Text=styled.p`
  margin-left: 1em;
  padding: 2em;
`;


function NoteTitle(props) {
    const {title} = props;
    return <>
        <Title>{title}</Title>
    </>
}

function NoteText(props) {
    const {text} = props;
    return <>
        <Text>{text}</Text>
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