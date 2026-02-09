import React from "react";
import "./Footer.css";
import SocialIcon from "../SocialIcon";

function Footer() {
  const icons = [
    { id: 1, icon: "github" },
    { id: 2, icon: "linkedin-square" },
    { id: 3, icon: "instagram-alt" },
  ];

  const supportLinks = [
    { id: 1, text: "Contact With Me" },
    { id: 2, text: "Call Use Whatsapp" },
    { id: 3, text: "Send To Email" },
    { id: 4, text: "Support With Customer" },
  ];

  const sectionLinks = [
    { id: 1, text: "Reel" },
    { id: 2, text: "Projects" },
    { id: 3, text: "About" },
    { id: 4, text: "Testimonials" },
  ];
  const ourLinks = [
    { id: 1, text: "Terms And Conditions" },
    { id: 2, text: "Privact Policy" },
    { id: 3, text: "Cookies And Clear" },
    { id: 4, text: "History And Search" },
  ];

  return (
    <>
      <footer>
        <div class="container">
          <div class="box">
            <h2>Youssef</h2>
            <div class="icons">
              {icons.map((icon) => {
                return <SocialIcon key={icon.id} icon={icon.icon} />;
              })}
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
                {supportLinks.map((link) => {
                  return <li key={link.id}>{link.text}</li>;
                })}
              </ul>
            </div>

            <div class="box">
              <h3>Sections</h3>
              <ul>
                {sectionLinks.map(link => {
                  return <li key={link.id}>{link.text}</li>
                })}
              </ul>
            </div>

            <div class="box">
              <h3>Our</h3>
              <ul>
                {ourLinks.map(link => {
                  return <li key={link.id}>{link.text}</li>
                })}
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
