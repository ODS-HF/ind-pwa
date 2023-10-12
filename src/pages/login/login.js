import React from "react";
import "./login.css";
import arrow from "../../assets/images/login/btn-arrow.svg";
import Swiper from "../../components/swiper/swiper";

import NudgeCard from "../../components/nudgeCard/nudgeCard";
import CampaignCard from "../../components/campaignCard/CampaignCard";
import OfferCard from "../../components/offerCard/offerCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="wrapper">
      <div className="secondary-wrapper">
        <div className="login-top-container">
          <div className="login-carousel">
            <Swiper />
          </div>
          <div className="login-button" onClick={() => notify()}>
            <button className="login-button-item" role="button">
              Get Started
              <img src={arrow} className="login-button-item-arrow" />
            </button>
          </div>

          <ToastContainer />
          {/* <div className="login-popup"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
