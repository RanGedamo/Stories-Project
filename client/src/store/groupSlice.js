import { createSlice } from "@reduxjs/toolkit";
import { getAll, update, deleteObj, getById, create } from "../services/groupServices"

const initialState = {
    isLoading:false,
    error:"",
    allgroups:[]  };
  
  export const groupsSlice = createSlice({
    name: "groups",
    initialState,
    reducers: {},
    extraReducers:{
        [getAll.pending]:(state)=>{
            state.isLoading=true
        },
        [getAll.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.allgroups=action.payload.groups
        },
        [getAll.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [create.pending]:(state)=>{
            state.isLoading=true
        },
        [create.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.group=action.payload.result
        },
        [create.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [update.pending]:(state)=>{
            state.isLoading=true
        },
        [update.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.group=action.payload.groups
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
            state.group=action.payload.groups
        },
        [deleteObj.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [getById.pending]:(state)=>{
            state.isLoading=true
        },
        [getById.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.group=action.payload.group
        },
        [getById.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
    }
  })

export const {} = groupsSlice.actions;

export default groupsSlice.reducer;