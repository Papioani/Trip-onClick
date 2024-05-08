import React, { useState, useEffect } from "react";
import ManiHotelFavourites from "./ManiHotelFavourites";

export default function RandomHotelFetching({ results }) {
  const [randomHotelData, setRandomHotelData] = useState([]);
  const [randomHotel, setRandomHotel] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [nextId, setNextId] = useState(1);

  // I was struggling with accessing the results.data.data , but apparently they were not accessible yet when I was
  // trying to access them. So , with the following code I made sure they are available first and then use them!!!
  useEffect(() => {
    // useEffect is asynchronous. To make sure that results are available before accessing them, incluse results aa a dependency
    if (results && results.data && results.data.data) {
      const lengthData = results.data.data.length;
      const randomHotelIndices = [];
      while (randomHotelIndices.length < 4) {
        const randomIndex = Math.floor(Math.random() * lengthData);
        if (!randomHotelIndices.includes(randomIndex)) {
          randomHotelIndices.push(randomIndex);
        }
      }
      const selectedRandomHotel = randomHotelIndices.map(
        (index) => results.data.data[index]
      );
      setRandomHotel(selectedRandomHotel);
    }
  }, [results]);

  console.log("I am the RANDOMHOTEL[0]:", randomHotel[0]);

  function handleLike(index) {
    const selectedHotel = randomHotel[index];
    setFavourites([...favourites, selectedHotel]);
    const updatedRandomHotel = [...randomHotel];
    updatedRandomHotel.splice(index, 1);
    setRandomHotel(updatedRandomHotel);

    /* const newHotel = { ...randomHotel, id: nextId };
      setNextId(nextId + 1);

      const newFavourites = [...favourites, newHotel];
      setFavourites(newFavourites); */
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
      {randomHotel.length > 0 ? (
        randomHotel.map((hotel, index) => (
          <div key={index}>
            <p>Hotel name: {hotel.title}</p>
            <p>Rating: {hotel.bubbleRating.rating}</p>
            <p>Price: {hotel.priceForDisplay}</p>
            <div>
              <button onClick={() => handleLike(index)}>like</button>
              <button onClick={() => handleNah(index)}>nah</button>
            </div>
          </div>
        ))
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
