import React, { useState } from "react";
import "./customSwiper.css";
import {
  CarouselItem2,
  CarouselItem1,
  CarouselItem3,
  CarouselItem4,
} from "../carouselItems/carouselItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dot from "../../assets/images/login/dot.svg";
import selectedDot from "../../assets/images/login/selectedDot.svg";

// var settings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   swipeToSlide: true,
//   vertical: false,
//   //   fade: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   //   autoplay: true,
//   //   autoplaySpeed: 500,
//   className: "swiper",
//   nextArrow: null,
//   prevArrow: null,
// };

const CustomSwiper = () => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a>
          <img src={i === currentSlide ? selectedDot : dot} />
        </a>
      );
    },
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: false,
    className: "customSwiper",
    beforeChange: (o, n) => {
      setCurrentSlide(n);
    },
  };



  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="customSwiper-main-container" on={(e) => console.log(e)}>
      <Slider {...settings}>
        <CarouselItem1 />
        <CarouselItem2 />
        <CarouselItem3 />
        <CarouselItem4 />
      </Slider>
    </div>
  );
};

export default CustomSwiper;
