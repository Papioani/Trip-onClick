import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'; 
import WhereToComponent from '../components/WhereToComponent'
import Contact from './Contact'
import Planned from './Planned'

export default function Home() {

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
    <div></div>
  
}
