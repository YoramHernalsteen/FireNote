import React from 'react';
import "firebase/firestore";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom"
import Container from "react-bootstrap/Container";
import {ThemeProvider} from "emotion-theming";
import {theme} from "./utilities/theme";
import './App.css';
import {Navigation} from "./components/navigation";
import {NotesForm} from "./components/notesForm";
import {NotesDisplay} from "./components/notes_list";
import {ActiveNoteContextProvider} from "./contexts/active_notecontext";
import {NoteContextProvider} from "./contexts/notecontext";
import {EditForm} from "./components/edit_notes_form";
import {AuthProvider} from "./contexts/user_context";
import UserLogin from "./components/user_login";
import Registration from "./components/user_registration";
import { useAuth } from "./contexts/user_context"


function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                        <ActiveNoteContextProvider>
                            <NoteContextProvider>
                                <ProvidedApp/>
                            </NoteContextProvider>
                        </ActiveNoteContextProvider>
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}

function ProvidedApp() {
    const { currentUser } = useAuth()
    return (<>
            <HashRouter basename={"/"}>
                <Container>
                    <Navigation/>
                    <Switch>
                        <Route exact path={"/"}>
                            {currentUser !== null ?
                                <NotesDisplay/> : <Redirect to={"/login"}/>
                            }
                        </Route>
                        <Route exact path={"/creator"}>
                            {currentUser !== null ?
                                <NotesForm/> : <Redirect to={"/login"}/>}
                        </Route>

                        <Route exact path={"/editor"}>
                            {currentUser !== null ?
                                <EditForm/> : <Redirect to={"/login"}/>}
                        </Route>
                        <Route exact path="/login" component={UserLogin}/>
                        <Route exact path="/signup" component={Registration}/>
                    </Switch>
                </Container>
            </HashRouter>
        </>
    );
}

export default App;
