import "./campaignCard.css";
import campaignCardBackground from "../../assets/images/campaigncard/CampaignCardBg.svg";
import Progressbar from "../../assets/images/campaigncard/progressbar.png";

const CampaignCard = () => {
  return (
    <div className="campaigncard-wrapper">
      <div
        className="campaignCard-top-container"
        style={{
          backgroundImage: `url(${campaignCardBackground})`,
          backgroundColor: "#363062",
        }}
      >
        <div className="campaignCard-top-dtg-wrapper">
          <div className="campaignCard-top-dtg">2 days left</div>
        </div>
        <div className="campaignCard-progress-wrapper">
          <img src={Progressbar} className="campaignCard-progress" />
        </div>
        <div className="campaignCard-btn-wrapper">
          <div className="campaignCard-btn">₹3000 MORE TO SPEND</div>
        </div>
        <div className="campaignCard-text">
          <h1 className="campaignCard-text-main">Get ₹200 cashback</h1>
          <h2 className="campaignCard-text-sub">
            {" "}
            on completing offline transactions worth ₹2000
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
