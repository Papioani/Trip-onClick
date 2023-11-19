import React, {useState} from 'react'
import Planned from '../pages/Planned'

export default function ManiPlacesOnScreen({randomHotel}) {

    console.log(randomHotel)
 
    const [favourites, setFavourites] = useState([])
    const [rejected, setRejected] = useState([])
    const [nextId, setNextId] =useState(1)
    

    function handleLike () {
       randomHotel.id =nextId
       setNextId(nextId + 1)
       let newFavourites = [...favourites]
       newFavourites.push(randomHotel)
       setFavourites(newFavourites) 
       console.log(newFavourites);
    }

    function handleNah () {
        randomHotel.id =nextId
        setNextId(nextId + 1)
        let newRejected = [...rejected]
        newRejected.push(randomHotel)
        setRejected(newRejected) 
     }


  return (
    <div>
        {randomHotel ? (     
        <div> 
           <p> A place to sleep you´ll love:</p>

           <div>
            <p>Latitude: {randomHotel.latitude} Longitude: {randomHotel.longitude} Name: {randomHotel.regionalName}</p>  
            {/* Include other properties you want to display */}
              <button onClick={handleLike}>like</button>
              <button onClick={handleNah}>nah</button> 
           </div>

        </div>
      ) : (
        <p>No hotel selected</p>
      )}  
      
     <Planned favourites={favourites}/>

      </div>
  )
}
