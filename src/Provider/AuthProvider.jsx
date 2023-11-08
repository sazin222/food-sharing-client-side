/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Config/firebase-config";
import axios from "axios";
// import axios from "axios";


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
        const userEmail= currentUser?.email || user?.email
        const loggedUser={email: userEmail}
             console.log(currentUser) ;
             setUser(currentUser)
             setloading(false)
             if(currentUser){
                axios.post('https://community-food-sharing-server-ten.vercel.app/jwt' ,loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log('token response',res.data);
                })
            } 
            else{
                axios.post('https://community-food-sharing-server-ten.vercel.app/logout', loggedUser, {withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
            }

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