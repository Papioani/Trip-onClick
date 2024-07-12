import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

/* import UserContext from "./UserContext"; */
import TripOnClick from "./pages/TripOnClick";
import Contact from "./pages/Contact";
import MyTrips from "./pages/MyTrips";
import TripsComponent from "./components/TripsComponent";
import ManiPage from "./pages/ManiPage";
import SpainPage from "./pages/SpainPage";
import NorwayPage from "./pages/NorwayPage";

function App() {
  const EMPTY_FORM = {
    checkIn: "",
    checkOut: "",
  };
  const [hotelParameters, setHotelParameters] = useState(EMPTY_FORM);
  const [adultCount, setAdultCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const commonProps = {
    hotelParameters,
    setHotelParameters,
    adultCount,
    setAdultCount,
    roomCount,
    setRoomCount,
    showAlert,
    setShowAlert,
  };

  // Create an object to hold all the states
  /* const contextValue = {
    hotelParameters,
    setHotelParameters,
    adultCount,
    setAdultCount,
    roomCount,
    setRoomCount,
    showAlert,
    setShowAlert,
  }; */

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/TripOnClick">
              Τrιp onClick
            </a>
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
                {/* <li className="nav-item"> */}
                {/* this leads to TripsComponent */}
                {/*  <a
                    className="nav-link active nav-link-ltr"
                    aria-current="page"
                    href="/trips"
                  >
                    Trips
                  </a>
                </li> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle nav-link-ltr"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Road trips
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/Mani/*">
                        Mani
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Spain/*">
                        Spain
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Norway/">
                        Norway
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-ltr" href="/MyTrips">
                    My trips
                  </a>
                </li>
              </ul>
              {/* <div className="d-flex align-items-center topnav-right"> */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
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

        <div>
          {/*  <UserContext.Provider value={contextValue}> */}
          <Routes>
            <Route path="/" element={<TripOnClick {...commonProps} />} />
            <Route
              path="/TripOnClick/"
              element={<TripOnClick {...commonProps} />}
            />
            <Route
              path="/trips/"
              element={
                <TripsComponent
                  hotelParameters={hotelParameters}
                  adultCount={adultCount}
                  roomCount={roomCount}
                />
              }
            />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/MyTrips" element={<MyTrips />} />
            <Route
              path="/Mani/*"
              element={
                <ManiPage
                  hotelParameters={hotelParameters}
                  adultCount={adultCount}
                  roomCount={roomCount}
                />
              }
            />
            <Route
              path="/Spain/*"
              element={
                <SpainPage
                  hotelParameters={hotelParameters}
                  adultCount={adultCount}
                  roomCount={roomCount}
                />
              }
            />
            <Route
              path="/Norway/"
              element={
                <NorwayPage
                  hotelParameters={hotelParameters}
                  adultCount={adultCount}
                  roomCount={roomCount}
                />
              }
            />
          </Routes>
          {/* </UserContext.Provider> */}
        </div>
      </div>
    </>
  );
}

export default App;
