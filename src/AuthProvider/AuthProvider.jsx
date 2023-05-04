
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.config'

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () =>{
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
           return unsubscribe();
        }

    }, [])

const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
    

}

const githubSignIn = () => {
       return signInWithPopup(auth, githubProvider)
        
}


const updateProfileInfo = (user, name, photoURL) => {
   return updateProfile(auth.currentUser, {
        displayName:name,
        photoURL: photoURL
    })
   
}








    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        githubSignIn,
        updateProfileInfo
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


