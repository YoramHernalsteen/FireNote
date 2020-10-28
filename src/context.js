import React, {createContext, useCallback, useContext, useMemo, useState} from "react";
import {NOTES_DATA} from "./data/notes_data";
import uuid from "react-uuid";


// Deze context dient voor het aanmaken, deleten en updaten van notes.
const NoteContext = createContext();
export function NoteContextProvider(props){
    const[notes, setNotes] = useState(NOTES_DATA);
    const addNote = useCallback((note) =>{
        let newNotes = [...notes, note];
        setNotes(newNotes);
    }, [notes, setNotes]);
    const deleteNote = useCallback((note)=>{
        let newNotes = notes.filter((n)=>note.id !== n.id);
        setNotes(newNotes);
    },[notes, setNotes]);
    const api = useMemo(()=>({notes, addNote, deleteNote}), [notes,addNote, deleteNote]);
    return  <NoteContext.Provider value={api}>
        {props.children}
    </NoteContext.Provider>
};
export const useNoteContext=()=>useContext(NoteContext);

//Deze context wordt gebruikt om een note als active te beschouwen
const ActiveNoteContext= createContext();
export function ActiveNoteContextProvider(props){
    const[activeNote, setActiveNote] = useState({id:uuid(), title:"Note 2", text: "Om de form te sluiten, submit je de note", category:"Random", status:"NA"});
    const api = useMemo(()=>({
                activeNote, setActiveNote
        }), [activeNote, setActiveNote]
    );
    return  <ActiveNoteContext.Provider value={api}>
        {props.children}
    </ActiveNoteContext.Provider>
};
export const useActiveNoteContext = () =>useContext(ActiveNoteContext);
