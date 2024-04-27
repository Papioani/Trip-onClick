import React, { useState, useEffect } from "react";
import ManiHotelFavourites from "./ManiHotelFavourites";

export default function RandomHotelFetching({ results }) {
  const [randomHotelData, setRandomHotelData] = useState([]);
  const [randomHotel, setRandomHotel] = useState(null);

  // I was struggling with accessing the results.data.data , but apparently they were not accessible yet when I was
  // trying to access them. So , with the following code I made sure they are available first and then use them!!!
  useEffect(() => {
    // useEffect is asynchronous. To make sure that results are available before accessing them, incluse results aa a dependency
    if (results && results.data && results.data.data) {
      const lengthData = results.data.data.length;
      const randomIndex = Math.floor(Math.random() * lengthData);
      const selectedRandomHotel = results.data.data[randomIndex];
      setRandomHotel(selectedRandomHotel);
    }
  }, [results]);

  function handleLike() {
    if (randomHotel) {
      const newHotel = { ...randomHotel, id: nextId };
      setNextId(nextId + 1);

      const newFavourites = [...favourites, newHotel];
      setFavourites(newFavourites);
    }
  }

  function handleNah() {
    if (randomHotel) {
      const newHotel = { ...randomHotel, id: nextId };
      setNextId(nextId + 1);

      const newRejected = [...rejected, newHotel];
      setRejected(newRejected);
    }
  }

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
      {randomHotel ? (
        <div>
          <button onClick={handleLike}>like</button>
          <button onClick={handleNah}>nah</button>
        </div>
      ) : (
        <p>No hotel selected</p>
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
