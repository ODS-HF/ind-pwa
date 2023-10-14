import "./offerCard.css";
import OfferCardBg from "../../assets/images/offerCard/OfferCardbg.svg";
import OfferCardImg from "../../assets/images/offerCard/offerCardImg.svg";
import arrow from "../../assets/images/nudgecard/blackArrow.svg";
import cardBottomBg from "../../assets/images/offerCard/cardBottomBg.svg";

const OfferCard = (props) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="offercard-wrapper"
        // style={{
        //   transform:
        //     props.index === props.nextSlide
        //       ? "skewY(30deg)"
        //       : props.index === props.prevSlide
        //       ? "skewY(-30deg)"
        //       : "skew(0)",
        //   opacity: props.index !== props.currentSlide ? "30%" : "100%",
        //   marginTop: props.index !== props.currentSlide ? "30px" : "-30px",
        // }}
        onClick={() => console.log(props.index)}
      >
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
      {/* <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={cardBottomBg} />
      </div> */}
    </div>
  );
};

export default OfferCard;
