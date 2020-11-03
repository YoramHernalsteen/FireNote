import React, {useEffect} from "react";
import styled from "@emotion/styled";
import { NoteI} from "./note";
import {useNoteContext} from "../contexts/notecontext";
import CardDeck from "react-bootstrap/CardDeck";
import firebase from "firebase";


const H1Notes = styled.h1`
    display: block;
    margin-top: 5em;
`;




const CardDeckStyled = styled(CardDeck)`
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
    console.log(notes);
    return <>
        <H1Notes>NOTES: </H1Notes>
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

