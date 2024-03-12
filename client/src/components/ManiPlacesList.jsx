import React, { useState } from "react";
import Planned from "../pages/MyTrips";

/* !!!!! If hotels is updated from the parent component and passed down to ManiPlacesList, 
you don't need to maintain its state internally within the component.!!!!!! */
export default function ManiPlacesList({ hotels }) {
  console.log("Hotels data:", hotels);

  /* !!!!!! when a click event occurs, I need to update the 
component state to trigger a re-render with the selected randomHotel.
Thus, useState!!!!!!!!!!!!! */

  const [randomHotel, setRandomHotel] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [nextId, setNextId] = useState(1);
  // Define state to store the selected random hotel
  console.log("Favourites:", favourites);
  console.log("Rejected:", rejected);

  /* !!!!!!! useEffect is for data fetching, subscribing to events, or performing other side effects after component render.
 since I´m calculating randomHotel immediately when the component renders, there's no asynchronous operation 
 or side effect that requires the use of useEffect. !!!!!!!!!!*/

  /* useEffect(() => {
  
}, []) */

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * hotels.length);
    const selectedRandomHotel = hotels[randomIndex];
    setRandomHotel(selectedRandomHotel);
  }

  // !!!!!!! Call getRandomHotel function to get randomHotel value OUTSIDE of return!!!!!
  /* const randomHotel = handleClick(hotels);
console.log(randomHotel); */

  {
    /* <h2>I am the MANI PLACES LIST </h2>
    <h2>List of Hotels</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}> */
  }
  {
    /* Display hotel information   For instance, you might render the hotel name   */
  }

  {
    /* </li>
        ))}
      </ul> */
  }
  {
    /* !!!!!!!!!!!!!!!!!const randomHotel = getRandomHotel(hotels);
        console.log(randomHotel);  In React, you CANNOT directly execute JavaScript statements 
        or DEFINE VARIABLES WITHIN the JSX block of a functional component. !!!!!!!!!!!!!!!!!!
         you should call the getRandomHotel function OUTSIDE of the JSX block to calculate the randomHotel value 
         and then use it inside the JSX block to display its value !!!!!!!!!!!!!!!!!!*/
  }

  {
    /* {randomHotel ? (       
        <div> 
           <p> A place to sleep you´ll love:</p>
          <p>Latitude: {randomHotel.latitude} Longitude: {randomHotel.longitude} Name: {randomHotel.regionalName}</p>  */
  }
  {
    /* Include other properties you want to display */
  }
  {
    /* </div>
      ) : (
        <p>No hotel selected</p>
      )}  */
  }

  {
    /* only keeping the random selection function here */
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

      {/* USE randomHotel value in your JSX */}
      {/* <p>Randomly selected hotel: {randomHotel}</p>  */}

      {/* to display the hotel information in another ManiPlacesOnScreen, I pass down the randomHotel state and handleClick function as props */}
      {/*  <ManiPlacesOnScreen randomHotel={randomHotel}/>   handleClick={handleClick}  */}
      <Planned favourites={favourites} />
    </div>
  );
}
