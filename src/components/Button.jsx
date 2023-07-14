import React from "react";

const Button = ({ buttonStyling, clickEvent }) => {
  return (
    <button onClick={clickEvent} className={buttonStyling}>
      click
    </button>
  );
};

export default Button;
