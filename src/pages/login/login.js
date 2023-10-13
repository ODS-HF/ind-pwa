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
import OtpComponent from "../../components/otpComponent/otpComponent";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [mobileVerificationRefId, setMobileVerificationRefId] = useState("");
  const [lastFourDigit, setLastFourDigit] = useState("");
  const [loginVisiblity, setLoginVisiblity] = useState(false);
  const [otpComponentShow, setOtpComponentShow] = useState(false);
  const toggleLoginVisiblity = () => {
    setLoginVisiblity(!loginVisiblity);
  };
  const loginPopupStyle = {
    visibility: loginVisiblity ? "visible" : "hidden",
  };
  const otpGenerate = async () => {
    if (!loading) {
      console.log("adda");
      setLoading(true);
      const generateOtpResponse = await MainService.generateOTP({
        cardLastFour: lastFourDigit,
        mobileCountryCode: "91",
        mobileNumber: mobileNumber,
      });
      if (generateOtpResponse.status === 200) {
        console.log(generateOtpResponse?.data);
        notify("success");
        setMobileVerificationRefId(
          generateOtpResponse?.data?.mobileVerificationRefId
        );
        setLoginVisiblity(false);
        setOtpComponentShow(true);
      } else {
        notify(
          "",
          "Please verify if your mobile number and card details are correct"
        );
      }
    }
    setLoading(false);
  };
  const verify = async () => {
    console.log(otp);
    if (!loading) {
      setLoading(true);
      const verifyOtpResponse = await MainService.verifyOTP({
        mobileVerificationRefId: mobileVerificationRefId,
        otp: otp,
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
    }
    setLoading(false);
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
  const notify = (type, msg) =>
    type === "success"
      ? toast.success(
          msg || "OTP has been sent to your registered mobile number",
          {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        )
      : toast.error(msg || "Something went wrong while generating OTP", {
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
          <>
            <div
              className="login-carousel"
              onClick={() => {
                setLoginVisiblity(false);
                setOtpComponentShow(false);
              }}
            >
              <Swiper />
            </div>
            <div
              className="login-button"
              onClick={() => {
                mobileVerificationRefId
                  ? setOtpComponentShow(true)
                  : toggleLoginVisiblity();
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

          <div className="login-popup" style={loginPopupStyle}>
            <LoginPopup
              setMobileNumber={setMobileNumber}
              setLastFourDigit={setLastFourDigit}
              lastFourDigit={lastFourDigit}
              mobileNumber={mobileNumber}
              otpGenerate={otpGenerate}
              loading={loading}
            />
          </div>
          {otpComponentShow && (
            <div className="login-popup">
              <OtpComponent
                verify={verify}
                mobileNumber={mobileNumber}
                otp={otp}
                setOtp={setOtp}
                loading={loading}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
