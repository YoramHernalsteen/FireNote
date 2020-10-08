import React from "react";
import {Todo} from "./todo";

export function ToDoList(props){
    const{note}=props;
    return <>
        <ul>
            {note.map(t=> (
                <Todo/>
            ))}
        </ul>
        </>
}