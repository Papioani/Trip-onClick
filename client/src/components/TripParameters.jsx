import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function TripParameters() {
  let navigate =
    useNavigate(); /* With useNavigate, you can programmatically navigate to different URLs, go back and forward in the browser history, replace the current URL, and access other properties related to navigation. */
  // create a form to store the check in , check out parameters for the search
  const EMPTY_FORM = {
    checkIn: "",
    checkOut: "",
  };
  // a state variable to store the parameters
  const [hotelParameters, setHotelParameters] = useState(EMPTY_FORM);
  // a state variable for the number of travellers
  const [adultCount, setAdultCount] = useState(0);
  // a state variable for the number of rooms
  const [roomCount, setRoomCount] = useState(0);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setHotelParameters({
      ...hotelParameters,
      [id]: value,
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

  const handleClick = () => {
    // Navigate to another page and pass props
    navigate("/Where-to/", {
      hotelParameters: { hotelParameters },
      adultCount: { adultCount },
      roomCount: { roomCount },
      // Add other props as needed
    });
  };

  console.log("I am hotelParameters:", hotelParameters);

  return (
    <>
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
        <Button variant="contained" color="success" onClick={adultHandleClick}>
          Adults: {adultCount}
        </Button>
        <IconButton aria-label="delete" onClick={deleteAdultHandleClick}>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="rooms-container">
        <Button variant="contained" color="success" onClick={roomHandleClick}>
          Rooms: {roomCount}
        </Button>
        <IconButton aria-label="delete" onClick={deleteRoomHandleClick}>
          <DeleteIcon />
        </IconButton>
      </div>

      <button onClick={handleClick}>
        {/* In React, you should avoid using inline event handlers like onclick and instead use event handlers provided by React.  */}
        Your best road trip only clicks away
      </button>
    </>
  );
}

export default TripParameters;
