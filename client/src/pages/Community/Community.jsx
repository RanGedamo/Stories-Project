import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import ComunnityTabs from "../../components/ComunnityTabs/ComunnityTabs";
import ProfileCanvas from "../../components/ProfileCanvas/ProfileCanvas";

export default function Community() {
  return (
    <div className="">
      <ProfileCanvas/>
      <MDBContainer className="mt-5">
        <ComunnityTabs />
      </MDBContainer>
    </div>
  );
}
