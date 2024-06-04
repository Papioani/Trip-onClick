import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TripOnClick from "./pages/TripOnClick";
import Contact from "./pages/Contact";
import MyTrips from "./pages/MyTrips";
import TripsComponent from "./components/TripsComponent";
import ManiPage from "./pages/ManiPage";
import SpainPage from "./pages/SpainPage";
import NorwayPage from "./pages/NorwayPage";

// Call createContext outside any components to create one or more contexts.
export const FormContext = React.createContext();

function App() {
  const EMPTY_FORM = {
    checkIn: "",
    checkOut: "",
  };
  const [hotelParameters, setHotelParameters] = useState(EMPTY_FORM);
  const [adultCount, setAdultCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  // Create an object to hold all the states
  const contextValues = {
    hotelParameters,
    setHotelParameters,
    adultCount,
    setAdultCount,
    roomCount,
    setRoomCount,
    showAlert,
    setShowAlert,
  };

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
                <li className="nav-item">
                  {/* this leads to TripsComponent */}
                  <a
                    className="nav-link active nav-link-ltr"
                    aria-current="page"
                    href="/where-to"
                  >
                    Trips
                  </a>
                </li>
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
              <div className="d-flex align-items-center topnav-right">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div>
          {/* you will use SomeContext.Provider in components above to specify the context value
          When you call useContext(SomeContext), you are reading the context value that was provided by a SomeContext.Provider */}
          {/* Wrap your components into a context provider to specify the value of this context for all components inside: This is the props*/}
          {/* The value that you want to pass to all the components reading this context inside this provider, no matter how deep. 
          A component calling useContext(SomeContext) inside of the provider receives the value */}
          <FormContext.Provider value={contextValues}>
            <Routes>
              <Route path="/" element={<TripOnClick />} />
              <Route path="/TripOnClick/" element={<TripOnClick />} />
              <Route path="/Where-to/" element={<TripsComponent />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/MyTrips" element={<MyTrips />} />
              <Route path="/Mani/*" element={<ManiPage />} />
              <Route path="/Spain/*" element={<SpainPage />} />
              <Route path="/Norway/" element={<NorwayPage />} />
            </Routes>
          </FormContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
