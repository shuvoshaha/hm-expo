import React, { useContext } from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../IMG/slider_image_4.webp";
import "./happystories.css";
import { Link } from "react-router-dom";
import { contexAPI } from "../GlobalState";

const Slider = () => {
  const { img } = useContext(contexAPI);
  const imgCount = img.slice(0, 10);

  var settings = {
    infinite: true,
    speed: 1500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    cenerPadding: "60px",
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
      <div className="happy_stories">
        <Link className="all-plan" to="/">
          Browse Membership Plan
        </Link>
        <h1 className="happy_stories_title">Happy stories</h1>

        <Sliders {...settings}>
          {imgCount.map((data) => {
            return ( <div key={data.id}>
                <img src={data.userImageURL} alt="" className="happy-img" />
                <p className="love">Love is here...</p>
              </div>
            );
          })}
        </Sliders>
      </div>
    </div>
  );
};

export default Slider;
