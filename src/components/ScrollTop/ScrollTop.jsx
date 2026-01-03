import React, { useEffect, useState } from "react";
import "./ScrollTop.css";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 100)

    window.addEventListener("scroll", handleScroll)

    return window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className={`scroll-top ${show ? "active" : ""}` }
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i class="bx bx-up-arrow-alt"></i>
      </div>
    </>
  );
}

export default ScrollTop;
