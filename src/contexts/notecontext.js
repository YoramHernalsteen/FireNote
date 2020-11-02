import React, {createContext, useCallback, useContext, useMemo, useState} from "react";
import {NOTES_DATA} from "../data/notes_data";


// Deze context dient voor het aanmaken, deleten en updaten van notes.
const NoteContext = createContext();
export function NoteContextProvider(props){
    const[notes, setNotes] = useState(NOTES_DATA);
    const deleteNote = useCallback((id)=>{
        let newNotes = notes.filter((n)=>id !== n.id);
        setNotes(newNotes);
    },[notes, setNotes]);
    const addNote = useCallback((note) =>{
        let newNotes;
        if(notes.some(noteCheck => noteCheck.id === note.id )){
            newNotes = notes.filter((n)=> n.id !== note.id);
            newNotes = [...newNotes, note];
        }else{
            newNotes = [...notes, note];
        }
        setNotes(newNotes);
    }, [notes, setNotes]);
    const api = useMemo(()=>({notes, addNote, deleteNote}), [notes,addNote, deleteNote]);
    return  <NoteContext.Provider value={api}>
        {props.children}
    </NoteContext.Provider>
};
export const useNoteContext=()=>useContext(NoteContext);

