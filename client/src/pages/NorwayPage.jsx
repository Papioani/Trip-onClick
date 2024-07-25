import React from "react";
import { useParams } from "react-router-dom";
import Norway from "../assets/images/Norway.png";
import MapComponent from "../components/MapComponent";

export default function NorwayPage() {
  const { hotelParameters, adultCount, roomCount } = useParams();
  console.log(
    "log my parameters in Norway:",
    hotelParameters,
    adultCount,
    roomCount
  );
  return (
    <div className="container-fluid">
      Welcome to Norway
      <img src={Norway} className="figure-img img-fluid rounded" />
      <MapComponent />
    </div>
  );
}
