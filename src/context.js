import React, {createContext, useCallback, useContext, useMemo, useState} from "react";
import {NOTES_DATA} from "./data/notes_data";

const NoteContext = createContext();
export function NoteContextProvider(props){
    const[notes, setNotes] = useState(NOTES_DATA);
    const addNote = useCallback((note) =>{
        let newNotes = [...notes, note];
        setNotes(newNotes);
    }, [notes, setNotes]);
    const api = useMemo(()=>({notes, addNote}), [notes,addNote]);
    return  <NoteContext.Provider value={api}>
        {props.children}
    </NoteContext.Provider>
};
export const useNoteContext=()=>useContext(NoteContext);

