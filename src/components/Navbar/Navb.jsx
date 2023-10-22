import React from "react";
import './Navbar.css'
const Navb = () => {
  return (
    <div className="navbarr navbarrContainer">
      <a href="#" className="logoo">
        logo
      </a>
      <div className="nav-iconsss">
        <a href="#">
          <i className="bx bx-home-alt"></i>
        </a>
        <a href="#">
          <i className="bx bx-compass"></i>
        </a>
        <a href="#">
          <i className="bx bx-message-alt-add"></i>
        </a>
        <a href="#">
          <i className="bx bx-paper-plane"></i>
        </a>
        <a href="#" className="nav-profilel">
          <img
            src="https://wallpaperaccess.com/full/5045061.jpg"
            alt="ok"
            className="nav-imgg"
          />
        </a>
      </div>
      <a href="#" className="camera-Nav">
        <i className="bx bx-camera"></i>
      </a>
    </div>
  );
};

export default Navb;
