import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom'; 

import './App.css';
/* import WhereToComponent from './components/WhereToComponent'; */
import MapComponent from './components/MapComponent';
import Contact from './pages/Contact';
import Planned from './pages/Planned';
import { Map } from 'leaflet';


 function App() {  

  return (
    <div>

      <h1>Still planning!</h1>
       {/* <WhereToComponent/> */}
       <MapComponent/>
       <Map/>
       
       <NavLink to="/contact">Contact</NavLink>
       <br/>
       <NavLink to="/planned">Almost Ready</NavLink>
       
       <Routes>
         <Route path="/" index />
         <Route path="contact" element={<Contact/>}/>
         <Route path="planned" element={<Planned/>}/>
       </Routes>

    </div>
  )
  }

export default App  
