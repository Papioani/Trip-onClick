import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import TripOnClick from "./pages/TripOnClick";
import Contact from "./pages/Contact";
import MyTrips from "./pages/MyTrips";
import TripsComponent from "./components/TripsComponent";
import ManiPage from "./pages/ManiPage";
import SpainPage from "./pages/SpainPage";
import NorwayPage from "./pages/NorwayPage";

function App() {
  // create a form to store the check in , check out parameters for the search
  const EMPTY_FORM = {
    checkIn: "",
    checkOut: "",
  };
  // move the state for the parameters up to the parent component
  const [hotelParameters, setHotelParameters] = useState(EMPTY_FORM);
  const [adultCount, setAdultCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/TripOnClick">
            Trιp onClick
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
            <ul className="nav nav-underline">
              <li className="nav-item">
                <a className="nav-link" href="/where-to">
                  Trips
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/myTrips"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Road trιps
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/Mani/">
                      Mani
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Spain/">
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
                <a className="nav-link" href="/MyTrips">
                  My trips
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<TripOnClick />} />
        <Route
          path="/TripOnClick/"
          element={
            <TripOnClick
              hotelParameters={hotelParameters}
              setHotelParameters={setHotelParameters}
              adultCount={adultCount}
              setAdultCount={setAdultCount}
              roomCount={roomCount}
              setRoomCount={setRoomCount}
              showAlert={showAlert}
              setShowAlert={setShowAlert}
            />
          }
        />
        <Route path="/Where-to/" element={<TripsComponent />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="MyTrips" element={<MyTrips />} />
        <Route path="/Mani//*" element={<ManiPage />} />
        <Route path="/Spain/*" element={<SpainPage />} />
        <Route path="/Norway/" element={<NorwayPage />} />
      </Routes>
    </div>
  );
}

export default App;
