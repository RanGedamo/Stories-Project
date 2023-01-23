import { createAsyncThunk } from "@reduxjs/toolkit";

const basicAPI = "http://localhost:8080/groups";
const getAll =  createAsyncThunk( "groups/getAll",(arg,{rejectWithValue}) => {
  return fetch(`${basicAPI}`)
    .then((res) => res.json())
    .catch((error) => {
      rejectWithValue(error)
      console.log(error);
    });
});

const update = createAsyncThunk("groups/update",async (group) => {
  const data=group.data
  return await fetch(`${basicAPI}/update/byId/${group.id}`, {
    method: "PUT",
    mode: 'cors',
    cache: 'default',
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
})

const deleteObj = createAsyncThunk("groups/deleteObj",(group) => {
  return fetch(`${basicAPI}/delete/byId/${group.id}`, {
    method: "DELETE",
    mode: 'cors',
    cache: 'default',
    headers:{"Content-Type": "application/json"},
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const getById = createAsyncThunk("groups/getById",(group) => {
  return fetch(`${basicAPI}/byId/${group}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const create = createAsyncThunk("groups/create",async (group) => {
    return await fetch(`${basicAPI}/create`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(group)
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "success"));
  } );

export { getAll, update, deleteObj, getById, create };
