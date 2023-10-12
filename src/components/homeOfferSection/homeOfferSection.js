import React from "react";
import "./homeOfferSection.css";
import offerSectionbottomBg from "../../assets/images/home/offerSectionbottomBg.svg";
import offerSectionbottomExtraCardImg from "../../assets/images/home/offerSectionbottomExtraCardImg.svg";
import offerSectionbottomExtraCardBg from "../../assets/images/home/offerSectionbottomExtraCardBg.svg";
import btnImg from "../../assets/images/nudgecard/blackArrow.svg";
import PromotionalCard from "../promotionalCard/promotionalCard";

const HomeOfferSection = () => {
  return (
    <div className="home-offer-section-main-continer">
      <div className="home-offer-section-continer-1"> 1</div>
      <div className="home-offer-section-continer-2"> 2</div>
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
          <div>
            <PromotionalCard />
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
              <div className="home-offer-section-contine-3-bottom-internal-action">
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
