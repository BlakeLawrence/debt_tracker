import React from "react";

const Button = ({
  income,
  debt,
  outAmount,
  buttonStyling,
  clickEvent,
  text,
}) => {
  return (
    <button
      disabled={income === "" || debt === "" || outAmount === "" ? true : false}
      onClick={clickEvent}
      className={
        income === "" || debt === "" || outAmount === ""
          ? "hidden"
          : buttonStyling
      }
    >
      {text}
    </button>
  );
};

export default Button;
