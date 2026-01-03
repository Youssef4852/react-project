import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="text">
            <h1>
              I'm Front End Devloper With Vue JS - <br />
              Web Development
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores vitae unde quia, tempora minima sit.
            </p>
            <div className="btns">
              <button className="btn fill">Log in</button>
              <button className="btn trns">Sign Up</button>
            </div>
          </div>
        </div>
        <div className="socials">
          <i className="bx bxl-linkedin-square"></i>
          <i className="bx bxl-instagram-alt"></i>
          <i className="bx bxl-facebook-square"></i>
        </div>
      </section>
    </>
  );
}

export default Home;
