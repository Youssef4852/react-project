import React, { useState } from "react";

function FaqItem({ title, text }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="question"
      onClick={(e) => {
        setShow(!show);
        e.addEventListener("transitionend", () => {
          e.style.position = "absolute";
        });
      }}
    >
      <h3>{title}</h3>
      <i className={show ? "bx bx-minus" : "bx bx-plus"}></i>
      <div
        className="question-text"
        style={{
          maxHeight: show ? "120px" : "0",
          left: show ? "0" : "-100%",
          opacity: show ? "1" : "0",
          marginTop: show ? "20px" : "0",
          paddingTop: show ? "20px" : "0"
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

export default FaqItem;
