import React from "react";
import RoadTrip from "../assets/images/RoadTrip.png"; /* import the image from the folder */
import "../../styles/MyTrips.css";

export default function MyTrips({ favourites }) {
  console.log(favourites);

  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: `url(${RoadTrip})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
        opacity: 0.6,
      }}
    >
      <span className="text-span">Your roαd trip ... so far</span>{" "}
      <ul>
        {Array.isArray(favourites) &&
          favourites.map((favourite, index) => (
            <li key={index}>Name: {favourite.regionalName}</li>
          ))}
      </ul>
    </div>
  );
}
