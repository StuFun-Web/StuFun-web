import React, { useContext, useEffect, useState } from "react";
import { auth, database } from "../firebase";

const AuthContext = React.createContext()

export default function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState()

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }


    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);

    }
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    },[])


    const value = {
        currentUser,
        login,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}