import React, { useState }  from 'react'
import './sidebar.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCol
} from 'mdb-react-ui-kit';
import Button from "../Button/Button"
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
      <MDBCol className="sidebar">
        <MDBCard className='h-100'>
          <MDBCardBody>
            <MDBCardTitle>COMMUNITY</MDBCardTitle>
            <MDBCardFooter>
            <small className='text-muted'>FEEDS</small>
          </MDBCardFooter>
            <MDBCardText>
              Home <br/>
              Popular
            </MDBCardText>
            <MDBCardFooter>
            <small className='text-muted'>MY COMMUNITIES</small>
          </MDBCardFooter>
            <MDBCardText>
              AA <br/>
              Lama
            </MDBCardText>
            <MDBCardFooter>
            <small className='text-muted'>TOPICS</small>
          </MDBCardFooter>
            <MDBCardText>
              PTSD <br/>
              AA <br/>
              Super Cancer<br/>
              Full Heart<br/>
              Travelers<br/>
              ALS
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Create an account to follow your favorite communities and start taking part in conversations.
            <Button color={'danger'} text={'JOIN NOW'}/></small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
  );
}

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="sidebar">
//       <button onClick={() => setIsOpen(!isOpen)}>Toggle sidebar</button>
//       {isOpen && (
//         <nav>
//           <a href="#">Home</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//         </nav>
//       )}
//     </div>
//   );
// }