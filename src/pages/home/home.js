import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import HomeHeroSection from "../../components/homeHeroSection/homeHeroSection";

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
