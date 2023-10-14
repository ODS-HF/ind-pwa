import React, { useState } from "react";
import "./otpComponent.css";
import OtpInput from "react-otp-input";
import arrowRectangle from "../../assets/images/homeHeroSection/arrowRectangle.svg";
import Lottie from "react-lottie";
import anim from "../../assets/images/loader/spinner2.json";
import { useSpring, animated } from "react-spring";

const OtpComponent = (props) => {
  const mobileNumber = "9988776655";
  const maskedMobileNumber =
    "*".repeat(5) + "  " + "*".repeat(2) + props.mobileNumber.substring(7);
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
    bottom: props.show ? 396 : 0,
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "24px",
    borderTop: "1px solid #9a9a9a",
    background: "#141414",
  });
  return (
    <animated.div style={openOptions}>
      {/* <div className="otpModal"> */}
      <div className="otpFrame">
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

        <div className="otpContainer-topRegion">
          <div className="otpText">verify with OTP</div>

          <div className="otpDescription">
            Please enter the 4 digit code sent to +91 &nbsp;
            <span className="mobileSecureDisplay">{maskedMobileNumber}</span>
          </div>
        </div>

        <div className="otpContainer-bodyRegion">
          <div className="otp-inputField">
            <OtpInput
              value={props.otp}
              onChange={props.setOtp}
              numInputs={6}
              renderSeparator={<span></span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>

          <div className="otp-inputField-description">
            <div className="otp-inputField-description-text1">
              Didn’t recieve a code?
            </div>
            <div className="otp-inputField-description-text2">Resend SMS</div>
          </div>
        </div>

        <div className="otpContainer-footerRegion">
          By entering OTP and proceeding, I agree to the <br />
          <span className="underline">Terms of Use</span>
          &nbsp; and &nbsp;
          <span className="underline">Privacy Policy</span>
          associated with IndusInd <br />
          Bank Credit Card setup
        </div>
      </div>

      <div
        className="CTA-frame"
        onClick={() => (props.loading ? null : props.verify())}
        style={{
          background:
            props.otp.length === 6 && !props.loading
              ? "#FFF"
              : "rgb(255 255 255 / 50%)",
        }}
      >
        <div className="CTA-text">confirm</div>
        <div className="CTA-arrow">
          <img src={arrowRectangle} alt="arrow" />
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

export default OtpComponent;
