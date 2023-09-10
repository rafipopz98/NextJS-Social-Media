import React from "react";
import './Story.css'
const tempData = [
  
  {
    id: 1,
    name: "john1",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  {
    id: 2,
    name: "john2",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  {
    id: 3,
    name: "john3",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  {
    id: 1,
    name: "john1",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  {
    id: 2,
    name: "john2",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  {
    id: 3,
    name: "john3",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  {
    id: 1,
    name: "john1",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  {
    id: 2,
    name: "john2",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  {
    id: 3,
    name: "john3",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  {
    id: 1,
    name: "john1",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  {
    id: 2,
    name: "john2",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  {
    id: 3,
    name: "john3",
    image: "https://wallpaperaccess.com/full/5045061.jpg",
  },
  
  
];
const Story = () => {
  return <div className="stories">
  <div className="story cstrory">
        <img src='https://wallpaperaccess.com/full/5045061.jpg' alt="n" />
        <span>name</span>
        <button>+</button>
    </div>
  {tempData.map(story=>(
    <div className="story">
        <img src={story.image} alt="" />
        <img src={story.image} alt="" className="pfp" />
        <span>{story.name}</span>
    </div>
  ))}
  </div>;
};

export default Story;
