import React from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../IMG/slider_image_4.webp";
import slide2 from "../IMG/slider_image_3.webp";
import "./carousel.css";
import { Link } from "react-router-dom";

const Slider = () => {
  var settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
       
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="carousel">
          <h1 className="carousel-title">Premium Members</h1>
        <Sliders {...settings}>
          <div>
            <img src={slide1} alt="" className="slide-img" />
            <h4 className="id">ID: HM_23j590</h4>
            <p className="followers">0 Follower(s) 1 Following</p>
            <Link to="/" className="profle">Full Profile</Link>
          </div>
          <div>
            <img src={slide1} alt="" className="slide-img" />
            <h4 className="id">ID: HM_23j590</h4>
            <p className="followers">0 Follower(s) 1 Following</p>
            <Link to="/" className="profle">Full Profile</Link>
          </div>
          <div>
            <img src={slide1} alt="" className="slide-img" />
            <h4 className="id">ID: HM_23j590</h4>
            <p className="followers">0 Follower(s) 1 Following</p>
            <Link to="/" className="profle">Full Profile</Link>
          </div>
          <div>
            <img src={slide1} alt="" className="slide-img" />
            <h4 className="id">ID: HM_23j590</h4>
            <p className="followers">0 Follower(s) 1 Following</p>
            <Link to="/" className="profle">Full Profile</Link>
          </div>
          <div>
            <img src={slide1} alt="" className="slide-img" />
            <h4 className="id">ID: HM_23j590</h4>
            <p className="followers">0 Follower(s) 1 Following</p>
            <Link to="/" className="profle">Full Profile</Link>
          </div>
     
        </Sliders>
      </div>
    </div>
  );
};

export default Slider;
