import React, {createContext, useContext, useMemo, useState} from "react";

//Deze context wordt gebruikt om een username te geven aan site visitors
const UserNameContext = createContext();
export function UserNameContextProvider(props){
    const [userName, setUserName] = useState(localStorage.getItem("user"));
    const api = useMemo(()=> ({userName, setUserName}), [userName, setUserName]);
    return <UserNameContext.Provider value={api}>
        {props.children}
    </UserNameContext.Provider>

}
export const useUserNameContext = ()=>useContext(UserNameContext);