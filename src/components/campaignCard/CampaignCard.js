import "./campaignCard.css";
import campaignCardBackground from "../../assets/images/campaigncard/Group 1.png";
import Progressbar from "../../assets/images/campaigncard/progressbar.png";

const CampaignCard = () => {
  return (
    <div className="campaigncard-wrapper">
      <div
        className="campaignCard-top-container"
        style={{ backgroundImage: `url(${campaignCardBackground})` }}
      >
        <div className="campaignCard-top-dtg-wrapper">
          <div className="campaignCard-top-dtg">2 days left</div>
        </div>
        <img src={Progressbar} />
      </div>
    </div>
  );
};

export default CampaignCard;
