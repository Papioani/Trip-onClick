import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/TripOnClick.css";
import VideoPlayerComponent from "../components/VideoPlayerComponent";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function TripOnClick() {
  /* With useNavigate, you can programmatically navigate to different URLs, go back and forward in the browser history, replace the current URL, and access other properties related to navigation. */
  const navigate = useNavigate(); // Initialize the navigate function
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

  const handleChange = (event) => {
    const { id, value } = event.target; // event.target refers to the DOM element that triggered the event, in this case, the input field
    setHotelParameters({
      ...hotelParameters, // with objects or arrays in react state is important to create shallow copies
      [id]: value, // if the id of the input field is "checkIn", for example, the new object would have a property named "checkIn" with the value of the input field.
    });
  };

  const adultHandleClick = () => {
    setAdultCount(adultCount + 1);
  };

  const roomHandleClick = () => {
    setRoomCount(roomCount + 1);
  };
  const deleteAdultHandleClick = () => {
    setAdultCount(adultCount - 1);
  };

  const deleteRoomHandleClick = () => {
    setRoomCount(roomCount - 1);
  };

  function handleClick() {
    // Navigate to the TripsComponent page and pass props
    navigate("/Where-to/", {
      state: {
        hotelParameters: hotelParameters,
        adultCount: adultCount,
        roomCount: roomCount, //When passing PROPS to the NAVIGATE FUNCTION, you should use the OBJECT SYNTAX, where each prop is specified as a key-value pair within curly braces {}
        // When you use the navigate function provided by React Router, it updates the URL and passes state to the new location. This state is then available in the component rendered at the new location.
      },
    });
  }

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
          {/* <div className="wrapper"> */}
          {/* Using an <input> element without being wrapped in a <form> tag is perfectly fine, especially when you're not submitting a form. In your case, where you're using it to capture a date for parameters, it's appropriate to use it without a <form> tag. */}
          <div className="parameters-container">
            <label htmlFor="checkIn">Check In</label>
            <input
              id="checkIn"
              type="date"
              placeholder="YYYY-MM-DD"
              value={hotelParameters.checkIn}
              onChange={handleChange}
            />

            <label htmlFor="checkOut">Check Out</label>
            <input
              id="checkOut"
              type="date"
              placeholder="YYYY-MM-DD"
              value={hotelParameters.checkOut}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="adults-container">
            <Button
              variant="contained"
              style={{ backgroundColor: "#2eb872", color: "white" }}
              onClick={adultHandleClick}
            >
              Adults: {adultCount}
            </Button>
            <IconButton aria-label="delete" onClick={deleteAdultHandleClick}>
              <DeleteIcon />
            </IconButton>
          </div>
          <div className="rooms-container">
            <Button
              variant="contained"
              style={{ backgroundColor: "#2eb872", color: "white" }}
              onClick={roomHandleClick}
            >
              Rooms: {roomCount}
            </Button>
            <IconButton aria-label="delete" onClick={deleteRoomHandleClick}>
              <DeleteIcon />
            </IconButton>
          </div>
          <button className="road-trip-button" onClick={handleClick}>
            {/* In React, you should avoid using inline event handlers like onclick and instead use event handlers provided by React.  */}
            Your best road trip only clicks away
          </button>
          <div>Rendered {rendering} times</div>
        </div>
      </div>
    </div>
  );
}
