import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TripOnClick from "./pages/TripOnClick";
import Contact from "./pages/Contact";
import MyTrips from "./pages/MyTrips";
import WhereToComponent from "./components/WhereToComponent";
import ManiPage from "./pages/ManiPage";
import SpainPage from "./pages/SpainPage";
import NorwayPage from "./pages/NorwayPage";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/TripOnClick">
            Trιp onClick
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a class="nav-link" href="/where-to">
                  Where to...
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/myTrips"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Road trιps
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/Mani/">
                      Mani
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Spain/">
                      Spain
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Norway/">
                      Norway
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/MyTrips">
                  My trips
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<TripOnClick />} />
        <Route path="/TripOnClick/" element={<TripOnClick />} />
        <Route path="/Where-to/" element={<WhereToComponent />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="MyTrips" element={<MyTrips />} />
        <Route path="/Mani/" element={<ManiPage />} />
        <Route path="/Spain/" element={<SpainPage />} />
        <Route path="/Norway/" element={<NorwayPage />} />
      </Routes>
    </div>
  );
}

export default App;
