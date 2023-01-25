import React, { useState } from "react";
import {useEffect} from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Avatar from "../avatar/Avatar";
import { useSelector, useDispatch  } from "react-redux";
import { getAllUsers} from "../../services/userServices";

const fetchingUsers= async ()=>{
  return await fetch("http://storyserver-env.eba-znagmmma.us-east-1.elasticbeanstalk.com/users")
  .then((res) => res.json())  
}

export default function MostActive() {
  const [users,setUsers]=useState()
  useEffect(()=>{
  try{
  fetch("http://storyserver-env.eba-znagmmma.us-east-1.elasticbeanstalk.com/users")
  .then((res) => res.json())
  .then((res)=>setUsers(res.users)) }
  catch(error){}
  },[])
  console.log(users);
  if(users){
  return (
    <div>
      <p className="">Most Active Members</p>
      <div className=" d-flex flex-row justify-content-center align-items-center">
        {users?.map((user, index) => {
          if (index < 4) {
            return (
              <div className="p-2 ">
                <Avatar image={user.avatar} />
                <p>{user.userName}</p>
                <ul class="list-unstyled d-flex justify-content-center text-warning mb-2">
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                </ul>
              </div>
            );
          } else {
            return;
          }
        })}
      </div>
    </div>
  );}
  else{return}
}
