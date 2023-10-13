import "./campaignCard.css";
import campaignCardBackground from "../../assets/images/campaigncard/CampaignCardBg.svg";
import Progressbar from "../../assets/images/campaigncard/progressbar.png";
import moment from "moment";
import { formatString, truncate } from "../../utils/functions";

const CampaignCard = (props) => {
  console.log(moment(props?.data?.benefitExpiry).diff(moment(), "d"));
  return (
    <div className="campaigncard-wrapper">
      <div
        className="campaignCard-top-container"
        style={{
          backgroundImage: `url(${campaignCardBackground})`,
          backgroundColor: props?.data?.displayColor || "#363062",
        }}
      >
        <div className="campaignCard-top-dtg-wrapper">
          <div className="campaignCard-top-dtg">{`${moment(
            props?.data?.benefitExpiry
          ).diff(moment(), "d")} days left`}</div>
        </div>
        <div className="campaignCard-progress-wrapper">
          <img src={Progressbar} className="campaignCard-progress" />
        </div>
        <div className="campaignCard-btn-wrapper">
          <div className="campaignCard-btn">{`₹${
            props?.data?.maxUsageValue > 1000000
              ? props?.data?.threshold
              : props?.data?.maxUsageValue
          } MORE TO SPEND`}</div>
        </div>
        <div className="campaignCard-text">
          <h1 className="campaignCard-text-main">
            {truncate(formatString(props?.data?.displayTitle), 20) ||
              "Get ₹200 cashback"}
          </h1>
          <h2 className="campaignCard-text-sub">
            {truncate(formatString(props?.data?.displayDescription), 28) ||
              "on completing offline transactions worth ₹2000"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
