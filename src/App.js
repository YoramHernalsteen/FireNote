import React, {useState} from 'react';
import firebase from "firebase";
import './App.css';
import {Navigation} from "./components/navigation";
import {NotesForm} from "./components/notesForm";
import {Notes_list} from "./components/notes_list";

function App() {
    const[notes, setNotes] = useState([]);
    function addNote(note){
        setNotes([note, ...notes]);

    }
  return (
    <>
      <Navigation/>
      <NotesForm addNote={addNote} />
      <Notes_list notes={notes} />

      </>
  );
}

export default App;
