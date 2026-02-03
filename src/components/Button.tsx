import React from "react";

interface ButtonProps {
  text: string;
  type: string
}

function Button({text, type}: ButtonProps) {
  return (
    <>
      <button className={`btn ${type}`}>{text}</button>
    </>
  );
}

export default Button;
