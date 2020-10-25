import React from "react";
import styled from "@emotion/styled";
import {Note} from "./note";
import Table from "react-bootstrap/Table";


const H1Notes = styled.h1`
    display: block;
    margin-top: 5em;
`;


export function NotesList(props){
    const{notes}=props;
    return <>
        <H1Notes>NOTES:</H1Notes>
        <NoteTable notes={notes}/>
        </>
}

function NoteTable(props){
    const{notes}=props;
    return <>
        <Table striped bordered>
            <NoteTableHeader/>
            <NoteTableBody notes={notes}/>
        </Table>
    </>
};

function NoteTableHeader(props){
    return <>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Status</th>
                </tr>
            </thead>
    </>

}
function NoteTableBody(props){
    const{notes}=props;
    return <>
        <tbody>
        {notes.map(n=> (<Note key={n.id} note={n} />))}
        </tbody>

    </>
}

