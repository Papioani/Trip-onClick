import React from "react"
import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import ManiPage from "../pages/ManiPage";
import SpainPage from "../pages/SpainPage"; 




export default function WhereToComponent() {


const [trip, setTrip] = useState("Mani")


 

const handleClick = (location) => {
  setTrip(location);
};
   
    return (
      <>  {/* Fragments are useful when you need to group multiple JSX elements without adding an extra container */}
       <button  class="btn btn-success" type="button" onClick={() => handleClick("Mani")}>
        Μαni
        </button>
       <button  class="btn btn-success" type="button" onClick={() => handleClick("Spain")}>
        Northern Spαin
        </button>
       
      
       {trip === "Mani" ? 
       (
        <div><ManiPage /></div>) : 
       (
        <div> <SpainPage/></div>
        )}
       
      {/*  <Routes>
         <Route path="/Mani" element={<ManiPage/>}/>
         <Route path="/Spain" element={<SpainPage/>}/>  
       </Routes>    */}    
      
      </>

    );
  }