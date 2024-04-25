import React, { useState } from "react";
import MyTrips from "../pages/MyTrips";

export default function ManiHotelFavourites({ hotelData }) {
  console.log("hoteldata:", hotelData);

  const [randomHotel, setRandomHotel] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [nextId, setNextId] = useState(1);

  console.log("Favourites:", favourites);
  console.log("Rejected:", rejected);

  console.log("I am the h");
  function handleClick() {
    const randomIndex = Math.floor(Math.random() * hotelData.length);
    const selectedRandomHotel = hotelData[randomIndex];
    setRandomHotel(selectedRandomHotel);
  }

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
              Hotel name: {randomHotel.title} Rating: {randomHotel.rating}{" "}
              Price: {randomHotel.price}
            </p>
            <button onClick={handleLike}>like</button>
            <button onClick={handleNah}>nah</button>
          </div>
        </div>
      ) : (
        <p>No hotel selected</p>
      )}

      <br />
      <br />
      <button
        className="button-box"
        type="button"
        onClick={() => handleClick("Limeni")}
        class="btn btn-outline-success"
      >
        Refreshιng Sleep
      </button>

      {/*   <MyTrips favourites={favourites} /> */}
    </div>
  );
}
