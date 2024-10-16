import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/TripParametersComponent.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import { TripContext } from "../App";

export default function TripParametersComponent() {
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
  } = useContext(TripContext);

  console.log(
    "TRIPPARAMETERSCOMPONENT:",
    hotelParameters,
    adultCount,
    roomCount
  );

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
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };

  const deleteRoomHandleClick = () => {
    if (roomCount > 0) {
      setRoomCount(roomCount - 1);
    }
  };

  function handleClick(event) {
    event.preventDefault();
    // Debugging values
    console.log("CheckIn:", hotelParameters.checkIn);
    console.log("CheckOut:", hotelParameters.checkOut);
    console.log("Adults:", adultCount);
    console.log("Rooms:", roomCount);
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

      navigate("/trips/");
    }
  }

  return (
    /* Using an <input> element without being wrapped in a <form> tag is perfectly fine, especially when you're not submitting a form. In your case, where you're using it to capture a date for parameters, it's appropriate to use it without a <form> tag. */
    <>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
        <h1 className="title-h1">
          No plan, no trip? {/* <span className="click-word">...clicK</span> */}
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          {showAlert && ( // !!!!!!!!!! conditional rendering, if true ...
            <div>
              <Alert severity="error">Empty! Please, complete</Alert>
            </div>
          )}
          {/*  <div className="container-fluid"> */}

          <div className="wrapper w-3/4">
            {" "}
            {/* "parameters-container"> */}
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
              <br />
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
            <br />
            <div className="container-fluid">
              {" "}
              {/* adults-container */}
              <Button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                /* class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" */
                /* class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          variant="contained" */
                /* style={{ backgroundColor: "#2eb872", color: "white" }} */
                onClick={adultHandleClick}
              >
                {/* <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> */}
                Adults: {adultCount}
                {/* </span> */}
              </Button>
              <IconButton aria-label="delete" onClick={deleteAdultHandleClick}>
                <DeleteIcon />
              </IconButton>
            </div>
            <div className="container-fluid">
              <Button
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                /*                 className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                 */ /*  variant="contained" */
                /* style={{ backgroundColor: "#2eb872", color: "white" }} */
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
              ... clicK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
