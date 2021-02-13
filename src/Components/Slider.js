import React from "react";
import slide1 from "../IMG/slider_image_4.webp";
import slide2 from "../IMG/slider_image_3.webp";
import "./Slider.css";

import SwiperCore, {
  Navigation,
  Scrollbar,
  Pagination,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, Pagination, Autoplay]);

const Slider = () => {

  return (
   <div className="swiper-slider">
      <Swiper slidesPerView={1} autoplay>
        <SwiperSlide className="slide">
          <img src={slide1} alt="" className="slide-img" />
          {/* <h4 className="title">Happiness is everything</h4> */}
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
</Swiper>
   </div>
  );
};

export default Slider;
