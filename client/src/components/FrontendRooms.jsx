import React, { useEffect, useState } from 'react';
import SpainMapComponent from "./SpainMapComponent"

function FrontendRooms() {
  const [hotels, setHotels] = useState([]);
/*!!!!!! I can´t fetch data directly in the component function without React hooks like useEffect or managing state using useState. 
Fetching data directly inside a function component without hooks can give errors.!!!!!!! */
  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '314a76c0f8mshba931602e18bfcfp1f7807jsn79a0981b285a',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
      };
    fetch("https://booking-com.p.rapidapi.com/v1/hotels/data?hotel_id=1648672&locale=en-gb", options)  /* with the fetch I don´t need to create a function and store the fetching in a const  */
      .then((res) => res.json())
      .then((data) => {
        
       // data.suggestions property is an array, I should loop through the array and extract the names from each entities key.
       /* for (let i=0; i < data.length; i++){
        let filteredData = data.map() => data.suggestions[i].entities[i].name === "corfu"
        fetch(filteredData.map() => data.suggestions[i].entities[i].name === "corfu") */
        setHotels([{ latitude: data.location.latitude, longitude: data.location.longitude, id: data.hotel_id, city: data.city }]);
       /*  data.map(filterDataByName)
        function filterDataByName(){
            for (let i=0; i < data.length; i++){
            let filteredData = data.suggestions[i].entities[i].name === "corfu" */
        }
      
      //  let filteredData = data.filter (name => ) 
       /* } 
        setNames();
      } */)
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(hotels); 
  return (
    <div>
     
      {/* <h2>FrontendRooms Component: hotels.latitude</h2> */}
      <p>Latitude: {hotels.length > 0 ? hotels[0].latitude : 'Loading...'}</p>
      <p>Longitude: {hotels.length > 0 ? hotels[0].longitude : 'Loading...'}</p>

      {/* Render SpainMapComponent and pass 'hotels' as a prop */}
     {/*   <SpainMapComponent hotels={hotels}/>  */}  

      
    </div>
  );
}

export default FrontendRooms;