import React, { useEffect, useState } from "react";
import SpainMapComponent from "./SpainMapComponent";
import ManiHotelFavourites from "./ManiHotelFavourites";

function FrontendHotelsFetchComponent() {
  // create a form to store the parameters for the hotel search
  const EMPTY_FORM = {
    CheckIn: "",
    CheckOut: "",
    Adults: "",
    Rooms: "",
  };
  // a state variable to store the parameters
  const [hotelParameters, setHotelParameters] = useState(EMPTY_FORM);
  // // a state variable for the destinations
  const [destinationGeoId, setDestinationGeoId] = useState("");
  // a variable for the results
  const [results, setResults] = useState([]);
  // a state variable for the errors
  const [error, setError] = useState("");
  // a state variable for the loading
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (click) => {
    setIsLoading(true);
    setHotelParameters(EMPTY_FORM);
    setDestination("");
    setResults([]);
    setError("");
    const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${geoId}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "314a76c0f8mshba931602e18bfcfp1f7807jsn79a0981b285a",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };

    try {
      // Wait for fetch operation to complete
      const destinationGeoId = await searchGeoId(
        url,
        "destinationGeoId",
        options
      );

      console.log(options);
      console.log("Destination:", searchGeoId);

      const hotelUrl = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${destinationGeoId}&checkIn=${hotelParameters.checkIn}&checkOut=${hotelParameters.checkOut}&pageNumber=1&adults=${hotelParameters.Adults}&rooms=${hotelParameters.Rooms}&currencyCode=Eur&rating=4&priceMin=120&priceMax=200`;
      // Perform the new fetch using the obtained airport codes
      console.log(ticketUrl);
      const ticketResponse = await fetch(ticketUrl, options);
      if (!ticketResponse.ok) {
        throw new Error("Failed to fetch flight search data");
      }
      const result = await ticketResponse.json();
      setResults(result);
      setIsLoading(true);
      console.log(result);
    } catch (error) {
      setIsLoading(false);
      setError(`Something went wrong: ${error.message}`);
      console.error(error);
    }
  };
  // useEffect(() => {
  // Without useEffect, this code would be executed every time the component re-renders.
  /* const options = {
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
  }, []); */

  return (
    <div>
      <div>{console.log(hotels)}</div>
      <ManiHotelFavourites hotels={hotels} />
    </div>
  );
}

export default FrontendHotelsFetchComponent;
