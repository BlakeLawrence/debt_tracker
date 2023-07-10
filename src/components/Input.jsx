import React from "react";

const Input = ({ inputStyling, placeholder }) => {
  return (
    <input type="text" className={inputStyling} placeholder={placeholder} />
  );
};

export default Input;
