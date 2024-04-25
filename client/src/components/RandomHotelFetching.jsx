import React from "react";
import { useState } from "react";
import ManiHotelFavourites from "./ManiHotelFavourites";

export default function RandomHotelFetching({ results }) {
  const [hotelData, setHotelData] = useState([]);

  const hotelDataFetchingFunction = (title, rating, price) => {
    setHotelData((prevHotelData) => [
      // an arrow function ((prevHotelData) => [...]), with only 1 parameter)
      ...prevHotelData,
      { title: title, rating: rating, price: price },
    ]);
  };
  console.log("I am the HOTELDATA in the randomHotelFetching", hotelData);
  return (
    <>
      <div>
        <ul>
          {hotelData.map((hotel, index) => (
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
      <ManiHotelFavourites hotelData={hotelData} />
    </>
  );
}
