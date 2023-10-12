import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import HomeHeroSection from "../../components/homeHeroSection/homeHeroSection";
import LoginPopup from "../../components/loginPopup/loginPopup";
import OtpComponent from "../../components/otpComponent/otpComponent"

const Home = () => {
  return (
    <div className="wrapper">
      <div className="secondary-wrapper">
        <div className="home-top-container">
          <Header />
          <HomeHeroSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
