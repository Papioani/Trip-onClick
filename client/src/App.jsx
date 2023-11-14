import React from 'react';
import { Routes, Route, NavLink} from 'react-router-dom'; 
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Planned from './pages/Planned';
import WhereToComponent from './components/WhereToComponent';
import ManiPage from './pages/ManiPage';
import SpainPage from './pages/SpainPage'; 



 function App() {  

 /*  let EuropeHotels= htls.continent_id.filter ((continent) => 
  continent === "Europe");
  console.log(EuropeHotels)  */

  


  return (
     <div> 
 
      <header className = "header"> 
        <h1>Make a road trip without planning!</h1>
      </header> 

       
      
        <NavLink to="/"> Where to..</NavLink> 
        <br/>
        <NavLink to="/contact">Contact</NavLink>
        <br/>
        <NavLink to="/planned">Trip</NavLink> 
     
        
         <Routes>
          <Route path="/" elents={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="planned" element={<Planned/>}/> 
          <Route path="/mani" element={<ManiPage/>}/>
          <Route path="/spain" element={<SpainPage/>}/>
         </Routes>
        
    </div> 
   
  )
  }

export default App  
