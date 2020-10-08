import React from "react";

export function Note(props){
    const{note} = props;
    return <>
        <p>{note.name}</p>
        </>
}