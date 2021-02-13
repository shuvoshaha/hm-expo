import React from 'react'
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../IMG/slider_image_4.webp'
import slide2 from '../IMG/slider_image_3.webp'
import './Slider.css';

const Slider =()=>{
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 return (
     <div className="slider">
       <Sliders {...settings}>
          <div>
            <img src={slide1} alt="" className="slide-img" />
            <h4 className="title">Happiness is everything</h4>
         </div>
         <div>
            <img src={slide1} alt="" className="slide-img" />
            <h4 className="title">Happiness is everything</h4>
         </div>
         <div>
            <img src={slide1} alt="" className="slide-img" />
            <h4 className="title">Happiness is everything</h4>
         </div>
         <div>
            <img src={slide1} alt="" className="slide-img" />
            <h4 className="title">Happiness is everything</h4>
         </div>
         <div>
            <img src={slide1} alt="" className="slide-img" />
            <h4 className="title">Happiness is everything</h4>
         </div>
         <div>
            <img src={slide1} alt="" className="slide-img" />
            <h4 className="title">Happiness is everything</h4>
         </div>

          
        </Sliders>
     </div>
 )
}

export default Slider;