import React from 'react';
import { Link } from 'react-router-dom';
import './style/Sidebar.css';
import { FaArrowRight } from 'react-icons/fa';

const Sidebar = ({ click }) => {
    return (
        <div className="sidebar">
            <div className="back__btn"> <FaArrowRight /> </div>
            <div className="register__option">
                <Link to="/login" className="sidebar-nav-link">Login</Link>
                <Link to="/register" className="sidebar-nav-link">Register</Link>
            </div>
            <div className="right_sidebar_link">
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Home</Link>
            </div>
        </div>
    )
}

export default Sidebar
