import "./nudgeCard.css";
import Progress from "../../assets/images/nudgecard/Progress states.png";
import btnImg from "../../assets/images/nudgecard/blackArrow.svg";
import * as dayjs from 'dayjs'
import { formatString, truncate } from "../../utils/functions";


const NudgeCard = (props) => {
  return (
    <div className="nudgecard-wrapper">
      <div className="nudgeCard-content-container">
        <div className="nudgeCard-icon-container">
          <img
            src={
              props?.data?.displayOptions?.nudgeDetails
                ? JSON.parse(props?.data?.displayOptions?.nudgeDetails)
                    ?.illustrationUrl || Progress
                : Progress
            }
            height={"48px"}
            width={"48px"}
            style={{ borderRadius: "100%" }}
          />
        </div>
        <div className="nudgeCard-text-content">
          <h1 className="nudgeCard-main-content">
          {truncate(formatString(props?.data?.displayOptions?.nudgeDetails
              ? JSON.parse(props?.data?.displayOptions?.nudgeDetails)?.title
              : "Spend Statement, May 2023"), window.innerWidth > 445 ? 30 : window.innerWidth > 405 ?  25 : window.innerWidth > 390 ? 20 : 16) ||
              "Get ₹200 cashback"}

          </h1>
          <div className="nudgeCard-sub-content">
            <p className="nudgeCard-p1">
            {truncate(formatString(props?.data?.displayOptions?.nudgeDetails
                ? JSON.parse(props?.data?.displayOptions?.nudgeDetails)
                    ?.description
                : "Win 400 cashback"), 40) ||
              "Get ₹200 cashback"}
            </p>

            {dayjs(props?.data?.endDate).diff(dayjs(), "d") < 5 &&
              dayjs(props?.data?.endDate).diff(dayjs(), "d") >= 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="3"
                  viewBox="0 0 2 3"
                  fill="none"
                >
                  <circle cx="1" cy="1.32416" r="1" fill="#D9D9D9" />
                </svg>
              )}
            {dayjs(props?.data?.endDate).diff(dayjs(), "d") < 5 &&
              dayjs(props?.data?.endDate).diff(dayjs(), "d") >= 0 && (
                <p className="nudgeCard-p2">{`${dayjs(
                  props?.data?.endDate
                ).diff(dayjs(), "d")}d left`}</p>
              )}
          </div>
        </div>
      </div>
      <div className="nudgeCard-button-container">
        <img src={btnImg} />
      </div>
    </div>
  );
};

export default NudgeCard;
