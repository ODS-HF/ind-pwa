import "./offerCard.css";
import OfferCardBg from "../../assets/images/offerCard/OfferCardbg.svg";
import OfferCardImg from "../../assets/images/offerCard/offerCardImg.svg";

const OfferCard = () => {
  return (
    <div className="offercard-wrapper">
      <div
        className="offerCard-top-container"
        style={{
          backgroundImage: `url(${OfferCardBg})`,
          backgroundColor: "#363062",
        }}
      >
        <div className="offerCard-content">
          <p>1.8% fee waiver on all foreign currency transactions</p>
        </div>
        <div className="offerCard-Img">
          <img src={OfferCardImg} />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
