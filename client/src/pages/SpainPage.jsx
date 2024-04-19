import React from "react";
import { useLocation } from "react-router-dom";
import SpainImagesComponent from "../components/SpainImagesComponent";
import MapComponent from "../components/MapComponent";
import HotelsFetchComponent from "../components/HotelsFetchComponent";

export default function SpainPage() {
  const location = useLocation();
  const { hotelParameters, adultCount, roomCount } = location.state;
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
