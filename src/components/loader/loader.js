import React from "react";
import "./loader.css";
import Lottie from "react-lottie";
import anim from "../../assets/images/loader/loader1.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loader-main-contaner">
      <div>
        <Lottie options={defaultOptions} width={"100%"} />
      </div>
    </div>
  );
};

export default Loader;
