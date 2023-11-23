import React, {useState, useEffect} from "react"
import { motion } from "framer-motion";
import Mani4Image from "./images/Mani4.png";
import NorthernSpain from "./images/NorthernSpain.png";
import Norway from "./images/Norway.png";
import { Link } from 'react-router-dom';
import RoadTrip from "../components/images/RoadTrip.png"; 
import { Routes, Route} from 'react-router-dom'; 
import ManiPage from '../pages/ManiPage';
import SpainPage from "../pages/SpainPage"
import NorwayPage from '../pages/NorwayPage';
import './WhereToComponent.css';




export default function WhereToComponent() {


const [trip, setTrip] = useState(null)
const [selectedImage, setSelectedImage] = useState (null)
/* const [move, setMove] = useState(false)   if I have the same onclick and one state, they move all together.
theu need separate ones */



 

const handleClick = (location) => {
  setTrip(location);
};
   

/* selectedImage state was directly assigned the image itself (e.g., NorthernSpain, Mani4Image, Norway) 
if (trip === "Mani") {
    setSelectedImage(Mani4Image)
 }
 and not a string representing the image name.

The getImageLink() function checks if selectedImage is equal to a specific image variable ("Spain", "Mani", "Norway"), which might not work as expected since selectedImage is an image itself, not a string. */

useEffect(() => {  /* By using useEffect, the state update for selectedImage based on trip will only trigger when trip changes, preventing an infinite loop caused by continuous state updates. */
if (trip === "Mani") {
    setSelectedImage("Mani")
 } 
  else if (trip === "Spain") {
    setSelectedImage ("Spain")
 } 
  else if (trip === "Norway") {
    setSelectedImage ("Norway")
} 
}, [trip]);


const getImageLink = () => {
  if (selectedImage === "Spain"){
    return "/spain";
  } else if (selectedImage === "Mani") {
    return "/mani";
  } else if (selectedImage === "Norway") {
    return "/norway";
  }
  return "RoadTrip";
 }

    return (

   
  
  <>   {/* Fragments are useful when you need to group multiple JSX elements without adding an extra container */}
  <div class="container text-center"></div>
       <header className = "header"> 
        <h1>Trιp Οnclick</h1>
        <h2>Where to ...? </h2>
       </header> 
   <div>
     <div className="container">
      {/*  <div className="row"> */}
         <div className="d-flex">
            <motion.div class="col-xs-3" whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} >
              <button  class="btn btn-outline-success  btn-lg" 
                    type="button" onClick={() => handleClick("Mani")}>
              Μαni
              </button>
            </motion.div>
         {/*  <button onClick={() => this.handleClick()}>Click me!</button>  In functional components, you don't use this!!!!!!!!!!!!!*/}
           <motion.div  whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}  >
             <button  class="btn btn-outline-success btn-lg" type="button" onClick={() => handleClick("Spain")}>
              Northern Spαin
             </button>
          </motion.div>
          <motion.div className="col-xs-3" whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} >
             <button class="btn btn-outline-success btn-lg" type="button" onClick={() => handleClick("Norway")}>
              Norway
             </button> 
          </motion.div>
          </div> {/* f flex*/}
       {/* </div>  */}{/* row */}
     </div>  {/* container */}

       
       <Link to={getImageLink()}>
      <img src={selectedImage === 'Spain' ? NorthernSpain : selectedImage === 'Mani' ? Mani4Image : Norway} className="figure-img img-fluid rounded" alt={selectedImage} />
    </Link>

    </div>   
</>

    );
  }


    {/* Routes for different pages */}

   {/*  <Routes>
      <Route path="/spain" element={<SpainPage />} />
      <Route path="/mani" element={<ManiPage />} />
      <Route path="/norway" element={<NorwayPage />} />
    </Routes>  they are not needed anymore, cause the routes are in the app.jsx  */}


       {/* <div>{selectedImage}</div> 
       <Link to="/spain">
          <img src={NorthernSpain}  class="figure-img img-fluid rounded" />
       </Link>
       <Routes>
            <Route path= "/spain" element={<SpainPage/>}/>
       </Routes>
       <Link to="/mani">
          <img src={Mani4Image}  class="figure-img img-fluid rounded" />
       </Link>
       <Routes>
            <Route path= "/mani" element={<ManiPage/>}/>
       </Routes>

       <Link to="/norway">
          <img src={Norway}  class="figure-img img-fluid rounded" />
       </Link>
       <Routes>
            <Route path= "/norway" element={<NorwayPage/>}/>
       </Routes> */}

 