import React from "react";
import "./Navbar.css";
import { AiOutlineSearch,AiFillNotification,AiFillContacts,AiFillMessage,AiFillFlag} from "react-icons/ai";
const page = () => {
  return (
    <div className="navbar_app">
      <div className="searcherdiv">
        <AiOutlineSearch />
        <input type="text" />
      </div>
      <h5>other menus</h5>
      <AiFillNotification />
      <AiFillContacts />
      <AiFillMessage />
      <div className="lang">
      <AiFillFlag />
        english
      </div>
      <div className="imgDetails">
        <img src="" alt="img" />
        <p>
            <span className="username">importnar</span> 
            <span className="smollspan">ok</span>
        </p>
      </div>
    </div>
  );
};

export default page;
