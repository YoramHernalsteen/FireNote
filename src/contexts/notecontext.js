import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";
import * as FirestoreService from "../utilities/firestore";
import {useAuth} from "./user_context";


//Deze context dient voor het aanmaken, deleten en updaten van notes.
FirestoreService.firestoreCheck();
const NoteContext = createContext();

export function NoteContextProvider(props){
    const[notes, setNotes] = useState([]);
    const { currentUser } = useAuth();
    const deleteNote = useCallback((id)=>{
        const db = firebase.firestore();
        db.collection('notes').doc(id).delete();
    },[]);
    const addNote = useCallback((note) =>{
        const db = firebase.firestore();
        db.collection('notes').doc(note.id).set({id: note.id, title: note.title, text : note.text, status:note.status, category :note.category, user: note.user});



    }, []);
    useEffect(()=>{
        const fetchData = async () =>{
            if(currentUser){
                const db =firebase.firestore().collection('notes').where('user', '==', currentUser.email);
                db.onSnapshot((querySnapshot)=>{
                    const newNotes = [];
                    querySnapshot.forEach((doc)=>{
                        newNotes.push(doc.data());
                    })
                    setNotes(newNotes);
                })
            }
        }
        fetchData();
    }, [setNotes, currentUser]);
    const api = useMemo(()=>({notes, addNote, deleteNote}), [notes,addNote, deleteNote]);
    return  <NoteContext.Provider value={api}>
        {props.children}
    </NoteContext.Provider>
}
export const useNoteContext=()=>useContext(NoteContext);

