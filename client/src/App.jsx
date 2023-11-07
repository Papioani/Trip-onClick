import { useState } from 'react'
import {Routes, Route, Link, NavLink} from "react-router-dom"
import StillPlanning from './components /StillPlanning'
import RoadTrips from './components /RoadTrips'
import InteractiveMap from './components /InteractiveMap'
import './App.css'

function App() {

  return (
      <div>
        <h1>Relax and roaδ it</h1>
        <NavLink to="/" activeStyle="active">StillPlanning</NavLink>
        <br/>
        <NavLink to="/trips" activeStyle="active">RoadTrips</NavLink>

       <Routes>
        <Route path = "/" element= {<StillPlanning />} />
        <Route path = "/trips" element= {<RoadTrips />} />
        <Route path = "/map" element= {<InteractiveMap />} />
       </Routes>
      </div>
  )
}

export default App
