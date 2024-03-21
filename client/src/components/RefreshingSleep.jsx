import React from "react";

export default function RefreshingSleep({ hotels }) {
  console.log("Hotels data:", hotels);

  return (
    <div>
      Refreshιng Sleep
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            {hotel.latitude} {hotel.longitude} {hotel.regionalName}
          </li>
        ))}
      </ul>
    </div>
  );
}
