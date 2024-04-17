import React from "react";
import Norway from "../components/images/Norway.png";

export default function NorwayPage(props) {
  const { hotelParameters, adultCount, roomCount } = props;
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
