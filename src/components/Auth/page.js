"use client";
import { GlobalContext } from "@/state/context/GlobalContext";
import Icons from "../Icons/Icons";
import ButtonsText from "../buttonsText/ButtonsText";
import { useContext, useState } from "react";
import { FaGoogle, FaGithub,FaFacebook } from "react-icons/fa";
const googleB = "linear-gradient(to right, #919192 0%, #eff2f9 79%);";
// import {ConnectionDB} from '../../database/db'
const Auth = () => {
  const state=useContext(GlobalContext);
  console.log("hhh",state);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  let name, value;

  const inputHandler = (e) => {
    // ConnectionDB();
    name = e.target.name;
    value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  function isValid() {
    return formData &&
      formData.username &&
      formData.username.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== ""
      ? true
      : false;
  }

  const submitHandler = () => {
    console.log(formData)
  };

  return (
    <div className="container">
      <div className="loginContainer">
        <h2>WELCOME</h2>
        <div className="inputContainer">
          <input
            type="text"
            id="username"
            value={formData.username}
            name="username"
            placeholder="enter username"
            onChange={inputHandler}
          />
          <input
            type="password"
            id="password"
            value={formData.password}
            name="password"
            placeholder="enter password"
            onChange={inputHandler}
          />
        </div>
        <ButtonsText onClick={submitHandler} disabled={!isValid()}>Login</ButtonsText>
        <h5 className="loginWith">or Login With</h5>
        <hr className="horizontalLine" />
        <div className="iconsContainer">
          <Icons color={googleB}>
            <FaGoogle />
          </Icons>
          <Icons color={googleB}>
            <FaFacebook />
          </Icons>
          <Icons color={googleB}>
            <FaGithub />
          </Icons>
        </div>
        <h4 className="forgotPassword">Forgot password?</h4>
      </div>
    </div>
  );
};

export default Auth;
