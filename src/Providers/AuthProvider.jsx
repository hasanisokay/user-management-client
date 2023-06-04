import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password)
    }

    const provider = new GoogleAuthProvider()

    const googleSignIN = ()=>{
        setLoading(true)
     return signInWithPopup(auth, provider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false)

            if(currentUser && currentUser.email){
                const loggedUser = {
                    email: currentUser.email
                }
                fetch(`https://car-doctor-server-wine.vercel.app/jwt`,{
                    method: "POST",
                    headers: {
                        "content-type":"application/json"
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem("car-doctor-access-token", data.token)
                    
                })
            }
            else{
                localStorage.removeItem("car-doctor-access-token")
            }

        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user, loading, createUser, signIn, logOut, googleSignIN       
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;