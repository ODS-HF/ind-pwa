import React from "react";
import "../../components/homeHeroSection/homeHeroSection.css";
import arrowCircle from "../../assets/images/homeHeroSection/ArrowCircleUpRight.svg";
import card from "../../assets/images/homeHeroSection/Rectangle.svg";
import arrowRectangle from "../../assets/images/homeHeroSection/arrowRectangle.svg";
import divider from "../../assets/images/homeHeroSection/Divider.svg";
import arrowRectangleWhite from "../../assets/images/homeHeroSection/arrowRectangleWhite.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NudgeCard from "../nudgeCard/nudgeCard";

const homeHeroSection = (props) => {
  const data = {
    rewardPoint: 12381,
  };
  const settings = {
    dots: false,
    infinite: false,
    fade: false,
    speed: 500,
    slidesToShow: 1.25,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: false,
    className: "swiper",
    // beforeChange: (o, n) => {
    //   setCurrentSlide(n);
    // },
  };

  return (
    <>
      <div className="heroSection">
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
            <div>
              <div style={{ marginLeft: "0px" }}>
                <Slider {...settings}>
                  {["", "", ""].map((item, index) => (
                    <div>
                      <NudgeCard />
                    </div>
                  ))}
                </Slider>
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
        </div>
        <div className="divider-container">
          <div className="divider"></div>
        </div>
      </div>
    </>
  );
};

export default homeHeroSection;
