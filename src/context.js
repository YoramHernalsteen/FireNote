import React, {createContext, useCallback, useContext, useMemo, useState} from "react";
import {NOTES_DATA} from "./data/notes_data";


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

//Deze context wordt gebruikt om een note als active te beschouwen
const ActiveNoteContext= createContext();
export function ActiveNoteContextProvider(props){
    const[activeNote, setActiveNote] = useState(null);
    const api = useMemo(()=>({
                activeNote, setActiveNote
        }), [activeNote, setActiveNote]
    );
    return  <ActiveNoteContext.Provider value={api}>
        {props.children}
    </ActiveNoteContext.Provider>
};
export const useActiveNoteContext = () =>useContext(ActiveNoteContext);

//Deze context wordt gebruikt om een username te geven aan site visitors
const UserNameContext = createContext();
export function UserNameContextProvider(props){
    const [userName, setUserName] = useState(localStorage.getItem("user"));
    const api = useMemo(()=> ({userName, setUserName}), [userName, setUserName]);
    return <UserNameContext.Provider value={api}>
                {props.children}
            </UserNameContext.Provider>

}
export const useUserNameContext = ()=>useContext(UserNameContext);