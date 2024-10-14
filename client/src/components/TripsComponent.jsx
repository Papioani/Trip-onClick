import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import Mani4Image from "../assets/images/Mani4.png";
import Spain from "../assets/images/Spain.png";
import Norway from "../assets/images/Norway.png";
/* import Video from "../components/images/Video.mp4"; */
import DefaultImage from "../assets/images/MapScreenshot.png";
import "../../styles/TripsComponent.css";

export default function TripsComponent() {
  const [rendering, setRendering] = useState(0);
  const [trip, setTrip] = useState(null);
  const [selectedImage, setSelectedImage] = useState(DefaultImage);

  const [active, setActive] = useState(false);

  const predefinedRoutes = [
    { name: "Mani", image: Mani4Image },
    { name: "Spain", image: Spain },
    { name: "Norway", image: Norway },
  ];

  useEffect(() => {
    setRendering(rendering + 1);
    const currentPredefinedRoute = predefinedRoutes.find(
      (pr) => pr.name === trip
    );
    setSelectedImage(
      currentPredefinedRoute ? currentPredefinedRoute.image : DefaultImage
    );
  }, [trip]);

  // When a button is clicked, change the trip and the corresponding image
  const handleClick = (countryName) => {
    setTrip(countryName);
  };

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
          {predefinedRoutes.map((predefinedRoute, index) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              key={index}
            >
              <button
                className="btn btn-outline-success btn-lg"
                type="button"
                onClick={() => handleClick(predefinedRoute.name)}
              >
                {predefinedRoute.name}
              </button>
            </motion.div>
          ))}
        </div>
        {/*  <p>this is the : {hotelParameters.checkIn}</p> */}
        {/* Image of the selected predefinedRoute, wrapped in a Link */}
        <Link
          to={`/${trip}`} // Navigates to the selected predefinedRoute page when the image is clicked
        >
          <img
            src={selectedImage} // Display the selected predefinedRoute's image
            className="figure-img img-fluid rounded"
            alt={trip}
          />
        </Link>
      </div>
    </>
  );
}
