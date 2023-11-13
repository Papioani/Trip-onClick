import React from 'react';
import { Routes, Route, NavLink} from 'react-router-dom'; 
import './App.css';
import { useMapEvents } from 'react-leaflet/hooks'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Planned from './pages/Planned';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import hotelsjson from "./data/hotels.json"



 function App() {  

 /*  let EuropeHotels= htls.continent_name.filter ((continent) => 
  continent === "Europe");
  console.log(EuropeHotels) */

  


  return (
     <div> 
 
      <header> 
        <h1>Easy planning!</h1>
      </header> 

       
      
        <NavLink to="/"> Where to..</NavLink> 
        <br/>
        <NavLink to="/contact">Contact</NavLink>
        <br/>
        <NavLink to="/planned">Trip</NavLink> 
     
        
         <Routes>
          <Route path="*" index element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="planned" element={<Planned/>}/> 
         {/*  <Route path="/where-to" element={<WhereToComponent/>}/> */}
         </Routes>
        
         <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {hotelsjson.map(htls => (
    <Marker 
    key = {htls.id}
    position={[htls.latitude, htls.longitude]}>
      
    {/* <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup> */}

  </Marker>
  ))}
  



</MapContainer>

    </div> 
   
  )
  }

export default App  
