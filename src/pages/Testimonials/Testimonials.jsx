import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../../components/TestimonialCard";

function Testimonials() {
  return (
    <>
      <section className="testimonials" id="testimonials">
        <h2 className="main-heading">
          Let's Show My Starts With My <span>Testimonials</span>
        </h2>

        <div className="container">
          <TestimonialCard title="Ahmed Ali" icon="bx bxl-github" rating="2" />
          <TestimonialCard title="Mohmaed Ibrahim" icon="bx bxl-github" rating="4" />
          <TestimonialCard title="Islam Mostafa" icon="bx bxl-github" />
          <TestimonialCard title="Ahmed Hassan" icon="bx bxl-github" rating="3"/>
          <TestimonialCard title="Gamal Hamdy" icon="bx bxl-github" rating="1"/>
          <TestimonialCard title="Adel Osama" icon="bx bxl-github" rating="2"/>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
