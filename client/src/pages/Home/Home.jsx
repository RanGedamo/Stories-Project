import React from "react";
import StoriesCarousel from "../../components/Carousel/StoriesCarousel";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Home() {
  return (
    <MDBContainer className="fluid" >
      <MDBCol>
        <MDBRow>
          <StoriesCarousel />
        </MDBRow>
      </MDBCol>
    </MDBContainer>
  );
}

export default Home;
