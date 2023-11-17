import React from "react"
import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import ManiPage from "../pages/ManiPage";
import SpainPage from "../pages/SpainPage"; 
import './WhereToComponent.css';




export default function WhereToComponent() {


const [trip, setTrip] = useState("Mani")


 

const handleClick = (location) => {
  setTrip(location);
};
   
    return (

   

      <>  {/* Fragments are useful when you need to group multiple JSX elements without adding an extra container */}
      <div class="row">
        <div class="col">
         
      <div class="btn.group">
       <button  class="btn btn-outline-success" type="button" onClick={() => handleClick("Mani")}>
        Μαni
        </button>
       
       <button  class="btn btn-outline-success" type="button" onClick={() => handleClick("Spain")}>
        Northern Spαin
        </button>
        </div>
       
        
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
      </div>
      </div>
      
      </>
     
    

    );
  }