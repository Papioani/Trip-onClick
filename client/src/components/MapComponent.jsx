import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
/* import { useMapEvents } from 'react-leaflet/hooks'
import { useEffect, useState } from "react"; */
import hotelsjson from "../data/hotels.json"


export default function MapComponent() {
    
  /* let [, setPlaces] = useState(null);

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

const filteredHotels = hotelsjson.Hotels.filter(htls => htls.continent_name === "Europe")
console.log(filteredHotels)
return (
  <figure class="figure">


<MapContainer center={[36.8872991185396, 22.233783884471435]} zoom={5} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  /> 
  
  {/* <Tilelayer
    attribution= "Stamen Watercolor"
    url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
    /> */}

  {filteredHotels.map(htls => (
    <Marker 
    key = {htls.hotel_id}
    position={[htls.latitude, htls.longitude]}>
    <Popup position={[htls.latitude, htls.longitude]}> 
   <div>
     <h2>{"Name : "+ htls.hotel_name} </h2>
   </div>
   </Popup>
  </Marker>
  ))}

</MapContainer>

</figure>
);
};



