import React from "react";
import "../../components/homeHeroSection/homeHeroSection.css";
import arrowCircle from "../../assets/images/homeHeroSection/ArrowCircleUpRight.svg";
import card from "../../assets/images/homeHeroSection/Rectangle.svg";
import arrowRectangle from "../../assets/images/homeHeroSection/arrowRectangle.svg";
import divider from "../../assets/images/homeHeroSection/Divider.svg";
import arrowRectangleWhite from "../../assets/images/homeHeroSection/arrowRectangleWhite.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NudgeCard from "../nudgeCard/nudgeCard";
import Pattern from '../../assets/images/homeHeroSection/Patterns.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

const homeHeroSection = (props) => {
  const data = {
    rewardPoint: 12381,
  };




  return (
    <>
      <div className="heroSection">

        <div className='Pattern'>
            <img src={Pattern} alt="Pattern"/>
        </div>

        <div className="heroSection-top">
          <div className="heroSection-top-container">
            <div className="rewardPoint-container">
              <div className="rewardPoint">
                {data.rewardPoint.toLocaleString("en-IN")}
              </div>

              <div className="arrow">
                <img src={arrowCircle} alt="arrowCircle" />
              </div>
            </div>

            <div className="rewardPoint-name">Reward Points</div>
          </div>
        </div>

        <div className="heroSection-body">
          <div className="card-container">
            <div className="your-card-button" onClick={() => props.click()}>
              <div className="your-text">your</div>

              <div className="card-text">card</div>

              <div className="arrowRectangle">
                <img src={arrowRectangle} alt="arr" />
              </div>
            </div>
            <img src={card} className="card" alt="card" />
          </div>

          <div className="divider-design">
            <img src={divider} alt="divider" />
          </div>

          <div className="carouselAndViewbutton">
                <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}

                className="nudgeSwiper">
                  {props.nudges.map((data, index) => (
                    <SwiperSlide key={index}>
                      <NudgeCard data={data} />
                    </SwiperSlide>
                  ))}
                </Swiper>

          </div>


          </div>

            <div className="view-all-container" onClick={() => props.click()}>
              <div className="view-all-button">
                <div className="view-text">view</div>

                <div className="all-text">all</div>

                <div className="arrowRectangleWhite">
                  <img src={arrowRectangleWhite} alt="arr" />
                </div>
              </div>
            </div>
          </div>
        <div className="divider-container">
          <div className="divider"></div>
        </div>
    </>
  );
};

export default homeHeroSection;
