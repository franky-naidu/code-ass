import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loginAsync= createAsyncThunk('auth/login', async(payload, thunkAPI)=>{
        try {

        } catch (error) {
            
        }
});


const initialState={
    user:null,
    status:'idle',
    error:null
}

export  const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout(state){
            state.user=null;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(loginAsync.pending, (state)=>{state.status='loading';})
        builder.addCase(loginAsync.fulfilled, (state, action)=>{
            // Perform operations login is successfull
        })
    }
})