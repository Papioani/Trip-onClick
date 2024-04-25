import React from "react";

export default function RandomHotelFetching({ results }) {
  console.log("THESE are the RESULTS data:", results);

  return {
    /* <div>
      <ul>
        {results.data.data.map((hotel, index) => (
          <li key={index}>
            {hotel.title} {hotel.bubbleRating.rating} {hotel.priceForDisplay}
          </li>
        ))}
      </ul>
    </div> */
  };
}
