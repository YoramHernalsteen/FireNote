import React from "react";
import styled from "@emotion/styled";
import {MdDelete} from "react-icons/md";
import {MdEdit} from "react-icons/md";
import Card from "react-bootstrap/Card";

const SpanLeft = styled.span`
  float: left;
`;
const SpanRight = styled.span`
 float: right;
`;
const Styledp = styled.p`
width: 100%;
`;
export function NoteI(props){
    const{note}= props;
    return <>
        <Card>
            <Card.Header>
                <SpanLeft>{note.category}</SpanLeft>
                <SpanRight>{note.status}</SpanRight>
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
                <Styledp><SpanLeft><MdEdit/></SpanLeft><SpanRight><MdDelete/></SpanRight></Styledp>
            </Card.Footer>
        </Card>
    </>
}