import React from "react";
import "./promotionalCard.css";
import campaignCardBackground from "../../assets/images/campaigncard/CampaignCardBg.svg";
import banner from "../../assets/images/promotionalCard/banner1.png";
import logo from "../../assets/images/promotionalCard/logo1.png";
import bg from "../../assets/images/promotionalCard/bg.svg";

const PromotionalCard = () => {
  return (
    <div className="promotional-main-container">
      <div
        className="promotional-main-container-internal"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="promotional-img-section">
          <img src={banner} className="promotional-img-banner" />
          <img src={logo} className="promotional-img-logo" />
        </div>
        <div className="promotional-text-section">
          <div className="promotional-text-title"></div>
          <div className="promotional-text-desc"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PromotionalCard;
