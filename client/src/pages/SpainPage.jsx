import React from "react";
import { useParams } from "react-router-dom";
import SpainImagesComponent from "../components/SpainImagesComponent";
import MapComponent from "../components/MapComponent";
import HotelsFetchComponent from "../components/HotelsFetchComponent";

export default function SpainPage() {
  // if you're passing props through the route definition in React Router v6, you should use the useParams hook to access those props within the component
  const { hotelParameters, adultCount, roomCount } = useParams();
  /* console.log("i am the hotelParameters of the SpainPage:", hotelParameters);
  console.log(
    "we are the hotelParameters:",
    hotelParameters,
    adultCount,
    roomCount
  ); */
  return (
    <div className="row">
      <div className="col">
        <div>
          Welcome to Spain
          <div className="vstack gap-3">
            <SpainImagesComponent />
            <HotelsFetchComponent
              hotelParameters={hotelParameters}
              adultCount={adultCount}
              roomCount={roomCount}
            />
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
