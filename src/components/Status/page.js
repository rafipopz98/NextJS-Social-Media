import React from "react";
import "./Status.css";
import Suggestions from "../Suggestion/page";
const Status = () => {
  return (
    <div className="mainStatus">
      <div className="wrapperStatus">
        <div className="leftCol">
          <div className="statusWrapper">
            <div className="statusCard">
              <div className="profilePicStatus">
                <img
                  src="https://img.lovepik.com/photo/20230422/small/lovepik-moving-paint-visual-perfume-series-background-design-of-vibrant-flow-of-photo-image_352430503.jpg"
                  alt=""
                />
              </div>
              <p className="usernameStatus">usernakme</p>
            </div>
          </div>
        </div>
        {/* <div className="rightCol"></div> */}
      </div>
    </div>
  );
};

export default Status;
