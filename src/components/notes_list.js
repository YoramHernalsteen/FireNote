import React from "react";
import styled from "@emotion/styled";
import {Note} from "./note";


const H1_Notes = styled.h1`
    display: block;
    margin-top: 3%;
    margin-left: 10%;
`;
const StyledList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 10%;
`;

export function Notes_list(props){
    const{notes}=props;
    return <>
        <H1_Notes>NOTES:</H1_Notes>
        <StyledList>
            {notes.map(t=> (
                <Note key={t.id} note={t}/>
            ))}
        </StyledList>
        </>
}