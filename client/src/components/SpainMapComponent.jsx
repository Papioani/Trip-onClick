import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



export default function SpainMapComponent({hotels}) {
    if (!hotels || Object.keys(hotels).length === 0) {
        return <div>No hotel data available</div>;
      }
      const position = [41.39222759879499,2.1618354991900937]

return (


<MapContainer center={position} zoom={5} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  
    <Marker position={position}>
    <Popup  position={position} > 
   <div>
     <h2>{"Name : "+ hotels.city} </h2>
   </div>
   </Popup>
  </Marker>
  

</MapContainer>

);
};
