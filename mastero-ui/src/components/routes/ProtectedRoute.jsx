import React, { use, useEffect } from 'react'
import {Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser, isAuthenticated } from '../../redux/reducers/auth/authSlice';

const ProtectedRoute = ({component:Component,...rest}) => {
    
    const user = useSelector(getUser);
    const authenticated = useSelector(isAuthenticated);

    // const userSelector= {isAuthenticateds:true,isLoading:false,user:{role:[]}}
    const location=useLocation();
    // const hasAccess = (x,y)=>{
    //     console.log("Information");
    //     return true;
    // }
    // const {isLoading}= userSelector;
    if(authenticated ){
       return  <Outlet/>
    }
    else {
       return  <Navigate to="/login" state={location} />
    }
    // return (isAuthenticated && !isLoading ) ?  ( (hasAccess(userSelector?.user.role, location?.pathname))?<Outlet/> : <><div> Not Authorize</div></> ): <Navigate to="/login" state={location} />;

}

export default ProtectedRoute;