import React, { useState } from "react";
import MyTrips from "../pages/MyTrips";

export default function ManiPlacesList({ hotels }) {
  console.log("Hotels data:", hotels);

  const [randomHotel, setRandomHotel] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [nextId, setNextId] = useState(1);

  console.log("Favourites:", favourites);
  console.log("Rejected:", rejected);

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * hotels.length);
    const selectedRandomHotel = hotels[randomIndex];
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

  return (
    <div>
      {randomHotel ? (
        <div>
          <p> A place to sleep you´ll love:</p>

          <div>
            <p>
              Latitude: {randomHotel.latitude} Longitude:{" "}
              {randomHotel.longitude} Name: {randomHotel.regionalName}
            </p>
            {/* Include other properties you want to display */}
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
        onClick={handleClick}
        class="btn btn-outline-success"
      >
        Refreshιng Sleep
      </button>

      <MyTrips favourites={favourites} />
    </div>
  );
}
