import React from 'react';



export default function ManiPlacesList({hotels}) {
console.log("Hotels data:", hotels);

  return (
    <div>
    
    <h2>I am the MANI PLACES LIST </h2>
    <h2>List of Hotels</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            {/* Display hotel information */}
            {/* For instance, you might render the hotel name */}
            {hotel.latitude} {hotel.longitude} {hotel.regionalName} {/* Replace 'name' with the property name in your hotel object */}
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
