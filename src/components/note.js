import React from "react";

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
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    </>
}