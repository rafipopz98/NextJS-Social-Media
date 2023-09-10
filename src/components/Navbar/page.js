import Link from "next/link";
import React from "react";
import './Navbar.css'
import {
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link href="/" className="nextLink">
          <span>LOGO</span>
        </Link>
        <div className="search">
          <BsSearch className="icon"/> 
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <AiOutlineHome className="icon"/>
        <AiOutlinePlusCircle className="icon"/>
        <AiOutlineHeart className="icon"/>
        <RiMessengerLine className="icon"/>
        <div className="user">
          <img src="https://wallpaperaccess.com/full/5045061.jpg" alt="image" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
