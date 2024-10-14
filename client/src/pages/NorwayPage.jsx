import React, { useState, useContext } from "react";
/* import { useParams } from "react-router-dom"; */ import Norway from "../assets/images/Norway.png";
import MapComponent from "../components/MapComponent";
import TripParametersComponent from "../components/TripParametersComponent";
import HotelsFetchComponent from "../components/HotelsFetchComponent";
import { TripContext } from "../App";

export default function NorwayPage() {
  const { hotelParameters, adultCount, roomCount } = useContext(TripContext);
  console.log(
    "log my parameters in Norway:",
    hotelParameters,
    adultCount,
    roomCount
  );
  const [country, setCountry] = useState("Norway");
  const [conditionalParameters, setConditionalParameters] = useState(false);
  console.log("NORWAY PAGE :,", country);

  const showTripParameters =
    !hotelParameters.checkIn &&
    !hotelParameters.checkOut &&
    adultCount === 0 &&
    roomCount === 0;
  return (
    <div className="row">
      <div className="col">
        <div>
          Welcome to Norway
          <div className="vstack gap-3">
            {showTripParameters && <TripParametersComponent />}
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
