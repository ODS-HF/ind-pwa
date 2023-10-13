import React from "react";
import "./promotionalCard.css";
import campaignCardBackground from "../../assets/images/campaigncard/CampaignCardBg.svg";
import banner from "../../assets/images/promotionalCard/banner1.png";
import logo from "../../assets/images/promotionalCard/logo1.png";
import bg from "../../assets/images/promotionalCard/bg.svg";
import arrow from "../../assets/images/nudgecard/blackArrow.svg";

const PromotionalCard = (props) => {
  return (
    <div className="promotional-main-container">
      <div
        className="promotional-main-container-internal"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundColor: props?.data?.displayColor || "#333",
        }}
      >
        <div className="promotional-img-section">
          <img
            src={props?.data?.illustrationUrl || banner}
            className="promotional-img-banner"
          />
          <img
            src={props?.data?.logoUrl || logo}
            className="promotional-img-logo"
          />
        </div>
        <div className="promotional-text-section">
          <div className="promotional-text-title">
            {props?.data?.displayTitle || "Flat 21% off + ₹1000 Cashback"}
          </div>
          <div className="promotional-text-desc">
            {props?.data?.displayDescription ||
              "on all car bookings from Zoom Car"}
          </div>
        </div>
        <div className="promotional-action-section">
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default PromotionalCard;
