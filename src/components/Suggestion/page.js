import React from "react";
import "../mainContainer/MainContainer.css";
import Image from "next/image";

const tempData = [
  {
    pfp: "https://wallpaperaccess.com/full/5045061.jpg",
    username: "johnDoe",
    status: "popular",
    btn: "Follow",
  },
  {
    pfp: "https://wallpaperaccess.com/full/5045061.jpg",
    username: "DoeJohn",
    status: "new to social",
    btn: "Follow",
  },
];
const Suggestions = () => {
  return (
    <>
      {tempData.map((item, key) => (
        <div key={key} className="suggestionContainer">
          <div className="profileBox">
            <div className="sideProfile">
              <img src={item.pfp} alt="" />
              <div className="usernameS">
                <h2 className="usernameH">{item.username}</h2>
                <span className="popular">{item.status}</span>
              </div>
            </div>
            <a href="#" className="followBtn">
              {item.btn}
            </a>
          </div> 
        </div>
      ))}
    </>
  );
};

export default Suggestions;
