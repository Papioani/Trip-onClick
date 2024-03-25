import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function Requirements() {
  const [adultCount, setAdultCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);

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

  return (
    <>
      <div>
        <label htmlFor="checkIn">Check In</label>
        <input
          id="checkInDate"
          type="date"
          placeholder="YYYY-MM-DD"
          value={hotelParameters.CheckIn}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="checkOut">Check Out</label>
        <input
          id="checkOutDate"
          type="date"
          placeholder="YYYY-MM-DD"
          value={hotelParameters.CheckOut}
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
    </>
  );
}

export default Requirements;
