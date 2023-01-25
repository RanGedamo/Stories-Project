import React, { useState, useEffect } from 'react';
import {
  MDBModal
} from 'mdb-react-ui-kit';
import StoriesData from '../story/StoriesData';

export default function AStoryPopUppp({item}) {
  const [story, setStory] = useState(false);
  useEffect(()=>{
    try{
    fetch(`http://localhost:6060/stories/byId/${item}`)
    .then((res) => res.json())
    .then((res)=>setStory(res.story)) }
    catch(error){console.log(error)}
    },[])
  const [basicModal, setBasicModal] = useState(true);
  if(story){
  return (
      <MDBModal className=' d-flex justify-content-center' show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <StoriesData item={story.story}/>
        {console.log(story.story)}
      </MDBModal>
  );}
  else{return}
}