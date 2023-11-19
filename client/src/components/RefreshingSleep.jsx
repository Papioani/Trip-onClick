import React from 'react'
import { useState } from "react";

export default function RefreshingSleep({hotels}) {
    console.log("Hotels data:", hotels);

     /* const [favourites, setFavourites] = useState([]);
    const [rejected, setRejected]= useState([]); */
    /* const favourites = []
    const rejected =[]

console.log(hotels)
if (hotels && hotels.length > 0) {
    const randomHotel = hotels[Math.floor(Math.random() * hotels.length)];
    console.log(randomHotel);
  } else {
    console.log('Hotels array is empty or undefined');
  } */
  


/* const handle = event => {
    setFavourites(event.target.value);
  }; */



return (
    <div>Refreshιng Sleep
   
        <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            {hotel.latitude} {hotel.longitude} {hotel.regionalName} 
          </li>
        ))}
      </ul>  

      {/*  <ul>
        {
          hotels.map((hotel, index) => (
            <li key={index}>
              {hotel.latitude} {hotel.longitude} {hotel.regionalName}
            </li>
          ))

        }
      </ul>  */}
      </div>
  )
}
