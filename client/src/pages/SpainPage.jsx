import React, { useEffect } from "react";
import { useState } from "react";
import SpainImagesComponent from "../components/SpainImagesComponent";
import MapComponent from "../components/MapComponent";
import HotelsFetchComponent from "../components/HotelsFetchComponent";

export default function SpainPage({ hotelParameters, adultCount, roomCount }) {
  console.log("i am the hotelParameters of the SpainPage:", hotelParameters);
  console.log(
    "we are the hotelParameters:",
    hotelParameters,
    adultCount,
    roomCount
  );
  return (
    <div className="row">
      <div className="col">
        <div>
          Welcome to Spain
          <div className="vstack gap-3">
            <SpainImagesComponent />
            <HotelsFetchComponent />
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
