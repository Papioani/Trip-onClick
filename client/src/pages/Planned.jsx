import React from "react"
import RoadTrip from "../components/images/RoadTrip.png";   /* import the image from the folder */
import '../components/Planned.css' 

export default function Planned({favourites}) {
  console.log(favourites)
  
    return (
      <div className="bg-image"
           style={{backgroundImage: `url(${RoadTrip})`}}> 
             
        <span className="text-span">
        Your onClick roαd trip ... so far  
        </span>
        
       

       {/*  Favourites: {favourites}  */} {/* error when you're trying to directly render an object as 
        a React child component, it IS NOT allowed in React */}
       <ul>
         {Array.isArray(favourites) && favourites.map((favourite,index) => (
          <li key={index}>
          Name: {favourite.regionalName}
          </li>
         ))}
       </ul>
      </div>
    )
  }

  