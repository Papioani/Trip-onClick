import React from 'react'
import ManiImagesComponent from '../components/ManiImagesComponent'

export default function ManiPage() {
  return (
    <div>
      <ManiImagesComponent/>

      let [places, setPlaces] = useState([];)

      useEffect(() => {getPlaces()}, []);

      const getPlaces = () =>{
        fetch("/placesApi/places")
        .then(response => response.json())
        .then(places => {
          setPlaces(places);
        })
        .catch(error =>{
          console.log(error);
      })
    };
    </div>
  )
}
