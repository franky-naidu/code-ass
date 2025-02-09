import React, { useEffect } from 'react'
import {subscribeAuthChange} from '../../constants/supabaseClient'
import { useDispatch } from 'react-redux';
import { logout, setCredentials } from '../../redux/reducers/auth/authSlice';
import { setError, setLoading } from '../../redux/reducers/loader/loadSlice';
const AppAuthProvider = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const {data: { subscription }} = subscribeAuthChange(onAuthChange);
        return () => {
            subscription.unsubscribe();
        }
    }, [])
    
    const onAuthChange = (event, session) => {
        try {
            dispatch(setLoading(true));
            console.log('onAuthStateChange', event, session);
            switch (event) {
                case 'SIGNED_IN':
                    localStorage.setItem('auth-token', session?.access_token);
                    localStorage.setItem('auth-details', session);
                    dispatch(setCredentials({...session.user}));
                    console.log('User signed in');
                    break;
                case 'SIGNED_OUT':
                    console.log('User signed out');
                    dispatch(logout());
                    localStorage.removeItem('auth-token');
                    localStorage.removeItem('auth-details');
                    break;
                case 'USER_UPDATED':            
                    localStorage.setItem('auth-token', session?.access_token);
                    localStorage.setItem('auth-details', session);              
                    dispatch(setCredentials({...session.user}));
                    console.log('User updated');
                    break;
                case 'TOKEN_REFRESHED':
                case 'INITIAL_SESSION':
                    dispatch(setCredentials({...session?.user }));
                    localStorage.setItem('auth-token', session?.access_token);
                    localStorage.setItem('auth-details', session);
                    break;          
                default:
            }
        }catch(e) {
            dispatch(setError(e));
        }finally{
            dispatch(setLoading(false));
        }
    }
    return (
        <div>
            {props.children}
        </div>
    )

}
export default AppAuthProvider