import React from "react"
import ManiImagesComponent from "./ManiImagesComponent";



export default function WhereToComponent() {

const [trip, setTrip] = useState(false)

const handleClick = () => {
  setTrip(!trip);
};
   
    return (
      <div>Where to... 
       
       <button type="button" onClick={handleClick}>Μαni</button>
       <button type="button" onClick={handleClick}>Northern Spain</button>
       
       {trip && <div>{ManiImagesComponent}</div>}
       
      
      </div>
    )
  }