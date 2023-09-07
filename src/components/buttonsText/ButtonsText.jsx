import React from "react";

const ButtonsText = ({ children ,disabled}) => {
  return (
    <div className="buttonContainer" >
      <button disabled={disabled} className="buttonLogin">{children}</button>
    </div>
  );
};

export default ButtonsText;
