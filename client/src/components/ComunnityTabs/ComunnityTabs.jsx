import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCol,MDBRow,MDBIcon
} from 'mdb-react-ui-kit';
import Challenges from "../../components/challenges/challenges";
import Events from "../../components/events/Events";
import MostActive from "../../components/sections/MostActive";
import MyCalendar from '../../pages/Calender/Calender';
import Reels from '../story/Reels';
import About from '../../pages/About/About';


export default function ComunnityTabs() {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <MDBTabs justify className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
          <MDBIcon size="2x" fas icon="igloo" />

                    </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
          <MDBIcon size="2x" fas icon="calendar-alt" />  
                </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
          <MDBIcon size='2x' fas icon="question-circle" />          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
            <MDBRow>
        <MDBCol
          className="flex-column"
          md={4}
          
        >
          <MDBCol md={12} className="mb-2 " style={{ height: "70%" }} >
          <Reels/>

          </MDBCol>
          <MDBCol md={12} style={{ background: "white", height: "30%" }}>
            <Challenges/>
          </MDBCol>
        </MDBCol>
        <MDBCol md={8} >
        <MDBCol md={12} className="mb-2" >
            <Events/>
          </MDBCol>
          <MDBCol md={12} className="mb-2 ">
<iframe className='podcast'  src="https://open.spotify.com/embed/album/6UhLHlFHzSMWwo50SpUbaL?utm_source=generator" width="100%" height="250" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>          </MDBCol>
          <MDBCol md={12} className="mb-2" style={{ background: "white"}}>
         <MostActive/>
          </MDBCol>
          
        </MDBCol>
        </MDBRow>

        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab2'}>
            <MyCalendar/>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab3'}>
            <About/>
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}