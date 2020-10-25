import React, {useState} from 'react';
import {NOTES_DATA} from "./data/notes_data";
import {HashRouter, Switch,Route} from "react-router-dom"
import Container from "react-bootstrap/Container";
import './App.css';
import {Footer, Navigation} from "./components/navigation";
import {NotesForm} from "./components/notesForm";
import {NotesList} from "./components/notes_list";

function App() {
    const[notes, setNotes] = useState(NOTES_DATA);
    function addNote(note){
        setNotes([note, ...notes]);

    }
  return (
    <>
      <HashRouter basename={"/"}>
          <Container>
              <Navigation/>
              <Switch>
                  <Route exact path={"/"}>
                      <NotesList notes={notes} />
                  </Route>
                  <Route exact path={"/notes"}>
                      <NotesForm addNote={addNote} />
                  </Route>
              </Switch>
          </Container>

      </HashRouter>
      </>
  );
}

export default App;
