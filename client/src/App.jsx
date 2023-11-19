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

  

  return (
     <div> 
     <div class="container text-left"></div>
      <header className = "header"> 
        <h1>Mαke a roαd trip without plαnning!</h1>
      </header>  

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" ></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="nav nav-underline">
        <li class="nav-item">
          <a class="nav-link" href="/Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/planned" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Trip
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/mani/*">Mani</a></li>
            <li><a class="dropdown-item" href="/spain/*">Spain</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav> 

      
       {/*  <NavLink to="/"> Where to..</NavLink> 
        <br/>
        <NavLink to="/contact">Contact</NavLink>
        <br/>
        <NavLink to="/planned">Trip</NavLink>  */}
     
        
         <Routes>
          <Route path="/*" element={<WhereToComponent/>}/> 
          <Route path="/Home/*" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="planned" element={<Planned/>}/> 
          <Route path="/mani/*" element={<ManiPage/>}/>
          <Route path="/spain/*" element={<SpainPage/>}/>
       
         </Routes>
        
    </div> 
   
  )
  }

export default App  
