import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/TripOnClick.css";
import TripParametersComponent from "../components/TripParametersComponent";
import VideoPlayerComponent from "../components/VideoPlayerComponent";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

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

  useEffect(() => {
    setRendering(rendering + 1);
  }, [adultCount]);

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
            <TripParametersComponent
              hotelParameters={hotelParameters}
              setHotelParameters={setHotelParameters}
              adultCount={adultCount}
              setAdultCount={setAdultCount}
              roomCount={roomCount}
              setRoomCount={setRoomCount}
            />
          </div>
        </div>
        <div>Rendered {rendering} times</div>
      </div>
    </div>
  );
}
