import React from "react";
import "./Post.css";
import Comment from "../../../public/img/comment.png";
import Share from "../../../public/img/share.png";
import Heart from "../../../public/img/like.png";
import NotLike from "../../../public/img/notlike.png";

const Pust = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />

      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="e" />
        <img src={Share} alt="e" />
      </div>

      <span style={{ color: "grey", fontSize: "12px" }}>
        {data.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Pust;
