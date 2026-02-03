import React from "react";

interface TestimonialCardProps {
  title: string;
  icon: string;
  rating: number;
  maxStars?: number;
}

function TestimonialCard({
  title,
  icon,
  rating = 5,
  maxStars = 5,
}: TestimonialCardProps) {
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    if (i < rating) {
      stars.push(<i key={i} className="bx bxs-star fill"></i>);
    } else {
      stars.push(<i key={i} className="bx bx-star"></i>);
    }
  }

  return (
    <div className="card">
      <div className="stars-icon">{stars}</div>
      <div className="text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quos,
          ipsam quae unde.
        </p>
        <div className="info">
          <h4>{title}</h4>
          <i className={icon}></i>
        </div>
      </div>
      <div className="foot">
        <button className="btn trns">Info More</button>
      </div>
    </div>
  );
}

export default TestimonialCard;
