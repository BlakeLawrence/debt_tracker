import React from "react";

const Input = ({
  inputStyling,
  placeholder,
  type,
  changeEvent,
  clickEvent,
}) => {
  return (
    <input
      onChange={changeEvent}
      onClick={clickEvent}
      type={type}
      className={inputStyling}
      placeholder={placeholder}
    />
  );
};

export default Input;
