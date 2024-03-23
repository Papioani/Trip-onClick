import React, { useEffect, useState } from "react";
import SpainMapComponent from "./SpainMapComponent";
import ManiHotelFavourites from "./ManiHotelFavourites";

function FrontendHotelsFetchComponent() {
  // create a form to store the necessary parameters for the hotel search
  const EMPTY_FORM = {
    CheckIn: "",
    CheckOut: "",
    Adults: "",
    Rooms: "",
    Rating: "4",
    PriceMin: "100",
    PriceMax: "200",
  };
  // a state to store the parameters
  const [flightParameters, setFlightParameters] = useState(EMPTY_FORM);
  // a state for the hotels
  const [results, setResults] = useState([]);
  // a state for the errors
  const [error, setError] = useState("");
  // a state for the loading
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Without useEffect, this code would be executed every time the component re-renders.
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "693a320c7amshf8a3f0479327cbap12dca4jsn254f4f98016a",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
    };
    fetch(
      "https://hotels4.p.rapidapi.com/locations/v3/search?q=USA&locale=en_US&langid=1033&siteid=300000001",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const HotelsListObjects = data.sr.map((object) => ({
          latitude: object.coordinates.lat,
          longitude: object.coordinates.long,
          index: object.index,
          regionalName: object.regionNames.displayName,
        }));

        setHotels(HotelsListObjects);
        console.log(HotelsListObjects);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div>{console.log(hotels)}</div>
      <ManiHotelFavourites hotels={hotels} />
    </div>
  );
}

export default FrontendHotelsFetchComponent;
