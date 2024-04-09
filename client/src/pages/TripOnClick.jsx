import React from "react";
import { useState, useEffect } from "react";
import "../../styles/TripOnClick.css";
import VideoPlayerComponent from "../components/VideoPlayerComponent";
import TripParameters from "../components/TripParameters";

export default function TripOnClick() {
  // create a form to store the check in , check out parameters for the search
  const EMPTY_FORM = {
    checkIn: "",
    checkOut: "",
  };
  // move the state for the parameters up to the parent component
  const [hotelParameters, setHotelParameters] = useState(EMPTY_FORM);
  const [adultCount, setAdultCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  /*  useEffect(() => { */
  // Set the background image when the component mounts
  /* document.body.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1511028931355-082bb4781053?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed"; */
  // Cleanup function to reset the background when the component unmounts
  /* return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []); */
  console.log(
    "I am the TripOnClick component and these are my states now:",
    adultCount,
    roomCount
  );
  return (
    <div className="full-page">
      <div className="split-screen">
        <div className="left-panel">
          <VideoPlayerComponent />
        </div>
        <div className="right-panel">
          <h1 className="h1">
            No plan, no trip? <span className="click-word">...clicK</span>
          </h1>
          <div className="wrapper">
            <TripParameters
              hotelParameters={hotelParameters}
              setHotelParameters={setHotelParameters}
              adultCount={adultCount}
              setAdultCount={setAdultCount}
              roomCount={roomCount}
              setRoomCount={setRoomCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
