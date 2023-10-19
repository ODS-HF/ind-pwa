import "./campaignCard.css";
import campaignCardBackground from "../../assets/images/campaigncard/CampaignCardBg.svg";
import Progressbar from "../../assets/images/campaigncard/progressbar.png";
import * as dayjs from 'dayjs'
import { formatString, truncate } from "../../utils/functions";

const CampaignCard = (props) => {
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
          <div className="campaignCard-top-dtg">{`${dayjs(props?.data?.benefitExpiry).diff(dayjs(), "day")} days left`}</div>
        </div>
        <div className="campaignCard-progress-wrapper">
          <img src={props?.data?.illustrationUrl || Progressbar} className="campaignCard-progress" />
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
            {truncate(formatString(props?.data?.displayDescription), window.innerWidth >410 ? 28 : 20) ||
              "on completing offline transactions worth ₹2000"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
