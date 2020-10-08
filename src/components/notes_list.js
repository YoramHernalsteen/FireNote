import React from "react";
import {Note} from "./note";

export function Notes_list(props){
    const{notes}=props;
    return <>
        <ul>
            {notes.map(t=> (
                <Note key={t.title} note={t}/>
            ))}
        </ul>
        </>
}