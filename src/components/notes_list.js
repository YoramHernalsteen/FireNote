import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom"
import {NoteI} from "./note";
import {useNoteContext} from "../contexts/notecontext";
import CardDeck from "react-bootstrap/CardDeck";
import {BsFileEarmarkPlus} from "react-icons/bs";


const H1Notes = styled.h1`
    display: block;
    margin-top: 5em;
`;

const CreatorLink = styled(Link)`
    &:hover{
    color:white;
    text-decoration: none;
    }
`;
const BigIconNew = styled(BsFileEarmarkPlus)`
  font-size: 3em;
  color: ${({theme}) => theme.colors.secondaryDark};
`;

export function NotesDisplay() {
    const {notes} = useNoteContext();
    console.log(notes);
    return <>
        <H1Notes>NOTES: </H1Notes>
        <p>{!notes.length ? "No notes to display. Why don't you make a note?" : null}<CreatorLink to="/creator">
            <BigIconNew/></CreatorLink></p>
        <NotesCards/>
    </>
}

function NotesCards() {
    const {notes} = useNoteContext();
    return <>
        <CardDeck>
            {notes.map((n) => (<NoteI key={n.id} note={n}/>))}
        </CardDeck>
    </>
}

