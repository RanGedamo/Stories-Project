import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import GoogleMapLocation from '../map/GoogleMap';
import { getAllEvents } from '../../services/eventServices';


export default function PopUpCalender() {
  const [basicModal, setBasicModal] = useState(true);

  const [events, setEvents] = useState();


  useEffect(()=>{
    getAllEvents().then(res=>setEvents(res.events))
  },[])

  events?.map((event,i)=>{
    console.log(events[i].location);
  })

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Event one </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit accusamus excepturi nemo animi. Distinctio commodi id voluptate voluptates, tempora itaque dolore ab, illum, debitis totam nesciunt. Quos, ratione repudiandae!</p>

              <div>

                <GoogleMapLocation />
              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}