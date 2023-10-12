import React, { useState } from "react";
import "./login.css";
import arrow from "../../assets/images/login/btn-arrow.svg";
import Swiper from "../../components/swiper/swiper";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/loader/loader";
import MainService from "../../services/MainService";
import { useNavigate } from "react-router-dom";
import { verify } from "../../services/verifyOtp";
import LoginPopup from "../../components/loginPopup/loginPopup";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [loginVisiblity,setLoginVisiblity] = useState(true);
  const toggleLoginVisiblity = () => {
    setLoginVisiblity(!loginVisiblity);
  }
  const loginPopupStyle = {
    visibility: loginVisiblity ? 'visible' : 'hidden',
  };
  
  const handleLogin = async () => {
    setLoading(true);
    const generateOtpResponse = await MainService.generateOTP({
      cardLastFour: "9930",
      mobileCountryCode: "91",
      mobileNumber: "9823072174",
    });
    if (generateOtpResponse.status === 200) {
      console.log(generateOtpResponse?.data);
      notify("success");
      const verifyOtpResponse = await MainService.verifyOTP({
        mobileVerificationRefId:
          generateOtpResponse?.data?.mobileVerificationRefId,
        otp: "012345",
      });
      console.log(verifyOtpResponse.status);
      if (verifyOtpResponse.status === 200) {
        localStorage.setItem("token", verifyOtpResponse?.data?.token);
        localStorage.setItem("programId", verifyOtpResponse?.data?.programId);
        localStorage.setItem("customerId", verifyOtpResponse?.data?.customerId);
        localStorage.setItem("accountId", verifyOtpResponse?.data?.accountId);
        navigate("/");
      } else {
        notify();
        setLoading(false);
      }
    } else {
      notify();
    }
  };
  const notify = (type) =>
    type === "success"
      ? toast.success("OTP has been sent to your registered mobile number", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      : toast.error("Something went wrong while generating OTP", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
  return (
    <div className="wrapper">
      <div className="secondary-wrapper">
        <div className="login-top-container">
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="login-carousel">
                <Swiper />
              </div>
              <div
                className="login-button"
                onClick={() => {
                  toggleLoginVisiblity();
                }}
              >
                <button className="login-button-item" role="button">
                  Get Started
                  <img src={arrow} className="login-button-item-arrow" />
                </button>
              </div>

              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </>
          )}
          
          <div className="login-popup" style={loginPopupStyle}>
            <LoginPopup/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
