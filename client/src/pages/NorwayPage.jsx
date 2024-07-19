import React from "react";
import { useParams } from "react-router-dom";
import Norway from "../assets/images/Norway.png";

export default function NorwayPage() {
  const { hotelParameters, adultCount, roomCount } = useParams();
  console.log(
    "log my parameters in Norway:",
    hotelParameters,
    adultCount,
    roomCount
  );
  return (
    <div>
      Welcome to Norway
      <img src={Norway} class="figure-img img-fluid rounded" />
    </div>
  );
}
