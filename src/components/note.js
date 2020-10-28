import React from "react";
import {MdDelete} from "react-icons/md";
import {MdEdit} from "react-icons/md";
import Card from "react-bootstrap/Card";

export function NoteI(props){
    const{note}= props;
    return <>
        <Card>
            <Card.Header>
                {note.category}
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {note.title}
                </Card.Title>
                <Card.Text>
                    {note.text}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                {note.status}
            </Card.Footer>
        </Card>
    </>
}