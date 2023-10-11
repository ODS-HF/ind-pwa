import "./nudgeCard.css";
import Progress from "../../assets/images/nudgecard/Progress states.png";
import btnImg from "../../assets/images/nudgecard/Frame 427320406.png";

const NudgeCard = () => {
  return (
    <div className="nudgecard-wrapper">
      <div className="nudgeCard-content-container">
        <div className="nudgeCard-icon-container">
          <img src={Progress} />
        </div>
        <div className="nudgeCard-text-content">
          <h1 className="nudgeCard-main-content">Spend Statement, May 2023</h1>
          <div className="nudgeCard-sub-content">
            <p className="nudgeCard-p1">Win 400 cashback</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="3"
              viewBox="0 0 2 3"
              fill="none"
            >
              <circle cx="1" cy="1.32416" r="1" fill="#D9D9D9" />
            </svg>
            <p className="nudgeCard-p2">2d left</p>
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
