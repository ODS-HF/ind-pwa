import React from "react";
import "./homeOfferSection.css";
import offerSectionbottomBg from "../../assets/images/home/offerSectionbottomBg.svg";
import offerSectionbottomExtraCardImg from "../../assets/images/home/offerSectionbottomExtraCardImg.svg";
import offerSectionbottomExtraCardBg from "../../assets/images/home/offerSectionbottomExtraCardBg.svg";
import btnImg from "../../assets/images/nudgecard/blackArrow.svg";
import PromotionalCard from "../promotionalCard/promotionalCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrowRectangleWhite from "../../assets/images/homeHeroSection/arrowRectangleWhite.svg";
import arrowBlack from "../../assets/images/homeHeroSection/arrowBlack.svg";
import cardBottomBg from "../../assets/images/offerCard/cardBottomBg.svg";
import CampaignCard from "../campaignCard/CampaignCard";
import OfferCard from "../offerCard/offerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const HomeOfferSection = (props) => {
  const promotionCardSettings = {
    dots: false,
    infinite: false,
    fade: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
    // beforeChange: (o, n) => {
    //   setCurrentSlide(n);
    // },
  };
  const campaignCardSettings = {
    dots: false,
    infinite: false,
    fade: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2.15,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1.95,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
    ],
    // beforeChange: (o, n) => {
    //   setCurrentSlide(n);
    // },
  };
  const offerCardSettings = {
    dots: false,
    infinite: true,
    fade: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    lazyLoad: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
    // className: "swiper",
    // autoplay: true,
    // autoplaySpeed: 2000,
    // beforeChange: (o, n) => {
    //   setCurrentSlide(n);
    // },
  };
  return (
    <div className="home-offer-section-main-continer">
      <div className="home-offer-section-continer-1">
        <div className="home-offer-section-contine-3-header">
          <div
            className="home-offer-section-contine-3-header-top"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            exclusive benefits{" "}
            <span
              style={{
                marginLeft: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="21"
                viewBox="0 0 13 21"
                fill="none"
              >
                <path
                  d="M6.3602 0L12.7207 10.1072L6.3602 20.2143L-0.000294685 10.1072L6.3602 0ZM0.640873 9.88203H2.33359L6.3602 3.48336L10.3868 9.88203H12.0795L6.3602 0.794144L0.640873 9.88203ZM12.0795 10.3323H10.3868L6.3602 16.7309L2.33359 10.3323H0.640873L6.3602 19.4202L12.0795 10.3323Z"
                  fill="#C69930"
                />
              </svg>
            </span>
          </div>
          <div className="home-offer-section-contine-3-header-bottom">
            on your card
          </div>
        </div>
        <div className="home-offer-section-contine-3-body">
          <div style={{ marginLeft: "24px" }}>
            <Slider {...campaignCardSettings}>
              {props.campaignBenefits.map((item, index) => (
                <div style={{ marginLeft: index === 0 ? "24px" : "0px" }}>
                  <CampaignCard data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="home-offer-section-continer-1-bottom">
          <div className="view-all-container" onClick={() => props.click()}>
            <div className="view-all-button">
              <div className="view-text">all</div>

              <div className="all-text">exclusive</div>

              <div className="arrowRectangleWhite">
                <img src={arrowRectangleWhite} alt="arr" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-offer-section-continer-2">
        <div className="home-offer-section-contine-3-header">
          <div
            className="home-offer-section-contine-3-header-top"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            aura edge benefits{" "}
            <span
              style={{
                marginLeft: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
              >
                <path
                  d="M11.5847 0.5H3.57096L0.00292969 4.54424L7.57753 13.517L15.1521 4.54424L11.5847 0.5ZM11.0619 4.70766L7.53234 12.6041L4.00277 4.70766H11.0619ZM4.27945 4.31661L7.4847 1.1683L10.8683 4.31661H4.27945ZM11.1676 4.04871L7.77481 0.891639H11.1676V4.04871ZM3.89711 4.131V0.891639H7.1952L3.89711 4.131ZM3.4873 4.31661H0.740117L3.4873 1.20274V4.31661ZM3.55692 4.70766L6.80797 11.9813L0.668052 4.70766H3.55692ZM11.5071 4.70766H14.4876L8.15347 12.2113L11.5071 4.70766ZM14.4156 4.31661H11.5768V1.09826L14.4156 4.31661Z"
                  fill="#F2AC39"
                />
              </svg>
            </span>
          </div>
          <div className="home-offer-section-contine-3-header-bottom">
            for you
          </div>
        </div>
        <div className="home-offer-section-contine-3-body">
          <div
            style={{
              marginLeft: "24px",
              // backgroundImage: `url(${cardBottomBg})`,
            }}
          >
            <Slider {...offerCardSettings}>
              {props.offersBenefits.map((item, index) => (
                <div style={{ marginLeft: index === 0 ? "24px" : "0px" }}>
                  <OfferCard data={item} />
                </div>
              ))}
            </Slider>
            <div>
              <img src={cardBottomBg} />
            </div>
          </div>
        </div>
        <div className="home-offer-section-continer-1-bottom">
          <div className="view-all-container" onClick={() => props.click()}>
            <div className="view-all-button-white">
              <div className="view-text-black">all</div>

              <div className="all-text-black">benefits</div>

              <div className="arrowRectangleWhite">
                <img src={arrowBlack} alt="arr" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="home-offer-section-continer-3"
        style={{ backgroundImage: `url(${offerSectionbottomBg})` }}
      >
        <div className="home-offer-section-contine-3-header">
          <div className="home-offer-section-contine-3-header-top">
            offers{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <rect x="9.18457" width="0.633333" height="19" fill="#C69930" />
              <rect
                x="19"
                y="9.18457"
                width="0.633333"
                height="19"
                transform="rotate(90 19 9.18457)"
                fill="#C69930"
              />
              <rect
                x="0.553549"
                y="6.29004"
                width="0.633333"
                height="19"
                transform="rotate(-68.3739 0.553549 6.29004)"
                fill="#C69930"
              />
              <rect
                width="0.633333"
                height="19"
                transform="matrix(-0.368549 -0.929608 -0.929608 0.368549 18.4495 6.29004)"
                fill="#C69930"
              />
              <rect
                x="16.4425"
                y="15.9941"
                width="0.633333"
                height="19"
                transform="rotate(135 16.4425 15.9941)"
                fill="#C69930"
              />
              <rect
                width="0.633333"
                height="19"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.56055 15.9941)"
                fill="#C69930"
              />
              <rect
                width="0.633333"
                height="19"
                transform="matrix(0.906308 0.422618 0.422618 -0.906308 5.2015 17.9795)"
                fill="#C69930"
              />
              <rect
                x="13.8047"
                y="17.9795"
                width="0.633333"
                height="19"
                transform="rotate(155 13.8047 17.9795)"
                fill="#C69930"
              />
              <circle cx="9.5" cy="9.5" r="4.5" fill="#C69930" />
            </svg>
          </div>
          <div className="home-offer-section-contine-3-header-bottom">
            curated for you
          </div>
        </div>
        <div className="home-offer-section-contine-3-body">
          <div style={{ marginLeft: "24px" }}>
            <Slider {...promotionCardSettings}>
              {props.promotionBenefits.map((item, index) => (
                <div style={{ marginLeft: index === 0 ? "24px" : "0px" }}>
                  <PromotionalCard data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="home-offer-section-contine-3-bottom">
          <div className="home-offer-section-contine-3-bottom-external">
            <div
              className="home-offer-section-contine-3-bottom-internal"
              // style={{ backgroundImage: `url(${offerSectionbottomExtraCardBg})` }}
            >
              <div className="home-offer-section-contine-3-bottom-internal-img">
                <img src={offerSectionbottomExtraCardImg} />
              </div>
              <div className="home-offer-section-contine-3-bottom-internal-body">
                <div className="home-offer-section-contine-3-bottom-internal-body-text-1">
                  Get the best out of offers
                </div>
                <div className="home-offer-section-contine-3-bottom-internal-body-text-2">
                  Provide preferences for offers{" "}
                </div>
              </div>
              <div
                className="home-offer-section-contine-3-bottom-internal-action"
                onClick={() => props.click()}
              >
                <img src={btnImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOfferSection;
