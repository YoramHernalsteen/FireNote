import React from "react";
import {MdDelete} from "react-icons/md";
import {MdEdit} from "react-icons/md"

export function Note(props) {
    const {note} = props;

    console.log(note.title);
    console.log(note.text);
    return <>
        <tr>
            <td>{note.title}</td>
            <td>{note.text}</td>
            <td>{note.category}</td>
            <td>{note.status}</td>
            <td><button><MdEdit/></button></td>
            <td><button><MdDelete/></button></td>
        </tr>
    </>
}