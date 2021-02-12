import React from 'react';
import Logo from './IMG/logo.webp';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

const Header = () => {

    return (
        <div className="header">
            <nav>
              <div className="logo">
               <Link to="/">
                <img src={Logo} className="logo" alt="Brand" className="brand__name"/>
               </Link>
              </div>
              <Link to="/" className="office-time item">Saturday- Thursday 10:00 AM - 6:00 PM</Link>
   
             <div className="nav-right">
                 <Link to="/register" className="nav-link item">Register Free</Link>
                 <Link to="/login" className="nav-link item">Log In</Link>
                 <Link  className="nav-link toggle">
                   <FaBars />     
                 </Link>
            </div>   
            </nav>
        </div>
    )
}

export default Header
