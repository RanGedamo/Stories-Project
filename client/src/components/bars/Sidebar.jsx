import React, { useState } from "react";
import "./sidebar.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import Button from "../Button/Button";
import Avatar from "../avatar/Avatar";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MDBCol className="sidebar">
        <MDBIcon fas icon="align-justify" onClick={() => setIsOpen(!isOpen)}/>
        {isOpen ? (
      <MDBCard className="h-100">
        <MDBCardBody>
          <MDBCardTitle className="sidebar_nav">COMMUNITY</MDBCardTitle>
          <MDBCardFooter>
            <small className="text-muted" className="sidebar_nav">FEEDS</small>
          </MDBCardFooter>
          <MDBCardText>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fas icon="home" />
              </MDBCol>
              <MDBCol size="4" className="sidebar_nav">
                Home
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fas icon="fire" />
              </MDBCol>
              <MDBCol size="4" className="sidebar_nav">
                Popular
              </MDBCol>
            </MDBRow>
          </MDBCardText>
          <MDBCardFooter>
            <small className="text-muted" className="sidebar_nav">MY COMMUNITIES</small>
          </MDBCardFooter>
          <MDBCardText>
            <MDBRow center>
              <MDBCol size="4" >
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                  className="sidebar_avatar"
                />
              </MDBCol>
              <MDBCol size="4" className="sidebar_nav">Lama</MDBCol>
            </MDBRow>
          </MDBCardText>
          <MDBCardFooter>
            <small className="text-muted" className="sidebar_nav">TOPICS</small>
          </MDBCardFooter>
          <MDBCardText>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fab icon="accessible-icon" />
              </MDBCol>
              <MDBCol size="4" className="sidebar_nav">
                Accessibility
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fas icon="ad" />
              </MDBCol>
              <MDBCol size="4" className="sidebar_nav">
                Marketing
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fab icon="algolia" />
              </MDBCol>
              <MDBCol size="4" className="sidebar_nav">
                Photography
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fas icon="ambulance" />
              </MDBCol>
              <MDBCol size="4" className="sidebar_nav">
                Medicent
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon far icon="grin-hearts" />
              </MDBCol>
              <MDBCol size="4" className="sidebar_nav">
                Love
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fas icon="gamepad" />
              </MDBCol>
              <MDBCol size="4" className="sidebar_nav">
                Gaming
              </MDBCol>
            </MDBRow>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted" className="sidebar_nav">
            Create an account to follow your favorite communities and start
            taking part in conversations.
            <Button color={"danger"} text={"JOIN NOW"} />
          </small>
        </MDBCardFooter>
      </MDBCard>
      ):(
        <MDBCard className="h-100">
        <MDBCardBody>
          <MDBCardTitle className="sidebar_nav"><MDBIcon fab icon="angellist" /></MDBCardTitle>
          <MDBCardText>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fas icon="home" />
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fas icon="fire" />
              </MDBCol>
            </MDBRow>
          </MDBCardText>
          <MDBCardText>
            <MDBRow center>
              <MDBCol size="4" >
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                  className="sidebar_avatar"
                />
              </MDBCol>
            </MDBRow>
          </MDBCardText>
          <MDBCardText>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fab icon="accessible-icon" />
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fas icon="ad" />
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fab icon="algolia" />
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fas icon="ambulance" />
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon far icon="grin-hearts" />
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="4">
                <MDBIcon fas icon="gamepad" />
              </MDBCol>
            </MDBRow>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted" className="sidebar_nav">
            <Button color={"danger"} text={"JOIN NOW"} />
          </small>
        </MDBCardFooter>
      </MDBCard>
      )}
    </MDBCol>
  );
};