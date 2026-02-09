import React, { useState } from "react";
import "./Faq.css";

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqItems = [
    {
      title: "How It Work This Application In Broswer?",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quos neque cumque ullam quam dolor culpa at quibusdam quo. Reiciendis dolore cupiditate hic deleniti, iste molestiae commodi expedita error",
    },
    {
      title: "Is React fast?",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quos neque cumque ullam quam dolor culpa at quibusdam quo. Reiciendis dolore cupiditate hic deleniti, iste molestiae commodi expedita error",
    },
    {
      title: "What is JSX?",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quos neque cumque ullam quam dolor culpa at quibusdam quo. Reiciendis dolore cupiditate hic deleniti, iste molestiae commodi expedita error",
    },
    {
      title: "What is Next Js?",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quos neque cumque ullam quam dolor culpa at quibusdam quo. Reiciendis dolore cupiditate hic deleniti, iste molestiae commodi expedita error",
    },
  ];
  return (
    <>
      <section className="faq" id="faq">
        <h2 className="main-heading">
          Let's Ask A Question And The Answer In <span>FAQ</span>
        </h2>
        <div className="container">
          {faqItems.map((faq, index) => {
            return (
              <div
                key={faq.title}
                className={`question ${openIndex === index ? "open" : ""}`}
                onClick={() => {
                  setOpenIndex(index);

                  if (index === openIndex) {
                    setOpenIndex(null)
                  }
                }}
              >
                <h3>{faq.title}</h3>
                <i
                  className={`bx bx-${openIndex === index ? "minus" : "plus"}`}
                ></i>
                <div className="question-text">
                  <p>{faq.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Faq;
