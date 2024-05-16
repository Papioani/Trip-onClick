import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/TripParametersComponent.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";

export default function TripParametersComponent(props) {
  /* With useNavigate, you can programmatically navigate to different URLs, go back and forward in the browser history, replace the current URL, and access other properties related to navigation. */

  const {
    hotelParameters,
    setHotelParameters,
    adultCount,
    setAdultCount,
    roomCount,
    setRoomCount,
    showAlert,
    setShowAlert,
  } = props;

  const navigate = useNavigate(); // Initialize the navigate function
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
    if (
      !hotelParameters.checkIn ||
      !hotelParameters.checkOut ||
      !hotelParameters ||
      adultCount === 0 ||
      roomCount === 0
    ) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
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
  }

  return (
    /* Using an <input> element without being wrapped in a <form> tag is perfectly fine, especially when you're not submitting a form. In your case, where you're using it to capture a date for parameters, it's appropriate to use it without a <form> tag. */
    <>
      {showAlert && ( // !!!!!!!!!! conditional rendering, if true ...
        <div>
          <Alert severity="error">Empty! Please, complete</Alert>
        </div>
      )}
      <div className="parameters-container">
        <div className="row">
          <div className="col">
            <label htmlFor="checkIn">Check In</label>
            <input
              id="checkIn"
              type="date"
              className="form-control"
              placeholder="YYYY-MM-DD"
              value={hotelParameters.checkIn}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label htmlFor="checkOut">Check Out</label>
            <input
              id="checkOut"
              type="date"
              className="form-control"
              placeholder="YYYY-MM-DD"
              value={hotelParameters.checkOut}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <br />
      <div className="adults-container">
        <Button
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
      <br />
      <button className="road-trip-button" onClick={handleClick}>
        {/* In React, you should avoid using inline event handlers like onclick and instead use event handlers provided by React.  */}
        {/* Your best road trip only <span className="clicks">clicks</span> away */}
        ...clicK
      </button>
    </>
  );
}
