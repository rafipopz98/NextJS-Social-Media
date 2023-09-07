import Icons from "@/components/Icons/Icons";
import ButtonsText from "@/components/buttonsText/ButtonsText";
import {FaGoogle,FaGithub} from 'react-icons/fa'
const HomePage = () => {
  const googleB="linear-gradient(to right, #919192 0%, #eff2f9 79%);"
  return (
    <div className="container">
      <div className="loginContainer">
        <h2>WELCOME</h2>
        <div className="inputContainer">
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
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
