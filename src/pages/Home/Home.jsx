import React from "react";
import Button from '../../components/Button'
import "./Home.css";

function Home() {
  const socials = [
    {icon: 'linkedin-square'},
    {icon: 'instagram-alt'},
    {icon: 'facebook-square'},
  ]
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
              <Button text="Login" fill={true}/>
              <Button text="Sign up" fill={false}/>
            </div>
          </div>
        </div>
        <div className="socials">
          {socials.map(({icon}) => {
            return <i className={`bx bxl-${icon}`}></i>
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
