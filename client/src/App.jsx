import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom'; 

import './App.css';
/* import WhereToComponent from './components/WhereToComponent'; */
import MapComponent from './components/MapComponent';
import Contact from './pages/Contact';
import Planned from './pages/Planned';
import WhereToComponent from './components/WhereToComponent';
import Map from './components/Map';

 function App() {  

  return (
    <div>

      <h1>Still planning!</h1>
       <WhereToComponent /> 
       <MapComponent/>
       <Map/>
       
        {/* do I need a path to "/" ?  will it be tha app.jsx? ?????????????*/}
       <NavLink to="/contact">Contact</NavLink>
       <br/>
       <NavLink to="/planned">Almost Ready</NavLink>
       
       <Routes>
         <Route path="/" element={<Planned/>}/> 
         <Route path="contact" element={<Contact/>}/>
         <Route path="planned" element={<Planned/>}/> 
         <Route path="/WhereToComponent/:id" element={<WhereToComponent/>} />   {/* when clicking on Mani it gets to the Mani url. I think wheretoComponent and App are separate  */}
       </Routes>

    </div>
  )
  }

export default App  
