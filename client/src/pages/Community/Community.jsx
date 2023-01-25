import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ComunnityTabs from "../../components/ComunnityTabs/ComunnityTabs";
import ProfileCanvas from "../../components/ProfileCanvas/ProfileCanvas";
export default function Community() {
  const [group,setGroup]=useState()
  const id=useParams().id
  useEffect(()=>{
    try{
    fetch(`http://localhost:6060/groups/byId/${id}`)
    .then((res) => res.json())
    .then((res)=>setGroup(res.group)) }
    catch(error){console.log(error)}
    },[])
    if(group){
  return (
    <div className="">
      <ProfileCanvas data={group}/>
      <MDBContainer className="mt-5">
        <ComunnityTabs />
      </MDBContainer>
    </div>
  );}
  else{return}
}
