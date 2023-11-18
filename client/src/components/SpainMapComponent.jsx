import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



export default function SpainMapComponent({hotels}) {
    if (!hotels || Object.keys(hotels).length === 0) {
        return <div>No hotel data available in the SpainMapComponent</div>;
      }

      /* const position = [hotels.latitude, hotels.longitude] */
      const position =[{geo: [40.759591, -73.984912]}, {geo:[ 4.695458,
      -74.031197]}]

return (


<MapContainer center={[37.9838, 23.7275]} zoom={5} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

   {position.map(Marker, index => ( 
   <Marker key={index} position={Marker.geo}>
    <Popup> 
   <div>
     <h2>{"Name : "+ htls.regionNames.displayName} </h2>
   </div>
   </Popup>
  </Marker>
    ))}
   
 </MapContainer>


);
};
