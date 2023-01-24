import React from "react";
import {useEffect} from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Avatar from "../avatar/Avatar";
import { useSelector, useDispatch  } from "react-redux";
import { getAllUsers} from "../../services/userServices";

export default function MostActive() {
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getAllUsers())
      },[])
  const users = useSelector((state) => state.user);
  console.log(users);
  return (
    <div>
      <p className="">Most Active Members</p>
      <div className=" d-flex flex-row justify-content-center align-items-center">
        {users.allUsers?.map((user, index) => {
          if (index < 4) {
            return (
              <div className="p-2 ">
                <Avatar image={`${user.avatar}`} />
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
                </ul>
              </div>
            );
          } else {
            return;
          }
        })}
      </div>
    </div>
  );
}
