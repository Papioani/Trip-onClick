import React, { useState } from "react";
import MyTrips from "../pages/MyTrips";

export default function ManiHotelFavourites({ results }) {
  console.log("RESULTS of Mani Favoutites :", results);

  const [favourites, setFavourites] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [nextId, setNextId] = useState(1);

  console.log("Favourites:", favourites);
  console.log("Rejected:", rejected);

  console.log("I am the h");

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
  console.log("I am the RANDOMHOTEL of ManiHotelFavourites", randomHotel);
  return (
    <div>
      {randomHotel ? (
        <div>
          <p> A place to sleep you´ll love:</p>

          <div>
            <p>
              Hotel name: {randomHotel.title} Rating:{" "}
              {randomHotel.bubbleRating.rating} Price: {randomHotel.priceFo}
            </p>
            <button onClick={handleLike}>like</button>
            <button onClick={handleNah}>nah</button>
          </div>
        </div>
      ) : (
        <p>No hotel selected</p>
      )}
      {/*   <MyTrips favourites={favourites} /> */}
    </div>
  );
}
