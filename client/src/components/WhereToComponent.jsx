import React from "react"
import { useState } from "react";
import ManiImagesComponent from "./ManiImagesComponent";
import SpainImagesComponent from "./SpainImagesComponent";



export default function WhereToComponent() {

const [trip, setTrip] = useState(false)

const handleClick = () => {
  setTrip(!trip);
};

const handleClickImage = () => {

}
   
    return (
      <div>Where to... 
       
       <button type="button" onClick={handleClick}>Μαni</button>
       <button type="button" onClick={handleClick}>Northern Spαin</button>
       
       {trip ? 
       (
        <div><ManiImagesComponent onclick={handleClickImage}/></div>) : 
       (
        <div><SpainImagesComponent onclick={handleClickImage}/></div>
        )}
       
      
      </div>
    )
  }