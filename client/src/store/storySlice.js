import { createSlice } from "@reduxjs/toolkit";
import { getAllStories, update, deleteObj, getById, create } from "../services/storyServices.js"

const initialState = {
    isLoading:false,
    error:"",
    allStories:[],
    chosenStory:{}
  };
  
  export const storiesSlice = createSlice({
    name: "stories",
    initialState,
    reducers: {
        pickingChosenStory:(state,action)=>{
            state.chosenStory=action.payload
        }
    },
    extraReducers:{
<<<<<<< HEAD
        // [getAllStories.pending]:(state)=>{
        //     state.isLoading=true
        // },
        // [getAllStories.fulfilled]:(state, action)=>{
        //     state.isLoading=false
        //     state.allstories=action.payload.stories
        // },
        // [getAllStories.rejected]:(state, action)=>{
        //     state.isLoading=false
        //     state.error=action.payload
        // },
=======
        [getAllStories.pending]:(state)=>{
            state.isLoading=true
        },
        [getAllStories.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.allStories=action.payload.stories
        },
        [getAllStories.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
>>>>>>> 19336efd7019888eb95931edb9b9d34d10f6dbc7
        [create.pending]:(state)=>{
            state.isLoading=true
        },
        [create.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.story=action.payload.result
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
            state.story=action.payload.stories
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
            state.story=action.payload.stories
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
            state.chosenStory=action.payload.chosenStory
        },
        [getById.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
    }
  })

export const {pickingChosenStory} = storiesSlice.actions;

export default storiesSlice.reducer;