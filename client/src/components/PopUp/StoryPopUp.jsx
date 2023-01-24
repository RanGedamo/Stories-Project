import React, { useState } from 'react';
import {
  MDBModal
} from 'mdb-react-ui-kit';
import StoriesData from '../story/StoriesData';

export default function AStoryPopUppp({item}) {
  const [basicModal, setBasicModal] = useState(true);
  return (
      <MDBModal className=' d-flex justify-content-center' show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <StoriesData item={item}/>
        {console.log(item)}
      </MDBModal>
  );
}