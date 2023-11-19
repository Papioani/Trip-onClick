import React, { useEffect, useState } from 'react';
import SpainMapComponent from "./SpainMapComponent"
import ManiPlacesList from './ManiPlacesList';



function FrontendRooms() {
  const [hotels, setHotels] = useState([]);
/*!!!!!! I can´t fetch data directly in the component function without React hooks like useEffect or managing state using useState. 
Fetching data directly inside a function component without hooks can give errors.!!!!!!! */
  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '693a320c7amshf8a3f0479327cbap12dca4jsn254f4f98016a',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
      };
    fetch("https://hotels4.p.rapidapi.com/locations/v3/search?q=USA&locale=en_US&langid=1033&siteid=300000001", options)  /* with the fetch I don´t need to create a function and store the fetching in a const  */
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
          const HotelsListObjects = data.sr.map((object) => ({
              latitude: object.coordinates.lat, 
              longitude: object.coordinates.long, 
              index: object.index, 
              regionalName: object.regionNames.displayName
            }));

              setHotels(HotelsListObjects);
              console.log(HotelsListObjects)
          
        })
       // data.suggestions property is an array, I should loop through the array and extract the names from each entities key.
       /* for (let i=0; i < data.length; i++){
        let filteredData = data.map() => data.suggestions[i].entities[i].name === "corfu"
        fetch(filteredData.map() => data.suggestions[i].entities[i].name === "corfu") */
       
       /*  data.map(filterDataByName)
        function filterDataByName(){
            for (let i=0; i < data.length; i++){
            let filteredData = data.suggestions[i].entities[i].name === "corfu" */
        
      
      //  let filteredData = data.filter (name => ) 
       /* } 
        setNames();
      } */
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
   
  return (
    <div>
     <div>{console.log(hotels)}</div>
      {/* <h2>FrontendRooms Component: hotels.latitude</h2> */}
      {/*  <p>Latitude: {hotels.length > 0 ? hotels.latitude : 'Loading...'}</p>
      <p>Longitude: {hotels.length > 0 ? hotels.longitude : 'Loading...'}</p>  */}

      {/* Render SpainMapComponent and pass 'hotels' as a prop */}
     {/*  <SpainMapComponent hotels={hotels}/>  */}   

      hello  I am the FrontEndRooms component 
      <ManiPlacesList hotels={hotels}/> 
     
    </div>
  );
}

export default FrontendRooms;