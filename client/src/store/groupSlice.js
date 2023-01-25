
import { createSlice } from "@reduxjs/toolkit";
import { getAllGroups, update, deleteObj, getById, create } from "../services/groupServices"

const initialState = {
    isLoading:false,
    error:"",
    allGroups:[],
    chosenGroups:[]
};
  
  export const groupsSlice = createSlice({
    name: "groups", 
    initialState,
    reducers: {
        pickingChosenGroups:(state,action)=>{
            state.chosenGroups=action.payload
        }
    },
    extraReducers:{
        [getAllGroups.pending]:(state)=>{
            state.isLoading=true
        },
        [getAllGroups.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.allGroups=action.payload.groups
        },
        [getAllGroups.rejected]:(state, action)=>{
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

export const {pickingChosenGroups} = groupsSlice.actions;

export default groupsSlice.reducer;