import React from "react";
import "./loginPopup.css";
import cardTiny from "../../assets/images/home/cardGrad.svg";
import arrowRectangle from "../../assets/images/homeHeroSection/arrowRectangle.svg";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { useSpring, animated } from "react-spring";
import anim from "../../assets/images/loader/spinner2.json";

const LoginPopup = (props) => {
  const handleMobileNumberChange = (e) => {
    if (
      (e.target.value.length <= 10 && Number(e.target.value)) ||
      e.target.value === ""
    )
      props.setMobileNumber(e.target.value);
  };

  const handleLastFourDigit = (e) => {
    if (
      (e.target.value.length <= 4 && Number(e.target.value)) ||
      e.target.value === ""
    )
      props.setLastFourDigit(e.target.value);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anim,
    height: "20px",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const openOptions = useSpring({
    display: "flex",
    padding: "0px 16px 24px 16px",
    flexDirection: "column",
    gap: "32px",

    position: "absolute",
    bottom: props.show ? -0 : -360,
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "24px",
    borderTop: "1px solid #9a9a9a",
    background: "#141414",
  });
  console.log(window.innerHeight);
  return (
    <animated.div style={openOptions}>
      {/* <div className="loginModal" > */}
      <div className="loginFrame">
        <div className="dividerLine">
          <svg
            width="27"
            height="2"
            viewBox="0 0 27 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1L25.5 1"
              stroke="#989898"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="loginContainer">
          <div className="loginContainer-topRegion">
            <div className="loginText">enter your details</div>
          </div>

          <div className="loginContainer-bodyRegion">
            <div className="mobileNumber-region">
              <div className="mobileNumber-text">
                Enter your registered mobile number
              </div>

              <div className="mobileNumber-inputField-container">
                <label htmlFor="mobileNumber" className="mobileCodeLabel">
                  +91
                </label>

                <input
                  type="text"
                  className="mobileNumber-inputField"
                  id="mobileNumber"
                  value={props.mobileNumber}
                  name="mobileNumber"
                  onChange={(e) => handleMobileNumberChange(e)}
                  placeholder="9452145678"
                />
              </div>
            </div>

            <div className="creditcard-region">
              <div className="creditcard-text">
                Enter last 4 digits of your credit card
              </div>

              <div className="creditcard-inputField-container">
                <label htmlFor="creditcard" className="creditcardLabel">
                  <img src={cardTiny} alt="cardTiny" />
                </label>

                <input
                  type="text"
                  className="creditcard-inputField"
                  id="creditcard"
                  name="creditcard"
                  value={props.lastFourDigit}
                  onChange={(e) => handleLastFourDigit(e)}
                  placeholder="Type here"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="loginCTA"
        onClick={() => (props.loading ? null : props.otpGenerate())}
        style={{
          background:
            props.mobileNumber.length === 10 &&
            props.lastFourDigit.length === 4 &&
            !props.loading
              ? "#FFF"
              : "rgb(255 255 255 / 50%)",
        }}
      >
        <div className="loginCTA-button">
          <div className="loginCTA-text">confirm</div>

          <div className="loginCTA-arrow">
            <img src={arrowRectangle} alt="arrowRectangle" />
          </div>
        </div>
        {props.loading && (
          <div style={{ height: "24px", position: "absolute", right: "24px" }}>
            <Lottie options={defaultOptions} width={"24px"} />
          </div>
        )}
      </div>
      {/* </div> */}
    </animated.div>
  );
};

export default LoginPopup;
