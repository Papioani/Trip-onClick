import React from "react"
import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import ManiImagesComponent from "./ManiImagesComponent";
import SpainImagesComponent from "./SpainImagesComponent";
/* import ManiPage from "..pages/ManiPage";
import SpainPage from "./pages/SpainPage"; */




export default function WhereToComponent() {

const [trip, setTrip] = useState(false)
const [component, setComponent] = useState(false)
 

const handleClick = () => {
  setTrip(!trip);
};

const handleClickImage = () => {  /* this will lead to the ManiPage or the SpainPage  */
  setComponent(!component) 
}
   
    return (
      <div>Where to... 
        <br/>
       
       <button className= "Mani" type="button" onClick={handleClick}>Μαni</button>
       <button className="Spain" type="button" onClick={handleClick}>Northern Spαin</button>
       
       {trip ? 
       (
        <div><ManiImagesComponent onclick={handleClickImage}/></div>) : 
       (
        <div><SpainImagesComponent onclick={handleClickImage}/></div>
        )}
       
       <Routes>
         <Route path="/Mani" element={<ManiImagesComponent onClick={handleClickImage}/>}/>
         <Route path="/Spain" element={<SpainImagesComponent/>}/>
         <Route path="/" element={ component ? (
              <Navigate to="/Mani" />
            ) : (
              <Navigate to="/Spain" /> )} />
       </Routes>
      
      
      </div>
    )
  }