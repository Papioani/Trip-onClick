import React, { useState } from "react";
import ManiHotelFavourites from "./ManiHotelFavourites";
import RandomHotelFetching from "./RandomHotelFetching";

function HotelsFetchComponent({ hotelParameters, adultCount, roomCount }) {
  // extracting the api key from the.env file
  const apiKey = "693a320c7amshf8a3f0479327cbap12dca4jsn254f4f98016a";
  console.log(apiKey);

  console.log(
    "I am the hotelParameters in the HotelsFetchComponent:",
    hotelParameters
  );
  // // a state variable to store the destinations
  const [destination, setDestination] = useState("");
  // a variable for the results
  const [results, setResults] = useState("");
  // a state variable for the errors
  const [error, setError] = useState("");
  // a state variable for the loading
  const [isLoading, setIsLoading] = useState(false);

  console.log("I am the DESTINATION of the HotelsFetchComponent:", destination);

  console.log("I am the hotelParameters: ", hotelParameters);
  const handleClick = async (destination) => {
    /* **** */
    setIsLoading(true);
    setDestination(destination);
    setResults("");
    setError("");
    const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${destination}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };
    console.log("this is the log for the destination URL: ", destination);
    try {
      // Wait for fetch operation to complete
      const destinationGeoId = await searchGeoId(url, "destination", options);

      console.log(options);
      console.log("Destination:", searchGeoId);

      const hotelUrl = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${destinationGeoId}&checkIn=${hotelParameters.checkIn}&checkOut=${hotelParameters.checkOut}&pageNumber=1&adults=${adultCount}&rooms=${roomCount}&currencyCode=Eur&rating=4&priceMin=120&priceMax=200`;
      // Perform the new fetch using the obtained airport codes
      console.log(hotelUrl);
      const hotelResponse = await fetch(hotelUrl, options);
      if (!hotelResponse.ok) {
        throw new Error("Failed to fetch hotel search data");
      }
      const result = await hotelResponse.json();
      setResults(result);
      setIsLoading(true);
      console.log(result);
    } catch (error) {
      setIsLoading(false);
      setError(`Something went wrong: ${error.message}`);
      console.error(error);
    }
  };

  async function searchGeoId(url, geoId, options) {
    try {
      setIsLoading(true);
      const response = await fetch(url, options);
      if (!response.ok) {
        //when you throw an error you will go to the catch block
        throw new Error("failed to fetch hotel data");
      }
      const responseData = await response.json(); /* !!!!!!!! */
      // Log the geoId and data for debugging
      console.log(`Geo ID: ${geoId}`, responseData);
      if (!responseData.data || responseData.data.length === 0) {
        throw new Error("No hotel data found");
      }
      // Extract the GeoID from the nested structure
      /* const newAirportCode = data.data[0]?.airportCode || '';  */ /* The optional chaining (?.) is used to handle cases where data or data[0] might be null or undefined.
|| '':  if newAirportCode is undefined (due to optional chaining) or if the extracted airportCode is falsy, it will default to an empty string (''). */
      let extractedGeoId = responseData.data[0].geoId;
      if (!extractedGeoId) {
        throw new Error("GeoId not found in response");
      }
      setIsLoading(true);
      console.log(extractedGeoId);
      return extractedGeoId;
    } catch (err) {
      setIsLoading(false);
      setError(`Failed to fetch hotel data for ${geoId}: ${err.message}`); // superimportante to see the error for debugging !!!
      console.error(err); // superimportante
      throw err; // superimportante !!
    }
  }
  // useEffect(() => {
  // Without useEffect, this code would be executed every time the component re-renders.
  /* const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
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
    <>
      <div className="buttons">
        <button onClick={() => handleClick("Kardamyli")}>
          Sleep in Kardamyli
        </button>
        <button onClick={() => handleClick("Limeni")}>Sleep in Limeni</button>
      </div>
      {results && <RandomHotelFetching results={results} />}

      {/* Error message if there's an error */}
      {error && <p>{error}</p>}
      {/* Loading indicator */}
      {isLoading && <p>Loading...</p>}
    </>
  );
}

/* ****  The data fetching operation in HotelsFetchComponent is directly tied to the handleClick function, which is invoked when the user clicks a button.
Since the data fetching is initiated by user interaction, it doesn't need to occur immediately after the component is mounted, which is what useEffect with an empty dependency array is typically used for. */

export default HotelsFetchComponent;
