import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import loadingJson from "../assets/jsonLottieFiles/loading.json"

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading } = useContext(AuthContext);
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    
    return <Navigate to={"/login"} state={location} replace></Navigate>
};

export default PrivateRoute;