import React from "react";
import { useState, useEffect } from "react";
import "../../styles/TripOnClick.css";
import TripParametersComponent from "../components/TripParametersComponent";
import VideoPlayerComponent from "../components/VideoPlayerComponent";

export default function TripOnClick() {
  const [rendering, setRendering] = useState(0);
  // create a form to store the check in , check out parameters for the search
  const EMPTY_FORM = {
    checkIn: "",
    checkOut: "",
  };
  // move the state for the parameters up to the parent component
  const [hotelParameters, setHotelParameters] = useState(EMPTY_FORM);
  const [adultCount, setAdultCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setRendering(rendering + 1);
  }, [adultCount]);

  console.log(
    "I am the TripOnClick component and these are my states now:",
    hotelParameters,
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
            <TripParametersComponent
              hotelParameters={hotelParameters}
              setHotelParameters={setHotelParameters}
              adultCount={adultCount}
              setAdultCount={setAdultCount}
              roomCount={roomCount}
              setRoomCount={setRoomCount}
              showAlert={showAlert}
              setShowAlert={setShowAlert}
            />
          </div>
        </div>
        <div>Rendered {rendering} times</div>
      </div>
    </div>
  );
}
