import React from 'react'
import './Navbar.css'

import logo from '../../assets/final-demo-logo.png'

function Navbar() {
  return (
    <nav>
        <div className="nav-component container">
            <img className='logo' src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li className='btn'>Contact us</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
