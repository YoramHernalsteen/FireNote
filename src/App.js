import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom"
import Container from "react-bootstrap/Container";
import './App.css';
import {Navigation} from "./components/navigation";
import {NotesForm} from "./components/notesForm";
import {NotesDisplay} from "./components/notes_list";
import {ActiveNoteContextProvider, NoteContextProvider, UserNameContextProvider} from "./context";
import {EditForm} from "./components/edit_notes_form";
import {Login} from "./components/login";

function App() {
    return (
        <>
            <UserNameContextProvider>
                <ActiveNoteContextProvider>
                    <NoteContextProvider>
                        <HashRouter basename={"/"}>
                            <Container>
                                <Navigation/>
                                <Switch>
                                    <Route exact path={"/"}>
                                        <NotesDisplay/>
                                        <Login/>
                                    </Route>
                                    <Route exact path={"/creator"}>
                                        <NotesForm/>
                                    </Route>
                                    <Route exact path={"/editor"}>
                                        <EditForm/>
                                    </Route>
                                </Switch>
                            </Container>
                        </HashRouter>
                    </NoteContextProvider>
                </ActiveNoteContextProvider>
            </UserNameContextProvider>
        </>
    );
}

export default App;
