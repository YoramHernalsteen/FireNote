import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom"
import Container from "react-bootstrap/Container";
import './App.css';
import {Navigation} from "./components/navigation";
import {NotesForm} from "./components/notesForm";
import {NotesList} from "./components/notes_list";
import {NoteContextProvider} from "./context";

function App() {
    return (
        <>
            <NoteContextProvider>
                <HashRouter basename={"/"}>
                    <Container>
                        <Navigation/>
                        <Switch>
                            <Route exact path={"/"}>
                                <NotesList/>
                            </Route>
                            <Route exact path={"/notes"}>
                                <NotesForm />
                            </Route>
                        </Switch>
                    </Container>

                </HashRouter>
            </NoteContextProvider>
        </>
    );
}

export default App;
