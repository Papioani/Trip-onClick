import { useState } from 'react'
import {Routes, Route, Link, NavLink} from "react-router-dom"
import StillPlanning from './components /StillPlanning'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
       <Routes>
        <Route path = "/" element= {<StillPlanning />} />
       </Routes>
      </div>
  )
}

export default App
