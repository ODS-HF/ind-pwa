import React from "react";
import "./carouselItem.css";
import cardCarousel from "../../assets/images/login/card-carousel.svg";
import shop from "../../assets/images/login/shop.svg";
import offers from "../../assets/images/login/offer-cards.svg";
import nudges from "../../assets/images/login/nudges.svg";

export const CarouselItem1 = () => {
  return (
    <div className="carousel-body-1">
      <div className="carousel-1-top-section">
        <img src={cardCarousel} className="carousel-item-1" />
      </div>
      <div className="carousel-1-text-section">
        <div className="carousel-text-2">
          <span className="carousel-text-1">Welcome</span> to a card that puts{" "}
          <span className="carousel-text-3">YOU</span> first
        </div>
      </div>
    </div>
  );
};

export const CarouselItem2 = () => {
  return (
    <div className="carousel-body-1" style={{ height: "90vh" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 375 812"
        fill="none"
      >
        <path
          d="M705 284.813L696.442 232.714L192.057 354.803L651.298 98.9172L626.752 53.1018L191.492 353.739L541.825 -55.9626L504.205 -90.0197L190.646 352.978L389.795 -161.175L343.617 -179.268L189.564 352.573L213.547 -204H164.453L188.436 352.573L34.3363 -179.268L-11.7945 -161.175L187.354 352.978L-126.206 -90.0197L-163.825 -55.9626L186.508 353.739L-248.704 53.1018L-273.298 98.9172L185.943 354.803L-318.441 232.714L-327 284.813L185.708 356.019L-327 427.225L-318.441 479.324L185.943 357.235L-273.298 613.121L-248.704 658.936L186.508 358.299L-163.825 768.001L-126.206 802.007L187.354 359.06L-11.7945 873.213L34.3363 891.306L188.436 359.466L164.453 916.038H213.547L189.564 359.466L343.617 891.306L389.795 873.213L190.646 359.06L504.205 802.007L541.825 768.001L191.492 358.299L626.752 658.936L651.298 613.121L192.057 357.235L696.442 479.324L705 427.225L192.292 356.019L705 284.813Z"
          fill="url(#paint0_linear_77_3791)"
          fill-opacity="0.03"
        />
        <defs>
          <linearGradient
            id="paint0_linear_77_3791"
            x1="189"
            y1="-204"
            x2="189"
            y2="916.038"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E0BD7E" />
            <stop offset="1" stop-color="#E0BD7E" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="sunrays-overlay">
        <div className="sunrays-hero-image">
          <img width={"85%"} src={shop} />
        </div>
        <div className="sunrays-text-section">
          <div className="sunrays-text-section-internal">
            <div className="carousel-text-2">
              <span className="carousel-text-1">Discover</span> benefits waiting
              for you
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CarouselItem3 = () => {
  return (
    <div className="carousel-body-1">
      <div className="carousel-1-top-section">
        <img src={offers} className="carousel-item-2" />
      </div>
      <div className="carousel-text-section">
        <div className="carousel-text-2">
          <span className="carousel-text-1">Explore</span> a world of exclusive
          offers
        </div>
      </div>
    </div>
  );
};

export const CarouselItem4 = () => {
  return (
    <div className="carousel-body-1">
      <div className="carousel-2-top-section">
        <img src={nudges} className="carousel-item-3" />
      </div>
      <div className="carousel-3-text-section">
        <div className="carousel-text-2">
          <span className="carousel-text-1">Manage</span> your card like never
          before
        </div>
      </div>
    </div>
  );
};
