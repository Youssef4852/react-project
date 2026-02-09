import React from "react";
import "./About.css";
import HomeImg from "../../assets/home.jpg";
import Button from "../../components/Button";
import SocialIcon from "../../components/SocialIcon";

function About() {
  const socialIcons = [
    {icon: "github"},
    {icon: "linkedin-square"},
    {icon: "instagram-alt"},
    {icon: "youtube"},
    {icon: "facebook-square"},
  ];

  return (
    <>
      <section className="about section-bg" id="about">
        <h2 className="main-heading">
          Let's Rading My Lift Details And <span>About Us</span>
        </h2>

        <div className="container">
          <div className="image">
            <img src={HomeImg} alt="" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              unde doloremque deserunt provident ullam aperiam blanditiis sequi
              omnis optio tempore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              unde doloremque deserunt provident ullam aperiam blanditiis sequi
              omnis optio tempore.
            </p>
            <div className="social">
              {socialIcons.map(icon => {
                return <SocialIcon key={icon.icon} icon={icon.icon} />
              })}
            </div>
            <Button text="More Us" fill={true} />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
