import React from 'react' 
import ManiImagesComponent from '../components/ManiImagesComponent'
import MapComponent from '../components/MapComponent';
import ManiPlacesList from '../components/ManiPlacesList';
import FrontendRooms from "../components/FrontendRooms";
import { useState, useEffect } from 'react';
/* import './ManiPage.css' */

export default function ManiPage() {

  
/* this is the main part I delete and needs to come back 
 let [places, setPlaces] = useState([]); */    /* this is where the fetched places from the database are accumulated!!!!!!! */

 /* useEffect(() => {getPlaces()}, []);

 const getPlaces = async () => {
  try {
    const response = await fetch(`/api/places`, {
      method: "GET",
    });
    const data = await response.json(); 
    setPlaces(data); 

  } catch (err) {
    console.log(err);
  } 
}   until here, all the previous part needs to come back*/

  /* const getPlaces = () => {


    fetch("/api/places") */   /* in frontend I need the ENTIRE ROUTE not only / 
    This code will attempt to fetch data from the /api/places endpoint 
    of the backend server app.js lines 8-16 

    .then(response => response.json())
    .then(places => {
      setPlaces(places);
    })
    .catch(error =>{
      console.log(error);
  })
};  /* this is the frontend that sends to the api.js to fetch info from the database */ 

  return (
    
    <div>
       Welcome to Mani
     <div class="container" >
         <ManiImagesComponent/>
        </div>
      

    <div class="container" >
         <MapComponent/> 
        </div>
        
    <div class="container" >
        <ManiPlacesList/> 
        </div>
  
       
    </div>
  )
}
