import React from 'react'
import Mani1Image from "./images/Mani1.png";
import Mani2Image from "./images/Mani2.png";
import Mani3Image from "./images/Mani3.png";
import Mani4Image from "./images/Mani4.png";
import Mani5Image from "./images/Mani5.png";
import Mani6Image from "./images/Mani6.png";
import ImageSlider from './ImageSlider';
import "./ManiImageComponent.css";    /* this is how it is imported the css */

export default function ManiImagesComponent() {
let imageList =[
    {
        id: 1,
        name: "Mani1", 
        src: Mani1Image
    },
    {
        id: 2,
        name: "Mani2",
        src: Mani2Image

    },
    {
        id: 3,
        name :"Mani3",
        src: Mani3Image

    },
    {
        id: 4,
        name: "Mani4",
        src: Mani4Image
    },
    {
        id:5,
        name: "Mani5",
        src: Mani5Image
    },
    {
        id:6,
        name: "Mani6",
        src: Mani6Image
    }
        
    ]


  return (
    <div className="slider"> 
        <ImageSlider images={imageList.map((image) => image.src)} />
       {/*  {imageList.map((image) => (  //used {} to embed JavaScript  
        <div key={image.id} className="image-box">
          <img src={image.src} alt={image.name} />
        </div>
      ))}  */}</div>
  )
}

/* this will be the component with the photos of Mani
it will be impòrted to the WhereToComponent file */

/* it does not need a path */


