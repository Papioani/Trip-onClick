import React from 'react';
import { useState, useEffect } from 'react';


/* !!!!! If hotels is updated from the parent component and passed down to ManiPlacesList, 
you don't need to maintain its state internally within the component.!!!!!! */
export default function ManiPlacesList({hotels}) {
console.log("Hotels data:", hotels);

/* !!!!!! when a click event occurs, I need to update the 
component state to trigger a re-render with the selected randomHotel.
Thus, useState!!!!!!!!!!!!! */

 // Define state to store the selected random hotel
 const [randomHotel, setRandomHotel] = useState(null);

/* !!!!!!! useEffect is for data fetching, subscribing to events, or performing other side effects after component render.
 since I´m calculating randomHotel immediately when the component renders, there's no asynchronous operation 
 or side effect that requires the use of useEffect. !!!!!!!!!!*/
/* useEffect(() => {
  getRandomHotel()
}, []) */

function handleClick() {
  const selectedRandomHotel =  hotels[Math.floor(Math.random() * hotels.length)];
  hotels[Math.floor(Math.random() * hotels.length)];
  console.log(selectedRandomHotel);
    setRandomHotel(selectedRandomHotel);
}

// !!!!!!! Call getRandomHotel function to get randomHotel value OUTSIDE!!!!!
/* const randomHotel = handleClick(hotels);
console.log(randomHotel); */


  return (
    <div>
    
    <h2>I am the MANI PLACES LIST </h2>
    <h2>List of Hotels</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            {/* Display hotel information */}
            {/* For instance, you might render the hotel name */}
            
          </li>
        ))}
      </ul>
      {/* !!!!!!!!!!!!!!!!!const randomHotel = getRandomHotel(hotels);
        console.log(randomHotel);  In React, you CANNOT directly execute JavaScript statements 
        or DEFINE VARIABLES WITHIN the JSX block of a functional component. !!!!!!!!!!!!!!!!!!
         you should call the getRandomHotel function OUTSIDE of the JSX block to calculate the randomHotel value 
         and then use it inside the JSX block to display its value !!!!!!!!!!!!!!!!!!*/}


  {randomHotel ? ( 
        <div> 
           <p>Randomly selected hotel:</p>
          <p>Latitude: {randomHotel.latitude} Longitude: {randomHotel.longitude} Name: {randomHotel. regionalName}</p> 
          {/* Include other properties you want to display */}
         </div>
      ) : (
        <p>No hotel selected</p>
      )} 

<button className="button-box" type="button"  onClick={handleClick} class="btn btn-outline-success">Refreshιng Sleep</button>

       {/* USE randomHotel value in your JSX */}
       {/* <p>Randomly selected hotel: {randomHotel}</p>  */}
      </div>
  )
} 
