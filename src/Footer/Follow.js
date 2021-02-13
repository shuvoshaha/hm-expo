import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import fb from "../IMG/facebook.webp";
import linkedin from "../IMG/linkedin.webp";
import twitter from "../IMG/twitter.webp";
import ytube from "../IMG/youtube.webp";
import instagram from "../IMG/instagram.webp";
import gmail from "../IMG/gmail.webp";
import whatsapp from "../IMG/whatsapp.webp";
import imo from "../IMG/imo.webp";

const Follow = () => {
  return (
    <div className="follow" style={{ marginTop: '2rem' }}>
      <div className="col-6">
        <h4 className="s-title">Follow Us</h4>
        <Link to="/">
          <img src={fb} alt="" className="links" />
        </Link>
        <Link to="/">
          <img src={ytube} alt="" className="links" />
        </Link>
        <Link to="/">
          <img src={twitter} alt="" className="links" />
        </Link>
        <Link to="/">
          <img src={linkedin} alt="" className="links" />
        </Link>
        <Link to="/">
          <img src={instagram} alt="" className="links" />
        </Link>
      </div>
      
      <div className="col-6">
        <h4 className="s-title">Contact Us</h4>
        <Link to="/">
          <img src={gmail} alt="" className="links" />
        </Link>
        <Link to="/">
          <img src={whatsapp} alt="" className="links" />
        </Link>
        <Link to="/">
          <img src={imo} alt="" className="links" />
        </Link>
      </div>
    </div>
  );
};

export default Follow;
