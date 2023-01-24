import { createAsyncThunk } from "@reduxjs/toolkit";

const basicAPI = "http://localhost:6060/users";

const getAllUsers = () => {
  return fetch(`${basicAPI}`)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

const update = (user) => {
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
}

const deleteObj = (user) => {
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
};

const getById = (user) => {
  return fetch(`${basicAPI}/byId/${user}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
};

const register = (user) => {
  return fetch(`${basicAPI}/register`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(user)
    })
      .then((res) => res.json())
  } ;
  
 const logIn = (user) => {
   return fetch(`${basicAPI}/logIn`, {
       method: 'POST',
       mode: 'cors',
       cache: 'default',
       headers:{"Content-Type": "application/json"},
       body:JSON.stringify(user)
     })
       .then((res) => res.json())

 
   } ;

export { update, deleteObj, getById, logIn, register, getAllUsers };