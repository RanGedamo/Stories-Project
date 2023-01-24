import { createAsyncThunk } from "@reduxjs/toolkit";

const basicAPI = "http://localhost:6060/stories";
const getAll =  createAsyncThunk( "stories/getAll",(arg,{rejectWithValue}) => {
  return fetch(`${basicAPI}`)
    .then((res) => res.json())
    .catch((error) => {
      rejectWithValue(error)
      console.log(error);
    });
});

const update = createAsyncThunk("stories/update",async (story) => {
  const data=story.data
  return await fetch(`${basicAPI}/update/byId/${story.id}`, {
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

const deleteObj = createAsyncThunk("stories/deleteObj",(story) => {
  return fetch(`${basicAPI}/delete/byId/${story.id}`, {
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

const getById = createAsyncThunk("stories/getById",(story) => {
  return fetch(`${basicAPI}/byId/${story}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const create = createAsyncThunk("stories/create",async (story) => {
    return await fetch(`${basicAPI}/create`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(story)
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "success"));
  } );

export { getAll, update, deleteObj, getById, create };