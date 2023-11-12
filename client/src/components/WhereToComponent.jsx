import React from "react"
import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import ManiImagesComponent from "./ManiImagesComponent";
import SpainImagesComponent from "./SpainImagesComponent";
import ManiPage from "../pages/ManiPage";
import SpainPage from "../pages/SpainPage"; 




export default function WhereToComponent() {


const [trip, setTrip] = useState(false)
const [component, setComponent] = useState(false)

 

const handleClick = () => {
  setTrip(!trip);
};

const handleClickImage = () => 
  setComponent(!component);
 
   
    return (
      <>  {/* Fragments are useful when you need to group multiple JSX elements without adding an extra container */}
       <button className= "Mani" type="button" onClick={handleClick}>
        Μαni
        </button>
       <button className="Spain" type="button" onClick={handleClick}>
        Northern Spαin
        </button>
       
       {trip ? 
       (
        <div><ManiImagesComponent onclick={handleClickImage}/></div>) : 
       (
        <div><SpainImagesComponent onclick={handleClickImage}/></div>
        )}
       
       <Routes>
        {/*  <Route path="/Mani" element={<ManiPage/>}/>
         <Route path="/Spain" element={<SpainPage/>}/> */}
         <Route path="/*" element={ component ? (
              <Navigate to="/Mani" element={<ManiPage/>} />
            ) : (
              <Navigate to="/Spain" element={<SpainPage/>} />)} />
       </Routes>      
      
      </>

    );
  }