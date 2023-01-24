import { createAsyncThunk } from "@reduxjs/toolkit";

const basicAPI = "http://localhost:6060/users";

const getAllUsers =  createAsyncThunk( "users/getAll",(arg,{rejectWithValue}) => {
  return fetch(`${basicAPI}`)
    .then((res) => res.json())
    .catch((error) => {
      rejectWithValue(error)
      console.log(error);
    });
});

const update = createAsyncThunk("users/update",(user) => {
  return fetch(`${basicAPI}/byId/${user.id}/update`, {
    method: "PUT",
    mode: 'cors',
    cache: 'default',
    headers:{"Content-Type": "application/json"},
    body: { user },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
})

const deleteObj = createAsyncThunk("users/deleteObj",(user) => {
  return fetch(`${basicAPI}/delete`, {
    method: "PUT",
    mode: 'cors',
    cache: 'default',
    headers:{"Content-Type": "application/json"},
    body: { user },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const getById = createAsyncThunk("users/getById",(user) => {
  return fetch(`${basicAPI}/byId/${user}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const register = createAsyncThunk("users/register",(user) => {
   console.log(user,"gfgfgfg");
  return fetch(`${basicAPI}/register`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "success"))
      .catch((res) => console.log(res, "false"));

  } );
  
const logIn = createAsyncThunk("users/logIn",(user) => {
    console.log(user);
   return fetch(`${basicAPI}/logIn`, {
       method: 'POST',
       mode: 'cors',
       cache: 'default',
       headers:{"Content-Type": "application/json"},
       body:JSON.stringify(user)
     })
       .then((res) => res.json())
       .then((res) => console.log(res, "success"))
       .catch((res) => console.log(res, "false"));
 
   } );

export { update, deleteObj, getById, logIn, register, getAllUsers };