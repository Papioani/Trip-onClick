import React from 'react';
import { Routes, Route, NavLink} from 'react-router-dom'; 
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Planned from './pages/Planned';



 function App() {  

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
          <Route path="/" index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/> 
          <Route path="contact" element={<Contact/>}/>
          <Route path="planned" element={<Planned/>}/> 
         {/*  <Route path="/where-to" element={<WhereToComponent/>}/> */}
         </Routes>
        
       

    </div> 
   
  )
  }

export default App  
