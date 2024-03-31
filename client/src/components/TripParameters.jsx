import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import HotelsFetchComponent from "./HotelsFetchComponent";

function TripParameters() {
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

  console.log("I am hotelParameters:", hotelParameters);

  return (
    <>
      {/*   <form onSubmit={handleSubmit}> */}
      <div>
        <label htmlFor="checkIn">Check In</label>
        <input
          id="checkIn"
          type="date"
          placeholder="YYYY-MM-DD"
          value={hotelParameters.checkIn}
          onChange={handleChange}
        />
      </div>
      <div>
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
      <div>
        <Button variant="contained" color="success" onClick={adultHandleClick}>
          Adults: {adultCount}
        </Button>
        <IconButton aria-label="delete" onClick={deleteAdultHandleClick}>
          <DeleteIcon />
        </IconButton>
      </div>
      <div>
        <Button variant="contained" color="success" onClick={roomHandleClick}>
          Rooms: {roomCount}
        </Button>
        <IconButton aria-label="delete" onClick={deleteRoomHandleClick}>
          <DeleteIcon />
        </IconButton>
      </div>
      <button type="submit">You best road trip only clicks awaY</button>
      {/*  </form> */}
      {/*  <HotelsFetchComponent
        hotelParameters={hotelParameters}
        adultCount={adultCount}
        roomCount={roomCount}
      /> */}
    </>
  );
}

export default TripParameters;
