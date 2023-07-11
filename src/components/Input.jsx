import React from "react";

const Input = ({ inputStyling, placeholder, type, changeEvent }) => {
  return (
    <input
      onChange={changeEvent}
      type={type}
      className={inputStyling}
      placeholder={placeholder}
    />
  );
};

export default Input;
