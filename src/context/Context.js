import React, { createContext, useEffect, useState } from 'react';
import app from '../componant/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const Context = ({ children }) => {
    const [user, setUser] = useState('name');
    const handleRegis = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const handleLogin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, user => {
            setUser(user)
        })
        return () => {
            subscribe();
        }
    }, [])
    const logout = () => {
        signOut(auth)
            .then(res => {
                setUser(res);
            })
    }
    const info = { user, handleRegis, handleLogin, logout }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;
