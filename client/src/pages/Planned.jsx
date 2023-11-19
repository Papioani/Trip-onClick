import React from "react"
import RoadTrip from "../components/images/RoadTrip.png";   /* import the image from the folder */
/* import './Planned.css' */

export default function Planned() {
    return (
      <div className="bg-image" 
           style={{backgroundImage: `url(${RoadTrip})`,
           height: "100vh",
           backgroundRepeat: "no-repeat",
           backgroundSize: "cover",
           position: "relative",
           }}>
             
        <span
          style={{
          backgroundColor: 'green',
          color: 'white', 
          fontSize: '1em',
          padding: '5px 10px',  
          position: 'absolute',
          top: '20px',
          left: '190px',
        }}>
        Welcome to your own Roαd trip ... so far  
        </span>
        
      </div>
    )
  }

  // props.places.map(s => (
   // <li key={s.id}>
  // should take props from the ManiPage 