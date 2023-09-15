import React from "react";
import "./Story.css";
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
  return (
    <div className="stories">
      <div className="cstrory">
        <img src="https://wallpaperaccess.com/full/5045061.jpg" alt="n" />
        <button>+</button>
      </div>
      {tempData.map((story,key) => (
        <div key={key} className="story">
          <img src={story.image} alt="" />
          <img src={story.image} alt="" className="pfp" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Story;

// import React from "react";
// import "../Status/Status.css";
// import Suggestions from "../Suggestion/page";
// const Status = () => {
//   return (
//     <>
//       <div className="mainStatus">
//         <div className="wrapperStatus">
//           <div className="leftCol">
//             <div className="statusWrapper">
//               {tempData.map((item, key) => (
//                 <div key={key} className="statusCard">
//                   <div className="profilePicStatus">
//                     <img src={item.image} alt="" />
//                   </div>
//                   <p className="usernameStatus">{item.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Status;
