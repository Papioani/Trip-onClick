import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'; 
import './App.css';
import MapComponent from './components/MapComponent'; 
import Contact from './pages/Contact';
import Planned from './pages/Planned';
import WhereToComponent from './components/WhereToComponent';
import Map from './components/Map';



const Layout = ({children}) => {
  return (
    <div> 
      <header> 
        <h1>Easy planning!</h1>
        <nav> 
          <NavLink to="/contact">Contact</NavLink>{' '}
        {/* |  :a common symbol used to visually separate items */}
            {/* {' '} a single space between the NavLink components */}
          | <NavLink to="/">Where to...</NavLink> |{' '}
          <NavLink to="/planned">Trip</NavLink>
        </nav>
      </header> 
      <main>{children}</main>
      </div>
  )
}


 function App() {  

  return (
    <div>

     {/*  <h1>Stop/Still/Easy planning!</h1> 
      <WhereToComponent/>
      <MapComponent/>
      <Map/> */}

       
       
        {/* do I need a path to "/" ?  will it be tha app.jsx? ?????????????*/}
      {/*  <NavLink to="/contact">Contact</NavLink>
       <br/>
       <NavLink to="/planned">Trip</NavLink> */}
       
       <Routes>
         <Route path="/" index/>
         <Route path="contact" element={<Layout><Contact/></Layout>}/>
         <Route path="planned" element={<Layout><Planned/></Layout>}/> 
         {/* <Route path="/Mani" element={<Mani/>} />  */}  {/* when clicking on Mani it gets to the Mani url. I think wheretoComponent and App are separate  */}
       </Routes>
       

    </div>
  )
  }

export default App  
