import React from "react";

const Input = ({
  inputStyling,
  placeholder,
  type,
  changeEvent,
  clickEvent,
  value,
}) => {
  return (
    <input
      value={value}
      onChange={changeEvent}
      onClick={clickEvent}
      type={type}
      className={inputStyling}
      placeholder={placeholder}
    />
  );
};

export default Input;
