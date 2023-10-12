import React from "react";
import footerBg from "../../assets/images/home/footerBg.svg";
import "./homeFooterSection.css";
import games from "../../assets/images/home/footerGames.svg";
import food from "../../assets/images/home/footerFood.svg";
import life from "../../assets/images/home/footerLifeStyle.svg";
import music from "../../assets/images/home/footerMusic.svg";
import travel from "../../assets/images/home/footerTravel.svg";
import footerLogo from "../../assets/images/home/footerLogo.svg";
import arrowRectangleWhite from "../../assets/images/homeHeroSection/arrowRectangleWhite.svg";

const HomeFooterSection = () => {
  return (
    <div className="home-footer-main-container">
      <div className="home-footer-top-section">
        {/* <div className="home-footer-bg">
          <img src={footerBg} />
        </div>  */}
        <div
          className="home-footer-top-section"
          style={{ backgroundImage: `url(${footerBg})` }}
        >
          <div className="home-footer-top-categories">
            <div className="home-footer-top-category-item">
              <img src={travel} />
            </div>
            <div className="home-footer-top-category-item">
              <img src={music} />
            </div>
            <div className="home-footer-top-category-item">
              <img src={games} />
            </div>
            <div className="home-footer-top-category-item">
              <img src={life} />
            </div>
            <div className="home-footer-top-category-item">
              <img src={food} />
            </div>
          </div>
          <div className="home-footer-top-action">
            <div className="view-all-container">
              <div className="view-all-button">
                <div className="view-text">all</div>

                <div className="all-text">offers</div>

                <div className="arrowRectangleWhite">
                  <img src={arrowRectangleWhite} alt="arr" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer-bottom-section">
          <div className="home-footer-bottom-desc">Powered by</div>
          <div className="home-footer-bottom-desc">
            <img src={footerLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooterSection;
