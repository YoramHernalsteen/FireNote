import React, {createContext, useContext, useMemo, useState} from "react";
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