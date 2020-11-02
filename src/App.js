import React from 'react';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom"
import Container from "react-bootstrap/Container";
import './App.css';
import {Navigation} from "./components/navigation";
import {NotesForm} from "./components/notesForm";
import {NotesDisplay} from "./components/notes_list";
import {ActiveNoteContextProvider, NoteContextProvider, UserNameContextProvider, useUserNameContext} from "./context";
import {EditForm} from "./components/edit_notes_form";
import {Login} from "./components/login";

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
