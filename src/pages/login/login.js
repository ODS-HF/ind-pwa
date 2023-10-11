import React from "react";
import "./login.css";
import arrow from "../../assets/images/login/btn-arrow.svg";
import Swiper from "../../components/swiper/swiper";
import NudgeCard from "../../components/nudgeCard/nudgeCard";
import CampaignCard from "../../components/campaignCard/CampaignCard";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="secondary-wrapper">
        <div className="login-top-container">
          <NudgeCard />
          <CampaignCard />
          <div className="login-carousel">
            <Swiper />
          </div>
          <div className="login-button">
            <button className="login-button-item" role="button">
              Get Started
              <img src={arrow} className="login-button-item-arrow" />
            </button>
          </div>
          {/* <div className="login-popup"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
