import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Mani4Image from "./images/Mani4.png";
import Spain from "./images/Spain.png";
import Norway from "./images/Norway.png";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";
import "./TripsComponent.css";

export default function TripsComponent() {
  const [trip, setTrip] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (location) => {
    setTrip(location);
  };

  useEffect(() => {
    /* By using useEffect, the state update for selectedImage based on trip will only trigger when trip changes, preventing an infinite loop caused by continuous state updates. */
    if (trip === null) {
      setSelectedImage(<MapComponent />);
    } else if (trip === "Norway") {
      setSelectedImage("Norway");
    } else if (trip === "Spain") {
      setSelectedImage("Spain");
    } else if (trip === "Mani") {
      setSelectedImage("Mani");
    }
  }, [trip]);

  const getImageLink = () => {
    if (selectedImage === "Spain") {
      return "/spain";
    } else if (selectedImage === "Mani") {
      return "/mani";
    } else if (selectedImage === "Norway") {
      return "/norway";
    }
  };

  return (
    <>
      {/* Fragments are useful when you need to group multiple JSX elements without adding an extra container,
      wraps multiple JSX elements without adding an extra DOM node */}
      <div class="container text-center">
        <header className="specialHeader">
          <h2>Choose your road trip </h2>
        </header>
        <div class="row row-cols-auto">
          <motion.div // a component provided by the Framer Motion library for creating animated elements
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
          >
            <button
              class="btn btn-outline-success btn-lg"
              type="button"
              onClick={() => handleClick("Mani")}
            >
              Mani
            </button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
            <button
              class="btn btn-outline-success btn-lg"
              type="button"
              onClick={() => handleClick("Spain")}
            >
              Spαin
            </button>
          </motion.div>
          <motion.div
            className="col-xs-3"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
          >
            <button
              class="btn btn-outline-success btn-lg"
              type="button"
              onClick={() => handleClick("Norway")}
            >
              Norway
            </button>
          </motion.div>
        </div>{" "}
        {/*  </div>{" "} */}
        <Link to={getImageLink()}>
          <img
            src={
              selectedImage === "Spain"
                ? Spain
                : selectedImage === "Mani"
                ? Mani4Image
                : Norway
            }
            className="figure-img img-fluid rounded"
            alt={selectedImage}
          />
        </Link>
      </div>
    </>
  );
}
