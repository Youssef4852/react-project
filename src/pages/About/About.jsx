import React from 'react'
import './About.css'
import HomeImg from '../../assets/home.jpg'

function About() {
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
              <i className="bx bxl-github"></i>
              <i className="bx bxl-linkedin-square"></i>
              <i className="bx bxl-instagram-alt"></i>
              <i className="bx bxl-youtube"></i>
              <i className="bx bxl-facebook-square"></i>
            </div>
            <button className="btn fill">More Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About