import React from "react";

const ButtonsText = ({ children, disabled, onClick }) => {
  return (
    <div className="buttonContainer">
      <button onClick={onClick} disabled={disabled} className="buttonLogin">
        {children}
      </button>
    </div>
  );
};

export default ButtonsText;
