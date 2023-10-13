import "./nudgeCard.css";
import Progress from "../../assets/images/nudgecard/Progress states.png";
import btnImg from "../../assets/images/nudgecard/blackArrow.svg";
import moment from "moment";

const NudgeCard = (props) => {
  return (
    <div className="nudgecard-wrapper">
      <div className="nudgeCard-content-container">
        <div className="nudgeCard-icon-container">
          <img
            src={
              JSON.parse(props?.data?.displayOptions?.nudgeDetails)
                ?.illustrationUrl || Progress
            }
            height={"48px"}
            width={"48px"}
            style={{ borderRadius: "100%" }}
          />
        </div>
        <div className="nudgeCard-text-content">
          <h1 className="nudgeCard-main-content">
            {JSON.parse(props?.data?.displayOptions?.nudgeDetails)?.title ||
              "Spend Statement, May 2023"}
          </h1>
          <div className="nudgeCard-sub-content">
            <p className="nudgeCard-p1">
              {JSON.parse(props?.data?.displayOptions?.nudgeDetails)
                ?.description || "Win 400 cashback"}
            </p>

            {moment(props?.data?.endDate).diff(moment(), "d") < 5 &&
              moment(props?.data?.endDate).diff(moment(), "d") >= 0 && (
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
            {moment(props?.data?.endDate).diff(moment(), "d") < 5 &&
              moment(props?.data?.endDate).diff(moment(), "d") >= 0 && (
                <p className="nudgeCard-p2">{`${moment(
                  props?.data?.endDate
                ).diff(moment(), "d")}d left`}</p>
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
