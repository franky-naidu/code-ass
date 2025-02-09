import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isLoading:false,
    error:null
}

export  const loadSlice= createSlice({
    name:'loading',
    initialState,
    reducers:{
        setLoading : (state,action) => {
            state.isLoading= action.payload;
        },
        setError : (state,action) => {
            state.error= action.payload;
        }
    },
})

export const {setLoading, setError}= loadSlice.actions;
export default loadSlice.reducer;
export const isLoading = state=> state.loading.isLoading;

