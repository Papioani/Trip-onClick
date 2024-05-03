import React from "react";
import { useState, useEffect } from "react";
import "../../styles/TripOnClick.css";
import MapScreenshot from "../components/images/MapScreenshot.png";
import TripParametersComponent from "../components/TripParametersComponent";
import VideoPlayerComponent from "../components/VideoPlayerComponent";

export default function TripOnClick({
  hotelParameters,
  setHotelParameters,
  adultCount,
  setAdultCount,
  roomCount,
  setRoomCount,
  showAlert,
  setShowAlert,
}) {
  const [rendering, setRendering] = useState(0);

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
          <div className="videoplayer">
            <VideoPlayerComponent />
          </div>
          <div className="mapscreenshot">
            {/* <img src={MapScreenshot} alt="Route sample" /> */}
          </div>
        </div>
        <div className="right-panel">
          <div className="wrapper">
            <h1 className="h1">
              No plan, no trip? <span className="click-word">...clicK</span>
            </h1>
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
