import React, { useState, useContext } from "react";
import HotelsFetchComponent from "../components/HotelsFetchComponent";
import TripParametersComponent from "../components/TripParametersComponent";
import ManiImagesComponent from "../components/ManiImagesComponent";
import MapComponent from "../components/MapComponent";
import ManiHotelFavourites from "../components/ManiHotelFavourites";
import "../../styles/ManiPage.css";
import { TripContext } from "../App";

/* <Link> is specifically designed for client-side navigation within a React Router-managed application. It utilizes React Router's routing system to handle navigation without full page reloads.
<a> tag, when used in a React application without React Router, behaves as a standard HTML anchor tag and causes full page refreshes or navigates to a different URL */

/* <a href="https://www.example.com" target="_blank" title="Visit Example">Visit Example</a>  
I should use this to show info of each hotel  */
export default function ManiPage() {
  const { hotelParameters, adultCount, roomCount } = useContext(TripContext);
  console.log("hotelParameters DIRECTLY:", hotelParameters);
  console.log("adultCount DIRECTLY:", adultCount);
  console.log("roomCount DIRECTLY:", roomCount);

  const [country, setCountry] = useState("Mani");
  const [conditionalParameters, setConditionalParameters] = useState(false);

  console.log("MANI PAGE :,", country);
  const showTripParameters =
    !hotelParameters.checkIn &&
    !hotelParameters.checkOut &&
    adultCount === 0 &&
    roomCount === 0;
  /* this is the main part I delete and needs to come back 
 let [places, setPlaces] = useState([]); */ /* this is where the fetched places from the database are accumulated!!!!!!! */

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


    fetch("/api/places") */ /* in frontend I need the ENTIRE ROUTE not only / 
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
  /* console.log("I am the hotelParameters in ManiPage:", hotelParameters); */
  return (
    <>
      <div>
        Welcome to Mani
        <div class="container">
          <ManiImagesComponent />
        </div>
        <br />
        <br />
        <div class="container">
          <MapComponent />
        </div>
        <div class="container">
          <ManiHotelFavourites />
        </div>
      </div>
    </>
  );
}
