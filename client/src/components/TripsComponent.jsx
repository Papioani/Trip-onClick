import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Mani4Image from "./images/Mani4.png";
import Spain from "./images/Spain.png";
import Norway from "./images/Norway.png";
import { Link } from "react-router-dom";
import "../../styles/TripsComponent.css";
import TripParameters from "./TripParameters";

export default function TripsComponent({
  hotelParameters,
  adultCount,
  roomCount,
}) {
  const [trip, setTrip] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [active, setActive] = useState(false);

  const handleClick = (location) => {
    setActive(true);
    setTrip(location);
  };
  console.log("console.log the:", hotelParameters, adultCount, roomCount);
  useEffect(() => {
    /* By using useEffect, the state update for selectedImage based on trip will only trigger when trip changes, preventing an infinite loop caused by continuous state updates. */
    if (trip === "Norway") {
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
      <div className="container">
        <header className="header">
          <h2>Step 1. Choose your road trip </h2>
        </header>
        <div className="row row-cols-auto">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
            <button
              className="btn btn-outline-success btn-lg"
              type="button"
              onClick={() => handleClick("Mani")}
            >
              Mani
            </button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
            <button
              className="btn btn-outline-success btn-lg"
              type="button"
              onClick={() => handleClick("Spain")}
            >
              Spain
            </button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
            <button
              className="btn btn-outline-success btn-lg"
              type="button"
              onClick={() => handleClick("Norway")}
            >
              Norway
            </button>
          </motion.div>
        </div>

        <Link to={getImageLink()}>
          <img
            src={
              selectedImage === "Spain"
                ? Spain
                : selectedImage === "Mani"
                ? Mani4Image
                : selectedImage === "Norway"
                ? Norway
                : null
            }
            className="figure-img img-fluid rounded"
            alt={selectedImage}
          />
        </Link>
      </div>
    </>
  );
}
