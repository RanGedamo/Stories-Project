import { createAsyncThunk } from "@reduxjs/toolkit";

const basicAPI = "http://localhost:6060/events";
const getAllEvents =  createAsyncThunk( "events/getAll",(arg,{rejectWithValue}) => {
  return fetch(`${basicAPI}`)
    .then((res) => res.json())
    .catch((error) => {
      rejectWithValue(error)
      console.log(error);
    });
});

const update = createAsyncThunk("events/update",async (event) => {
  const data=event.data
  return await fetch(`${basicAPI}/update/byId/${event.id}`, {
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

const deleteObj = createAsyncThunk("events/deleteObj",(event) => {
  return fetch(`${basicAPI}/delete/byId/${event.id}`, {
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

const getById = createAsyncThunk("events/getById",(event) => {
  return fetch(`${basicAPI}/byId/${event}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const create = createAsyncThunk("events/create",async (event) => {
    return await fetch(`${basicAPI}/create`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(event)
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "success"));
  } );

export { getAllEvents, update, deleteObj, getById, create };
