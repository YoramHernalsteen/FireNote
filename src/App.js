import React from 'react';
import * as firebase from "firebase/app";
import "firebase/firestore";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom"
import Container from "react-bootstrap/Container";
import './App.css';
import {Navigation} from "./components/navigation";
import {NotesForm} from "./components/notesForm";
import {NotesDisplay} from "./components/notes_list";
import {ActiveNoteContextProvider}from "./contexts/active_notecontext";
import {NoteContextProvider} from "./contexts/notecontext";
import {UserNameContextProvider, useUserNameContext} from "./contexts/username_context";
import {EditForm} from "./components/edit_notes_form";
import {Login} from "./components/login";
import {STATUS_NEW} from "./utilities/firestore";


function App() {
    return (
        <>
            <UserNameContextProvider>
                <ActiveNoteContextProvider>
                    <NoteContextProvider>
                        <ProvidedApp/>
                    </NoteContextProvider>
                </ActiveNoteContextProvider>
            </UserNameContextProvider>
        </>
    );
}
function ProvidedApp(){
    const {userName} = useUserNameContext();
    return( <>
            <HashRouter basename={"/"}>
                <Container>
                    <Navigation/>
                    <Switch>
                            <Route exact path={"/"}>
                                {userName !== null ?
                                <NotesDisplay/>  :  <Redirect to={"/login"}/>
                                }
                            </Route>
                            <Route exact path={"/creator"}>
                                {userName !== null ?
                                <NotesForm/> : <Redirect to={"/login"}/> }
                            </Route>

                            <Route exact path={"/editor"}>
                                {userName !== null ?
                                <EditForm/> : <Redirect to={"/login"}/> }
                            </Route>
                        <Route exact path={"/login"}>
                            <Login/>
                        </Route>
                    </Switch>
                </Container>
            </HashRouter>
        </>
    );
}

export default App;
