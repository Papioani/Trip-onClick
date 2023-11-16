import React, { useEffect, useState } from 'react';

function SleepFrontEnd() {
  const [names, setNames] = useState([]);
/*!!!!!! I can´t fetch data directly in the component function without React hooks like useEffect or managing state using useState. 
Fetching data directly inside a function component without hooks can give errors.!!!!!!! */
  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '314a76c0f8mshba931602e18bfcfp1f7807jsn79a0981b285a',
          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
      };
    fetch("https://hotels4.p.rapidapi.com/locations/search?query=greece&locale=en_US", options)  /* with the fetch I don´t need to create a function and store the fetching in a const  */
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
       // data.suggestions property is an array, I should loop through the array and extract the names from each entities key.
       /* for (let i=0; i < data.length; i++){
        let filteredData = data.map() => data.suggestions[i].entities[i].name === "corfu"
        fetch(filteredData.map() => data.suggestions[i].entities[i].name === "corfu") */

        data.map(filterDataByName)
        function filterDataByName(){
            for (let i=0; i < data.length; i++){
            let filteredData = data.suggestions[i].entities[i].name === "corfu"
        }
      //  let filteredData = data.filter (name => ) 
       } 
        setNames(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>SleepFrontEnd Component</h2>
      <p>Name: {names}</p>
    </div>
  );
}

export default SleepFrontEnd;