import React from "react";
import "../mainContainer/MainContainer.css";
import {
  BiDotsVertical,
  BiHeart,
  BiMessage,
  BiShare,
  BiBookmark,
} from "react-icons/bi";

const tempData = [
  {
    pfp: "https://wallpaperaccess.com/full/5045061.jpg",
    username: "johnDoe",
    location: "Canada",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
    likes: 20,
    commentsBy: "unknown",
    comments: "lorem ispum",
    totComments: 3,
    time: 10,
  },
  {
    pfp: "https://wallpaperaccess.com/full/5045061.jpg",
    username: "DoeJohn",
    location: "New York",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
    likes: 50,
    commentsBy: "known",
    comments: "lorem ispum ispum lorem",
    totComments: 5,
    time: 20,
  },
];

const Post = () => {
  return (
    <>
   {
    tempData.map((item)=>(
        <div className="postContainer">
        <div className="postBox">
          <div className="postTop">
            <div className="postProfile">
              <img
                src={item.pfp}
                alt="pfp"
              />
              <div className="nameTopDiv">
                <h3 className="nameTop">{item.username}</h3>
                <span className="locationTop">{item.location}</span>
              </div>
            </div>
            <BiDotsVertical className="iconDots" />
          </div>
          <img
            src={item.image}
            alt="post-image"
            className="postImg"
          />
          <div className="postBottom">
            <div className="actionIcons">
              <BiHeart className="iconsBottom" />
              <BiMessage className="iconsBottom" />
              <BiShare className="iconsBottom" />
              <BiBookmark className="saveIcon iconsBottom" />
            </div>
            <h3 className="likes">{item.likes} likes</h3>
            <div className="comment">
              <p>
                <a href="#">{item.commentsBy}</a>
                <span>
                  {item.comments}
                </span>
              </p>
            </div>
            <span className="viewMore">view all {item.totComments} comments</span>
            <span className="postTime">{item.time} mins ago</span>
          </div>
        </div>
      </div>
    ))
   }
     
    </>
  );
};

export default Post;
