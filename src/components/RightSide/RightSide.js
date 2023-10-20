'use client'
import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../../public/img/home.png";
import Noti from "../../../public/img/noti.png";
import Comment from "../../../public/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import Suggestions from "../Suggestion/page";
// import TrendCard from "../TrendCard/TrendCard";
// import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      {/* <TrendCard /> */}

<Suggestions />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
    </div>
  );
};

export default RightSide;
