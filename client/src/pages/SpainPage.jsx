import React, { useState, useContext } from "react";
import SpainImagesComponent from "../components/SpainImagesComponent";
import MapComponent from "../components/MapComponent";
import HotelsFetchComponent from "../components/HotelsFetchComponent";
import TripParametersComponent from "../components/TripParametersComponent";
import { TripContext } from "../App";

export default function SpainPage() {
  const { hotelParameters, adultCount, roomCount } = useContext(TripContext);
  console.log("hotelParameters DIRECTLY:", hotelParameters);
  console.log("adultCount DIRECTLY:", adultCount);
  console.log("roomCount DIRECTLY:", roomCount);

  const [predefinedRoute, setpredefinedRoute] = useState("Spain");
  const [conditionalParameters, setConditionalParameters] = useState(false);

  console.log("SPAIN PAGE :,", predefinedRoute);
  const showTripParameters =
    !hotelParameters.checkIn &&
    !hotelParameters.checkOut &&
    adultCount === 0 &&
    roomCount === 0;

  /*  console.log(predefinedRoute);
  let hotelThings = JSON.stringify(hotelParameters);
  console.log(
    "This is finally the hotelParameters in the SpainPage, line 9:",
    hotelThings
  );
  console.log(
    "This is finally the hotelParameters in the SpainPage, line 9:",
    hotelParameters
  ); */
  // if you're passing props through the route definition in React Router v6, you should use the useParams hook to access those props within the component
  /*  const location = useLocation;
  const { state } = location;
  const { hotelParameters, adultCount, roomCount } = state;*/

  return (
    <div className="row">
      <div className="col">
        <div>
          Welcome to Spain
          <div className="vstack gap-3">
            {showTripParameters && <TripParametersComponent />}
            <SpainImagesComponent />
            <HotelsFetchComponent
              hotelParameters={hotelParameters}
              adultCount={adultCount}
              roomCount={roomCount}
              predefinedRoute={predefinedRoute}
            />
            {/*  <MapComponent /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
