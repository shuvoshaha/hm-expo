import React, { useState } from "react";
import Logo from "./IMG/logo.webp";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Components/Sidebar";
 
const Header = () => {
    const [show, setShow] = useState(false);

  const handle =()=>{
      setShow(!show);
  }

  console.log(show)
  return (
   <>   
    <div className="header">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Brand" className="brand__name" />
          </Link>
        </div>

        <Link to="/" className="office-time item">
          Saturday- Thursday 10:00 AM - 6:00 PM
        </Link>

        <div className="nav-right">
          <Link to="/register" className="nav-link item">
            Register Free
          </Link>
          <Link to="/login" className="nav-link item">
            Log In
          </Link>
          <span className="nav-link toggle" onClick={handle}>
            <FaBars />
          </span>
        </div>
      </nav>
    </div>
    { show && <Sidebar setShow={setShow} /> }
   </> 
  );
};

export default Header;
