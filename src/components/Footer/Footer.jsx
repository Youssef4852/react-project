import React from "react";
import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div class="box">
            <h2>Youssef</h2>
            <div class="icons">
              <i class="bx bxl-github"></i>
              <i class="bx bxl-linkedin-square"></i>
              <i class="bx bxl-instagram-alt"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
              odio!
            </p>
          </div>

          <div class="list-items">
            <div class="box">
              <h3>Support</h3>
              <ul>
                <li>Contact With Me</li>
                <li>Call Use Whatsapp</li>
                <li>Send To Email</li>
                <li>Support With Customer</li>
              </ul>
            </div>

            <div class="box">
              <h3>Sections</h3>
              <ul>
                <li>Reel</li>
                <li>Projects</li>
                <li>About</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div class="box">
              <h3>Thire Our</h3>
              <ul>
                <li>Terms And Conditions</li>
                <li>Privact Policy</li>
                <li>Cookies And Clear</li>
                <li>History And Search</li>
              </ul>
            </div>
          </div>
        </div>

        <p class="footer-text">
          &copy; <b>Youssef</b> <span></span> - All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
