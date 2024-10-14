import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import Mani4Image from "../assets/images/Mani4.png";
import Spain from "../assets/images/Spain.png";
import Norway from "../assets/images/Norway.png";
/* import Video from "../components/images/Video.mp4"; */
import DefaultImage from "../assets/images/MapScreenshot.png";
import "../../styles/TripsComponent.css";

export default function TripsComponent() {
  const location = useLocation();
  /* const { hotelParameters, adultCount, roomCount } = location.state; */

  const [rendering, setRendering] = useState(0);

  const [trip, setTrip] = useState(null);
  const [selectedImage, setSelectedImage] = useState(DefaultImage);

  const [active, setActive] = useState(false);

  useEffect(() => {
    setRendering(rendering + 1);
  }, [trip]);

  const handleClick = (location) => {
    setActive(true);
    setTrip(location);
  };

  // getImageLink eventually not use, replaced by wrapping the img element within the Link
  const getImageLink = (selectedImage) => {
    if (selectedImage === "Spain") {
      setActive(true);
      navigate("/Spain");
    } else if (selectedImage === "Mani") {
      setActive(true);
      navigate("/Mani");
    } else if (selectedImage === "Norway") {
      setActive(true);
      navigate("/Norway");
    }
  };

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
      <div className="container-fluid">
        <header className="header">
          <h2>
            Your best road trip, <span className="clickit">click</span> away
          </h2>
          <div>Rendered {rendering} times</div>
        </header>
        {/*  <div className="split-screen"> */}
        {/* <div className="left-panel"> */}
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
        {/*  <p>this is the : {hotelParameters.checkIn}</p> */}
        <Link
          to={{
            pathname:
              selectedImage === "Spain"
                ? "/Spain/"
                : selectedImage === "Mani"
                ? "/Mani/"
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
                : DefaultImage
            }
            className="figure-img img-fluid rounded"
            alt={selectedImage}
          />
        </Link>
      </div>
    </>
  );
}
