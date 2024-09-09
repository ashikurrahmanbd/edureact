import React, { useEffect, useState } from 'react';
import './Navbar.css';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import logo from '../../assets/final-demo-logo.png';

function Navbar() {

  const [sticky, setSticky] = useState(false);
  const [mobileMenuEnable, setMobileMenuEnable] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  function menuIconHandler(){
      
      setMobileMenuEnable(mobileMenuEnable => !mobileMenuEnable);

  }
  
  return (

    <nav className={`${sticky ? 'dark-nav' : ''}`}>
        <div className="nav-component container">
            <img className='logo' src={logo} alt="" />
            <ul style={{ display: mobileMenuEnable ? 'block' : '' }}>
                <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-85} duration={500}> Program</Link></li>
                <li> <Link to='aboutus' smooth={true} offset={-85} duration={500}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset={-85} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={0} duration={500}>Testimonials</Link></li>
                <li className='btn'><Link to='contact' smooth={true} offset={0} duration={500}>Contact us</Link></li>
            </ul>
        </div>
        <FontAwesomeIcon icon={faBars} className='mobile-menu-icon' onClick={menuIconHandler} />
    </nav>
  )
}

export default Navbar
