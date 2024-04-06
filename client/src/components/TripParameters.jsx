import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function TripParameters(props) {
  /* With useNavigate, you can programmatically navigate to different URLs, go back and forward in the browser history, replace the current URL, and access other properties related to navigation. */
  const navigate = useNavigate(); // Initialize the navigate function
  const {
    hotelParameters,
    setHotelParameters,
    adultCount,
    setAdultCount,
    roomCount,
    setRoomCount,
  } = props;

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
      // When you use the navigate function provided by React Router, it updates the URL and passes state to the new location. This state is then available in the component rendered at the new location.
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

      <button onClick={handleClick}>
        {/* In React, you should avoid using inline event handlers like onclick and instead use event handlers provided by React.  */}
        Your best road trip only clicks away
      </button>
    </>
  );
}

export default TripParameters;
