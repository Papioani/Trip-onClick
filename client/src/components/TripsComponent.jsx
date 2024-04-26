import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Mani4Image from "./images/Mani4.png";
import Spain from "./images/Spain.png";
import Norway from "./images/Norway.png";
import { Link } from "react-router-dom";
import "../../styles/TripsComponent.css";

export default function TripsComponent() {
  const location = useLocation();
  const { hotelParameters, adultCount, roomCount } = location.state;
  const [country, setCountry] = useState("Spain");

  const [rendering, setRendering] = useState(0);
  console.log(
    "i am the hotelParameters, the adultCount and the roomCount:",
    hotelParameters,
    adultCount,
    roomCount
  );
  const [trip, setTrip] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [active, setActive] = useState(false);

  useEffect(() => {
    setRendering(rendering + 1);
  }, [trip]);

  const handleClick = (location) => {
    setActive(true);
    setTrip(location);
  };
  console.log("console.log the:", hotelParameters, adultCount, roomCount);

  /* const getImageLink = (selectedImage) => {
    if (selectedImage === "Spain") {
      setActive(true);
      navigate("/Spain", {
        state: {
          hotelParameters: hotelParameters,
          adultCount: adultCount,
          roomCount: roomCount,
        },
      });
    } else if (selectedImage === "Mani") {
      setActive(true);
      navigate("/Mani", {
        state: {
          hotelParameters: hotelParameters,
          adultCount: adultCount,
          roomCount: roomCount,
        },
      });
    } else if (selectedImage === "Norway") {
      setActive(true);
      navigate("/Norway", {
        state: {
          hotelParameters: hotelParameters,
          adultCount: adultCount,
          roomCount: roomCount,
        },
      });
    }
  }; */

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

  return (
    <>
      <div className="full-page">
        <header className="header">
          <h2>
            Step 1. If it clicks with you,{" "}
            <span className="clickit">click it</span>{" "}
          </h2>
          <div>Rendered {rendering} times</div>
        </header>
        <div className="split-screen">
          <div className="left-panel">
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
            <p>this is the : {hotelParameters.checkIn}</p>
            <Link
              to={{
                pathname:
                  selectedImage === "Spain"
                    ? "/Spain/*"
                    : selectedImage === "Mani"
                    ? "/Mani/*"
                    : selectedImage === "Norway"
                    ? "/Norway/"
                    : null,
              }}
            >
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
          <div className="right-panel">
            {" "}
            Going 🤩: {hotelParameters.checkIn}
            <br></br>
            Leaving: 😩{hotelParameters.checkOut}
            <br></br>
            How many 🤔: {adultCount} people
            <br></br>Rooms 😴: {roomCount}
          </div>
        </div>
      </div>
    </>
  );
}
