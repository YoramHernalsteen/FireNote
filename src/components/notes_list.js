import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom"
import { NoteI} from "./note";
import {useNoteContext} from "../contexts/notecontext";
import CardDeck from "react-bootstrap/CardDeck";
import {useUserNameContext} from "../contexts/username_context";


const H1Notes = styled.h1`
    display: block;
    margin-top: 5em;
`;

export function NotesDisplay(){
    const{notes} = useNoteContext();
    const{userName} = useUserNameContext();
    console.log(notes);
    return <>
        <H1Notes>NOTES: </H1Notes>
        <p id="login_message_succes"> {userName !== null ? `You are now logged in as ${userName}!` :
            "Log in to use the application!"} </p>
        {!notes.length ? "No notes to display. Why don't you make a note?" : null}
        <Link to="/creator">CREATE NEW NOTE</Link>
        <NotesCards/>
    </>
}
function NotesCards(){
    const {notes} = useNoteContext();
    return <>
        <CardDeck>
            {notes.map((n)=>(<NoteI key={n.id} note={n}/>))}
        </CardDeck>
    </>
}

