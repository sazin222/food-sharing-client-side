/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";



const PrivetRoutes = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);
        if(loading){ 
     return <div className="text-center">
        <progress className="progress text-center mx-auto w-56"></progress>
     </div>
        }
        if(user?.email){
            return children
        }
        return <Navigate state={location.pathname} to={"/login"}></Navigate>
};



export default PrivetRoutes;