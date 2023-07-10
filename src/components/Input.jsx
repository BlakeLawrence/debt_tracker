import React from "react";

const Input = ({ inputStyling, placeholder, type }) => {
  return (
    <input type={type} className={inputStyling} placeholder={placeholder} />
  );
};

export default Input;
