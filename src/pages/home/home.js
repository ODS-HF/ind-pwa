import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/header/header";
import HomeHeroSection from "../../components/homeHeroSection/homeHeroSection";
import LoginPopup from "../../components/loginPopup/loginPopup";
import OtpComponent from "../../components/otpComponent/otpComponent";
  
import HomeFooterSection from "../../components/homeFooterSection/homeFooterSection";
import Loader from "../../components/loader/loader";
import MainService from "../../services/MainService";
import HomeOfferSection from "../../components/homeOfferSection/homeOfferSection";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const [nudgeResponse, setNudgeResponse] = useState(["", "", "", "", ""]);
  const [campaignBenefitResponse, setCampaignBenefitResponse] = useState([
    "",
    "",
    "",
  ]);
  const [offersBenefitResponse, setOffersBenefitResponse] = useState([
    "",
    "",
    "",
    "",
  ]);
  const [promotionBenefitResponse, setpPomotionBenefitResponse] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [loading, setLoading] = useState(true);

  const notify = (msg) =>
    toast.error(msg || "Sorry for the inconvenience", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      theme: "dark",
    });
  const notifyComingSoon = (msg) =>
    toast("Coming Soon!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      theme: "dark",
    });

  console.log(nudgeResponse, "nudgeResponse");
  console.log(campaignBenefitResponse, "campaignBenefitResponse");
  console.log(offersBenefitResponse, "offersBenefitResponse");
  console.log(promotionBenefitResponse, "promotionBenefitResponse");

  useEffect(() => {
    if (!localStorage.getItem("accountId") && !localStorage.getItem("token")) {
      navigate("/login");
      return;
    }
    (async () => {
      try {
        // setTimeout(() => {
        //   setLoading(false);
        // }, [2000]);
        console.log(localStorage.getItem("token"));
        const nudgeRequest = MainService.fetchNudges(
          localStorage.getItem("accountId"),
          localStorage.getItem("token")
        );
        const campaignBenefitRequest = MainService.fetchBenefits(
          {
            accountId: localStorage.getItem("accountId"),
            offerType: "CAMPAIGN_OFFERS",
            order: "ASC",
            preferredTagsSort: true,
            programId: localStorage.getItem("programId"),
            sortBy: "activeTo",
            status: "ACTIVE",
          },
          localStorage.getItem("token")
        );
        const promotionBenefitRequest = MainService.fetchBenefits(
          {
            accountId: localStorage.getItem("accountId"),
            offerType: "MERCHANT_OFFERS",
            order: "ASC",
            preferredTagsSort: true,
            programId: localStorage.getItem("programId"),
            sortBy: "activeTo",
            status: "ACTIVE",
          },
          localStorage.getItem("token")
        );
        const offersBenefitRequest = MainService.fetchBenefits(
          {
            accountId: localStorage.getItem("accountId"),
            offerType: "PROGRAM_OFFERS",
            order: "ASC",
            preferredTagsSort: true,
            programId: localStorage.getItem("programId"),
            sortBy: "activeTo",
            status: "ACTIVE",
          },
          localStorage.getItem("token")
        );
        const promises = [
          nudgeRequest,
          campaignBenefitRequest,
          offersBenefitRequest,
          promotionBenefitRequest,
        ];
        const responses = await Promise.allSettled(promises);
        const nudgeResponse = responses[0].value;
        const campaignBenefitResponse = responses[1].value;
        const offersBenefitResponse = responses[2].value;
        const promotionBenefitResponse = responses[3].value;
        if (
          nudgeResponse.status === 200 &&
          campaignBenefitResponse.status === 200 &&
          offersBenefitResponse.status === 200 &&
          promotionBenefitResponse.status === 200
        ) {
          setCampaignBenefitResponse(campaignBenefitResponse.data);
          setNudgeResponse(nudgeResponse.data);
          setOffersBenefitResponse(offersBenefitResponse.data);
          setpPomotionBenefitResponse(promotionBenefitResponse.data);
          setTimeout(() => {
            setLoading(false);
          }, [2000]);
        } else {
          console.log(nudgeResponse.data);
          nudgeResponse.status
            ? notify("Sorry your session has expired login again")
            : notify(
                "Sorry something unexpected occured please try again later"
              );
          setLoading(false);
          navigate("/login");
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
        navigate("/login");
      }
    })();
  }, []);
  return (
    <div className="wrapper">
      <div className="secondary-wrapper">
        <div className="home-top-container">
          {loading ? (
            <Loader />
          ) : (
            <>
              <Header />
              <HomeHeroSection
                click={notifyComingSoon}
                nudges={nudgeResponse}
              />
              <HomeOfferSection
                click={notifyComingSoon}
                campaignBenefits={campaignBenefitResponse}
                promotionBenefits={promotionBenefitResponse}
                offersBenefits={offersBenefitResponse}
              />
              <HomeFooterSection click={notifyComingSoon} />
            </>
          )}
          <div style={{ width: "90%" }}>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
