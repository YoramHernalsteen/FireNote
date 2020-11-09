import React from "react";
import styled from "@emotion/styled";
import { NoteI} from "./note";
import {useNoteContext} from "../contexts/notecontext";
import CardDeck from "react-bootstrap/CardDeck";
import {useUserNameContext} from "../contexts/username_context";


const H1Notes = styled.h1`
    display: block;
    margin-top: 5em;
`;




const CardDeckStyled = styled(CardDeck)`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap; 
  align-items: stretch;
  @media (min-width: 36em) {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }


  @media (min-width: 48em) {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }

  @media (min-width: 62em) {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
    }

  @media (min-width: 71.25em) {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
    }
`

export function NotesDisplay(){
    const{notes} = useNoteContext();
    const{userName} = useUserNameContext();
    console.log(notes);
    return <>
        <H1Notes>NOTES: </H1Notes>
        <p id="login_message_succes"> {userName !== null ? `You are now logged in as ${userName}!` :
            "Log in to use the application!"} </p>
        {!notes.length ? "No notes to display. Why don't you make a note?" : null}
        <NotesCards/>
    </>
}
function NotesCards(){
    const {notes} = useNoteContext();
    return <>
        <CardDeckStyled>
            {notes.map((n)=>(<NoteI key={n.id} note={n}/>))}
        </CardDeckStyled>
    </>
}

