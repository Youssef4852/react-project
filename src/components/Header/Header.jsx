import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScrollHeader = () => setScroll(window.scrollY > 70)

    window.addEventListener("scroll", handleScrollHeader)
    return () => window.removeEventListener("scroll", handleScrollHeader)
  }, [])

  const links = [
    { name: "Home", location: "home" },
    { name: "Reel", location: "reel" },
    { name: "Projects", location: "projects" },
    { name: "About", location: "about" },
    { name: "Testimonials", location: "testimonials" },
    { name: "FAQ", location: "faq" },
    { name: "Contact", location: "contact" },
  ];

  return (
    <>
      <header style={{background: scroll ? "#050510" : ''}}>
        <div className="container">
          <Link to="/" className="logo">
            Youssef
          </Link>
          <ul>
            {links.map((link) => {
              return (
                <li
                  key={link.location}
                  className={activeLink === link.location ? "active" : ""}
                  onClick={() => {
                    setActiveLink(link.location)
                  }}
                >
                  <Link to={`/${link.location}`}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
          <i className="bx bx-menu menu"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
