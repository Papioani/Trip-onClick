import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Mani4Image from "./images/Mani4.png";
import Spain from "./images/Spain.png";
import Norway from "./images/Norway.png";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/TripsComponent.css";

export default function TripsComponent() {
  const location = useLocation();
  const {
    hotelParameters = {},
    adultCount = 0,
    roomCount = 0,
  } = location.state || {}; // For some reason, and following Gpts instructions , I had to change these to hotelParameters = {}, adultCount = 0, roomCount = 0, (?) yo qué sé

  const navigate = useNavigate();
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
  }, []);

  const handleClick = (location) => {
    setActive(true);
    setTrip(location);
  };
  /* console.log("console.log the:", hotelParameters, adultCount, roomCount); */
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
      navigate("/Spain", {
        state: {
          hotelParameters: hotelParameters,
          adultCount: adultCount,
          roomCount: roomCount,
        },
      });
    } else if (selectedImage === "Mani") {
      navigate("/Mani", {
        state: {
          hotelParameters: hotelParameters,
          adultCount: adultCount,
          roomCount: roomCount,
        },
      });
    } else if (selectedImage === "Norway") {
      navigate("/Norway", {
        state: {
          hotelParameters: hotelParameters,
          adultCount: adultCount,
          roomCount: roomCount,
        },
      });
    }
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <h2>Step 1. Choose your road trip </h2>
          <div>Rendered {rendering} times</div>
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
