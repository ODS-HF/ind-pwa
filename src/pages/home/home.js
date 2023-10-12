import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/header/header";
import HomeHeroSection from "../../components/homeHeroSection/homeHeroSection";
import HomeFooterSection from "../../components/homeFooterSection/homeFooterSection";
import Loader from "../../components/loader/loader";
import MainService from "../../services/MainService";
import HomeOfferSection from "../../components/homeOfferSection/homeOfferSection";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

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

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem("accountId") && !localStorage.getItem("token")) {
      navigate("/login");
      return;
    }
    (async () => {
      try {
        console.log(localStorage.getItem("token"));
        const nudgeResponse = await MainService.fetchNudges(
          localStorage.getItem("accountId"),
          localStorage.getItem("token")
        );
        if (nudgeResponse.status === 200) {
          console.log(nudgeResponse.data);

          setLoading(false);
        } else {
          console.log(nudgeResponse.data);
          nudgeResponse.status
            ? notify("Sorry your session has expired login again")
            : notify(
                "Sorry something unexpected occured please try again later"
              );
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
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
              <HomeHeroSection click={notifyComingSoon} />
              <HomeOfferSection />
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
