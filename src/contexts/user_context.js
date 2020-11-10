import React, {useContext, useState, useEffect, useMemo, useCallback} from "react"
import {auth} from "../utilities/firestore"

const AuthContext = React.createContext();
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup= useCallback((email, password)=>{
        return auth.createUserWithEmailAndPassword(email, password);
    }, []);

    const login = useCallback((email, password)=>{
        return auth.signInWithEmailAndPassword(email, password);
    }, []);

    const logout= useCallback(()=>{
        return auth.signOut()
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = useMemo(()=> ({currentUser, login, signup, logout}), [currentUser, login, signup, logout]);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
export const useAuth =()=> useContext(AuthContext);