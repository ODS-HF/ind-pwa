import "./offerCard.css";
import OfferCardBg from "../../assets/images/offerCard/OfferCardbg.svg";
import OfferCardImg from "../../assets/images/offerCard/offerCardImg.svg";
import arrow from "../../assets/images/nudgecard/blackArrow.svg";

const OfferCard = (props) => {
  return (
    <div className="offercard-wrapper">
      <div
        className="offerCard-top-container"
        style={{
          backgroundImage: `url(${OfferCardBg})`,
          backgroundColor: props?.data?.displayColor || "#363062",
        }}
      >
        <div className="offerCard-content">
          <p>
            {props?.data?.displayTitle ||
              "1.8% fee waiver on all foreign currency transactions"}
          </p>
        </div>
        <div className="offerCard-Img">
          <div className="offer-card-action-section">
            <img src={arrow} />
          </div>
          <img
            src={props?.data?.illustrationUrl || OfferCardImg}
            height={"80px"}
            width={"80px"}
          />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
