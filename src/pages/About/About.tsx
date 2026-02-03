import React from 'react'
import './About.css'
import HomeImg from '../../assets/home.jpg'

function About() {
  const socialIcons = [
    {name: 'github', id: 1},
    {name: 'linkedin-square', id: 2},
    {name: 'instagram-alt', id: 3},
    {name: 'youtube', id: 4},
    {name: 'facebook-square', id: 5},
  ]
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
                return <i key={icon.id} className={`bx bxl-${icon.name}`}></i>
              })}
            </div>
            <button className="btn fill">More Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About