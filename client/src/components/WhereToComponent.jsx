import React from "react"


export default function WhereToComponent() {

  let imageList = [{"id": 1, "name": "Mani1", "image": "./images/Mani1.png"},
                   {"id": 2, "name": "Mani2", "image": "./images/Mani2.png"},]

  const ManiImages = imageList.map((image) => (
  <div key={image.id}>  {/* When you are using Array.map() in React you must pass the key prop */}
  <img src={image.image} />
 </div> 
  ))


    return (
      <div>Where to... 
        <ul className="imagesMani">
        {ManiImages} 
    </ul>
      
      </div>
    )
  }