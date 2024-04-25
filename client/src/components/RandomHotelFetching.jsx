import React from "react";

export default function RandomHotelFetching({ results }) {
  console.log("Hotels data:", hotels);

  return (
    <div>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {result.data.data[0].title}{" "}
            {result.data.data[0].bubbleRating.rating}{" "}
            {result.data.data[0].priceForDisplay}
          </li>
        ))}
      </ul>
    </div>
  );
}
