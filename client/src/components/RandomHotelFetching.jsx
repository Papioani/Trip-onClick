import React, { useState, useEffect } from "react";
import ManiHotelFavourites from "./ManiHotelFavourites";

export default function RandomHotelFetching({ results }) {
  const [hotelData, setHotelData] = useState([]);
  const [randomHotel, setRandomHotel] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * results.data.data.length);
    const selectedRandomHotel = results.data.data[randomIndex];
    setRandomHotel(selectedRandomHotel);
  }, [results]);

  console.log("I am the RANDOMHOTEL in the RandomHotelsFetching:", randomHotel);
  console.log("I am the RESULTS of RandomHotelFetching:", results);
  /* const hotelDataFetchingFunction = (title, rating, price) => {
     setHotelData((prevHotelData) => [
      // an arrow function ((prevHotelData) => [...]), with only 1 parameter)
      ...prevHotelData,
      { title: title, rating: rating, price: price },
    ]);
  };  */
  /* console.log("I am the HOTELDATA in the randomHotelFetching", hotelData); */
  return (
    <>
      {randomHotel && (
        <div>
          <p>Hotel name: {randomHotel.title}</p>
          <p>Rating: {randomHotel.bubbleRating.rating}</p>
          <p>Price: {randomHotel.priceForDisplay}</p>
        </div>
      )}
      {/* <>
      <div>
        <ul>
          {results.data.data.map((hotel, index) => (
            <li key={index}>
              {hotelDataFetchingFunction(
                hotel.title,
                hotel.bubbleRating.rating,
                hotel.priceForDisplay
              )}
            </li>
          ))}
        </ul>
      </div>
      <ManiHotelFavourites hotelData={hotelData} /> */}
    </>
  );
}
