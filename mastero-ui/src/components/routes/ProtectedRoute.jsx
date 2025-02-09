import React from 'react'
import {Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({component:Component,...rest}) => {
    const userSelector= {isAuthenticated:false,isLoading:false,user:{role:[]}}
    const location=useLocation();
    const hasAccess = (x,y)=>{
        console.log("Information");
        return true;
    }
    const {isAuthenticated,isLoading}= userSelector;
    return (isAuthenticated && !isLoading ) ?( (hasAccess(userSelector?.user.role, location?.pathname))?<Outlet/> : <><div> Not Authorize</div></> ): <Navigate to="/login" state={location} />;

}

export default ProtectedRoute;