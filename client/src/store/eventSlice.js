import { createSlice } from "@reduxjs/toolkit";
import { getAllEvents, update, deleteObj, getById, create } from "../services/eventServices"

const initialState = {
    isLoading:false,
    error:"",
    allEvents:[],
    chosenEvent:{}
  };
  
  export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        pickingChosenEvent:(state,action)=>{
            state.chosenEvent=action.payload
        }
    },
    extraReducers:{
        [getAllEvents.pending]:(state)=>{
            state.isLoading=true
        },
        [getAllEvents.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.allEvents=action.payload.events
        },
        [getAllEvents.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [create.pending]:(state)=>{
            state.isLoading=true
        },
        [create.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.event=action.payload.result
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
            state.event=action.payload.events
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
            state.event=action.payload.events
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
            state.chosenEvent=action.payload.chosenEvent
        },
        [getById.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
    }
  })

export const {pickingChosenEvent} = eventsSlice.actions;

export default eventsSlice.reducer;