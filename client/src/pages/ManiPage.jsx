import React from 'react' 
import ManiImagesComponent from '../components/ManiImagesComponent'
import MapComponent from '../components/MapComponent';
import FrontendRooms from "../components/FrontendRooms";
/* import './ManiPage.css' */

export default function ManiPage() {

  

/* let [places, setPlaces] = useState([]);  */  /* this is where the fetched places from the database are accumulated!!!!!!! */

/* useEffect(() => {getPlaces()}, []);

  const getPlaces = () => {
    fetch("/api/places") */  /* in frontend I need the ENTIRE ROUTE not only / 
    This code will attempt to fetch data from the /api/places endpoint 
    of the backend server app.js lines 8-16 */
    /* .then(response => response.json())
    .then(places => {
      setPlaces(places);
    })
    .catch(error =>{
      console.log(error);
  })
};  */ /* this is the frontend that sends to the api.js to fetch info from the database */ 

  return (
    <div>I am Mani
       <ManiImagesComponent/>
       <MapComponent/> 
       <FrontendRooms/> 

     
    </div>
  )
}
