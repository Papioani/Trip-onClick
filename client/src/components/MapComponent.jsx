import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
/* import { useMapEvents } from 'react-leaflet/hooks'
import { useEffect, useState } from "react"; */
import hotelsjson from "../data/hotels.json"


export default function MapComponent() {
    
  /* let [places, setPlaces] = useState(null);

  useEffect(() => {getPlaces()}, []);

  const getPlaces = () => {
    fetch("/api/places") */   /* in frontend I need the ENTIRE ROUTE not only /  */
   /*  .then(response => response.json())
    .then(places => {
      setPlaces(places);
    })
    .catch(error =>{
      console.log(error);
  })
}; */

return (
  <div> 


<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {hotelsjson.map(htls => (
    <Marker 
    key = {htls.hotel_id}
    position={[htls.latitude, htls.longitude]}>
      
    {/* <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup> */}

  </Marker>
  ))}

</MapContainer>
</div>
);
};



