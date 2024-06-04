import React, { useContext, useState, useEffect } from "react";
import { FormContext } from "../App";
import "../../styles/TripOnClick.css";
/* import Video from "../components/images/Video.mp4"; */
import TripParametersComponent from "../components/TripParametersComponent";
/* import PlayerComponent from "./components/PlayerComponent"; */

export default function TripOnClick() {
  /* access the entire context object to maintain flexibility and consistency, even if you aren't using all the values immediately. This approach makes it easier to add more context values in the future */
  const {
    hotelParameters,
    setHotelParameters,
    adultCount,
    setAdultCount,
    roomCount,
    setRoomCount,
    showAlert,
    setShowAlert,
  } = useContext(FormContext);

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
    <>
      {/* <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video> */}
      <div className="full-page">
        <h1 className="h1">
          No plan, no trip? {/* <span className="click-word">...clicK</span> */}
        </h1>
        {/* <div className="split-screen"> */}
        {/* <div className="left-panel"> */}
        {/* <div className="videoplayer">
            <PlayerComponent />
          </div> */}
        <div className="mapscreenshot">
          {/* <img src={MapScreenshot} alt="Route sample" /> */}
        </div>
        {/* </div> */}
        {/* <div className="right-panel"> */}
        <div className=" h-screen flex items-center justify-center">
          <div className="size-40 relative w-full max-w-screen-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="wrapper w-3/4">
                <TripParametersComponent />
              </div>
            </div>
          </div>
        </div>
        {/*  </div> */}
        <div>Rendered {rendering} times</div>
        {/* </div> */}
      </div>
    </>
  );
}
