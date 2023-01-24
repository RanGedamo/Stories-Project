import React from "react";
import { MDBCol } from "mdb-react-ui-kit";

export default function SoundTrack({ children }) {
  return (
    <MDBCol md="4">
      {children}
    </MDBCol>
  );
}
{/* <SoundTrack><iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/album/6UhLHlFHzSMWwo50SpUbaL?utm_source=generator" width="100%" height="100" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></SoundTrack> */}