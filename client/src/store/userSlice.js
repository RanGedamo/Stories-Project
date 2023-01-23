import { createSlice } from "@reduxjs/toolkit";
import { update, deleteObj, getById } from "../services/eventServices"

const initialState={
    user:{},
    isLaoding:false,
    error:""
}

  export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        logOut:(state)=>{
            state.user={},
            state.error=""
        }
    },
    extraRducer:{
        [logIn.pending]:(state)=>{
            state.isLoading=true
        },
        [logIn.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.user=action.payload.users
            console.log(action.payload.users);
        },
        [logIn.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [register.pending]:(state)=>{
            state.isLoading=true
        },
        [register.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.user=action.payload.users
            console.log(action.payload.users);
        },
        [register.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [getById.pending]:(state)=>{
            state.isLoading=true
        },
        [getById.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.user=action.payload.result
        },
        [getById.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [update.pending]:(state)=>{
            state.isLoading=true
        },
        [update.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.user=action.payload.users
        },
        [update.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [deleteObj.pending]:(state)=>{
            state.isLoading=true
        },
        [deleteObj.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.user=action.payload.users
        },
        [deleteObj.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
    }
  })

export const {logOut} = usersSlice.actions;

export default usersSlice.reducer;