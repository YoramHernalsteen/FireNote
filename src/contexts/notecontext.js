import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import * as FirestoreService from "../utilities/firestore";
//import {NOTES_DATA} from "../data/notes_data";


//Deze context dient voor het aanmaken, deleten en updaten van notes.
const NoteContext = createContext();
export function NoteContextProvider(props){
    const[notes, setNotes] = useState([]);
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
    useEffect(()=>{
        const fetchData = async () =>{
            const data = await FirestoreService.getNotes();
            setNotes(data.docs.map(doc=>doc.data()));
        }
        fetchData();
    }, [setNotes])
    const api = useMemo(()=>({notes, addNote, deleteNote}), [notes,addNote, deleteNote]);
    return  <NoteContext.Provider value={api}>
        {props.children}
    </NoteContext.Provider>
}
export const useNoteContext=()=>useContext(NoteContext);

