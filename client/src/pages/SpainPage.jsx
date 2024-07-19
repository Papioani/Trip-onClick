import React, { useState, useEffect } from "react";
import SpainImagesComponent from "../components/SpainImagesComponent";
import MapComponent from "../components/MapComponent";
import HotelsFetchComponent from "../components/HotelsFetchComponent";

// passed to SpainPage directly from its parent component or via route configuration.
export default function SpainPage({ hotelParameters, adultCount, roomCount }) {
  const [country, setCountry] = useState("Spain");

  console.log(country);
  let hotelThings = JSON.stringify(hotelParameters);
  console.log(
    "This is finally the hotelParameters in the SpainPage, line 9:",
    hotelThings
  );
  // if you're passing props through the route definition in React Router v6, you should use the useParams hook to access those props within the component
  /*  const location = useLocation;
  const { state } = location;
  const { hotelParameters, adultCount, roomCount } = state;*/
  console.log("i am the hotelParameters of the SpainPage:", hotelParameters);
  /* console.log(
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
              country={country}
            />
            {/*  <MapComponent /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
