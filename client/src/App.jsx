import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
/* import Video from "./components/images/Video.mp4";
 */ /* import PlayerComponent from "./components/PlayerComponent"; */

/* import TripOnClick from "./pages/TripOnClick"; */
import TripParametersComponent from "./components/TripParametersComponent";
import Contact from "./pages/Contact";
import MyTrips from "./pages/MyTrips";
import TripsComponent from "./components/TripsComponent";
import ManiPage from "./pages/ManiPage";
import SpainPage from "./pages/SpainPage";
import NorwayPage from "./pages/NorwayPage";
import "./App.css";

// Create Context directly in App.js
export const TripContext = createContext();

function App() {
  // setting the states of the trip parameters centrally in the app.js
  const EMPTY_FORM = {
    checkIn: "",
    checkOut: "",
  };
  const [hotelParameters, setHotelParameters] = useState(EMPTY_FORM);
  const [adultCount, setAdultCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  /*   const [renderCount, setRenderCount] = useState(0); */

  /*  useEffect(() => {
    setRenderCount((prevCount) => prevCount + 1);
    console.log(`Rendered ${renderCount + 1} times`);
  }, [adultCount]); */

  // Create an object to hold all the states
  const contextValue = {
    hotelParameters,
    setHotelParameters,
    adultCount,
    setAdultCount,
    roomCount,
    setRoomCount,
    showAlert,
    setShowAlert,
  };

  // Client-side routing (frameworks and libraries like React Router) means handling page navigation within a web application using JavaScript in the browser, without reloading the entire page from the server for each new view or page
  return (
    <>
      {/* <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* When you click on a <NavLink>, React Router intercepts the navigation and handles it internally without reloading the entire page. */}
          <NavLink className="navbar-brand" to="/">
            trip <span style={{ fontFamily: '"GFS Didot", serif' }}>on</span>
            click
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* this leads to TripsComponent */}
                <NavLink
                  className="nav-link active nav-link-ltr"
                  aria-current="page"
                  to="/trips"
                >
                  Trips
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle nav-link-ltr"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Road trips
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" href="/Mani/*">
                      Mani
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="/Spain/*">
                      Spain
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="/Norway/">
                      Norway
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-ltr" to="/MyTrips">
                  My trips
                </NavLink>
              </li>
            </ul>
            {/* <div className="d-flex align-items-center topnav-right"> */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {/* <form className="d-flex ms-auto align-items-center">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form> */}
            </ul>
            {/*  </div> */}
          </div>
        </div>
      </nav>
      {/* <div className="videoplayer">
            <PlayerComponent />
          </div> */}
      {/* </div> */}
      {/*  <div className=" h-screen flex items-center justify-center"> */}
      {/*         <div className="size-40 relative w-full max-w-screen-xl">
       */}{" "}
      {/* <div className="absolute inset-0 flex items-center justify-center"> */}
      {/* <div className="wrapper w-3/4">
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
        </div> */}
      {/*   </div> */}
      {/* </div>
        </div> */}
      {/*  </div> */}
      {/*  <div>Rendered {rendering} times</div> */}
      {/* </div> */}
      <TripContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<TripParametersComponent />} />
          <Route path="/trips" element={<TripsComponent />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/MyTrips" element={<MyTrips />} />
          <Route path="/Mani/*" element={<ManiPage />} />
          <Route path="/Spain/*" element={<SpainPage />} />
          <Route path="/Norway/*" element={<NorwayPage />} />
        </Routes>
      </TripContext.Provider>
    </>
  );
}

export default App;
