
import { createSlice } from "@reduxjs/toolkit";
import { update, deleteObj, getById, logIn, register, getAllUsers} from "../services/userServices"
import { pickingChosenGroups } from "./groupSlice"
// import { useDispatch } from "react-redux";
// const dispatch= useDispatch()

const initialState={
    user:{},
    isLoading:false,
    error:"",
    allUsers:[]
}

  export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        logOut:(state)=>{
            // state.error="",
            state.user={}
        }
    },
    extraReducer:{
        [getAllUsers.pending]:(state)=>{
            state.isLoading=true
        },
        [getAllUsers.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.allUsers=action.payload.users
        },
        [getAllUsers.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [logIn.pending]:(state)=>{
            state.isLoading=true
        },
        [logIn.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.user=action.payload.user
            // dispatch(pickingChosenGroups(action.payload.user.groups))

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
            state.user=action.payload.user
            console.log(action.payload.user);
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
            state.user=action.payload.user
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
            state.user=action.payload.user
        },
        [deleteObj.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
    }
  })

export const {logOut} = usersSlice.actions;

export default usersSlice.reducer;