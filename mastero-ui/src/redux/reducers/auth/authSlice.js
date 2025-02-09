import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:{},
    isAuthenticated:false,
    error:null
}

export  const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout : (state,action) => {
            state.user={}
            state.isAuthenticated=false;
        },
        setCredentials(state, action){
            state.user= action.payload;
            state.isAuthenticated= action.payload.id ? true : false;
        }
    },
})

export const {logout, setCredentials}= authSlice.actions;
export default authSlice.reducer;
export const getUser= state=> state.auth.user;
export const isAuthenticated = state=> state.auth.isAuthenticated;

