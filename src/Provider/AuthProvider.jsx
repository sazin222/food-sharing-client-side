/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Config/firebase-config";



const auth = getAuth(app)
export const AuthContext= createContext(null)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setloading] = useState(true)
    
    const createUser =(email,password)=>{
        setloading(true)
      return  createUserWithEmailAndPassword(auth,email,password)

    } 
     
    const Login = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 
    const googleLogin = () => {
        setloading(true)
        return signInWithPopup(auth, googleProvider);
    } 

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }
    
    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
             console.log(currentUser) ;
             setUser(currentUser)
             setloading(false)
          }) ;
          return ()=> {
             Unsubscribe();
          }
     },[])

    const providerIfo={
        user,
        loading,
       createUser,
       handleUpdateProfile,
       Login,
       googleLogin ,
       logOut,
    }

    return (
        <AuthContext.Provider value={providerIfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;