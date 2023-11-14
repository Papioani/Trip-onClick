import React from 'react'
/* import { useState, useEffect } from 'react';  */
import ManiImagesComponent from '../components/ManiImagesComponent'
import MapComponent from '../components/MapComponent';

export default function ManiPage() {

   /* let [places, setPlaces] = useState([]);

  useEffect(() => {getPlaces()}, []);

  const getPlaces = () => {
    fetch("/api/places")  */ /* in frontend I need the ENTIRE ROUTE not only / 
    This code will attempt to fetch data from the /api/places endpoint 
    of the backend server app.js lines 8-16 */
   /*  .then(response => response.json())
    .then(places => {
      setPlaces(places);
    })
    .catch(error =>{
      console.log(error);
  })
};   */

  return (
    <div>I am Mani
      <ManiImagesComponent/>
      <MapComponent/>

     
    </div>
  )
}
