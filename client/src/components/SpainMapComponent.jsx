import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



export default function SpainMapComponent({hotels}) {
    if (!hotels || Object.keys(hotels).length === 0) {
        return <div>No hotel data available in the SpainMapComponent</div>;
      } 

console.log(hotels)

return (

   /*  <div> {hotels.map((hotel, index) => (  */  /* THE RETURN NEEDS AT LEAST ONE DIV TO BE WORKING  */
    /* <div key={index}> {hotel.latitude} </div>

   )} 
    </div> */
    <div>
 <MapContainer center={[37.9838, 23.7275]} zoom={5} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  /> 

  {hotels.map((hotel, index) => (
    <Marker 
    key={index} position={[parseFloat(hotel.latitude), parseFloat(hotel.longitude)]}>
        <Popup> 
        <div>
          <h2>{"Name : "+ hotel.regionalName} </h2>
        </div>
        </Popup>
        </Marker>
  ))}
   
   </MapContainer>
   </div>
);
};
