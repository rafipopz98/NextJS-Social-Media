"use client";
import Icons from "@/components/Icons/Icons";
import ButtonsText from "@/components/buttonsText/ButtonsText";
import { FaGoogle, FaGithub } from "react-icons/fa";
const googleB = "linear-gradient(to right, #919192 0%, #eff2f9 79%);";
const HomePage = () => {
  const initialData = {
    email: "",
    password: "",
  };
  let name, value;
  const [formData, setFormData] = initialData;

  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = () => {
    console.log("submitted");
  };

  return (
    <div className="container">
      <div className="loginContainer">
        <h2>WELCOME</h2>
        <div className="inputContainer">
          <input
            name="email"
            value={initialData.email}
            type="text"
            placeholder="email"
            onChange={inputHandler}
          />
          <input
            name="password"
            value={initialData.password}
            type="password"
            placeholder="password"
            onChange={inputHandler}
          />
        </div>
        <ButtonsText>Login</ButtonsText>
        <h5 className="loginWith">or Login With</h5>
        <hr className="horizontalLine" />
        <div className="iconsContainer">
          <Icons color={googleB}>
            <FaGoogle />
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

export default HomePage;
