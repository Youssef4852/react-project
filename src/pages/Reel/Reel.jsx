import React from 'react'
import './Reel.css'

function Reel() {
  return (
    <>
      <section className="reel" id="reel">
        <h2 className="main-heading">
          Let's Go With Me Descover More <span>Reels</span>
        </h2>
        <div className="container">
          <div className="reel-frame">
            <iframe
              className="reel-video"
              width="1263"
              height="719"
              src="https://www.youtube.com/embed/m7Uug16PNkk?si=AYZAaiY0_DYPlzEd&hl=en"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className="custom-title" title="Coding Smarter with ChatGPT">
              <h4>Coding Smarter with ChatGPT</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reel