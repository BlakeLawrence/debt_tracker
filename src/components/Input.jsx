import React from "react";

const Input = ({ inputStyling }) => {
  return (
    <input type="text" className={inputStyling} placeholder="enter salary" />
  );
};

export default Input;
