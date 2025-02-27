import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.confiq';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    const updateUserProfile = (updatedData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email) {
                const user = { email: currentUser?.email }
                await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, { withCredentials: true })
                    .then(res => {
                        setLoading(false);
                    })
            }
            else {
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, { withCredentials: true })
                    .then(res => {
                        setLoading(false);
                    })
            }

            setLoading(false);
        })
        return () => {
            unsubcribe()
        }
    }, [])

    const userInfo = {
        user,
        loading,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        updateUserProfile,
        signInWithGoogle,
    }

    return (<AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>);
};

export default AuthProvider;