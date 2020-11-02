import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom"
import Container from "react-bootstrap/Container";
import './App.css';
import {Navigation} from "./components/navigation";
import {NotesForm} from "./components/notesForm";
import {NotesDisplay} from "./components/notes_list";
import {ActiveNoteContextProvider, NoteContextProvider} from "./context";
import {EditForm} from "./components/edit_notes_form";

function App() {
    return (
        <>
            <ActiveNoteContextProvider>
                <NoteContextProvider>
                    <HashRouter basename={"/"}>
                        <Container>
                            <Navigation/>
                            <Switch>
                                <Route exact path={"/"}>
                                    <NotesDisplay/>
                                </Route>
                                <Route exact path={"/creator"}>
                                    <NotesForm/>
                                </Route>
                                <Route exact path={"/editor"} >
                                    <EditForm/>
                                </Route>
                            </Switch>
                        </Container>
                    </HashRouter>
                </NoteContextProvider>
            </ActiveNoteContextProvider>
        </>
    );
}

export default App;
