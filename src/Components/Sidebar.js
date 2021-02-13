import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Sidebar.css';
import { FaArrowRight } from 'react-icons/fa';

const Sidebar = ({ setShow, show }) => {
  
    const handle =()=>{
        setShow(false)
    }

    return (
        <div className="sidebar" style={{ right: show ? '-300px': '0' }}>
            <div className="back__btn" onClick={ handle }> <FaArrowRight /> </div>
            <div className="register__option">
                <Link to="/login" className="sidebar-nav-link">Login</Link>
                <Link to="/register" className="sidebar-nav-link">Register</Link>
            </div>
            <div className="right_sidebar_link">
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Active Member</Link>
                <Link to="/" className="link">Premium Plans</Link>
                <Link to="/" className="link">Happy Stories</Link>
                <Link to="/" className="link">Contact Us</Link>
                <Link to="/" className="link">About Us</Link>
                <Link to="/" className="link">Help</Link>
                <Link to="/" className="link">Blog</Link>
                <Link to="/" className="link">Download App</Link>
                <Link to="/" className="link">Media & Press</Link>
            </div>
        </div>
    )
}

export default Sidebar
