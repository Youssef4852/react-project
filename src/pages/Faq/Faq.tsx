import React from "react";
import "./Faq.css";
import FaqItem from "../../components/FaqItem.js";

function Faq() {
  return (
    <>
      <section className="faq" id="faq">
        <h2 className="main-heading">
          Let's Ask A Question And The Answer In <span>FAQ</span>
        </h2>
        <div className="container">
          <FaqItem
            title="How It Work This Application In Broswer?"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fugit
          quos neque cumque ullam quam dolor culpa at quibusdam quo. Reiciendis
          dolore cupiditate hic deleniti, iste molestiae commodi expedita error."
          />
          <FaqItem
            title="How It Work This Application In Broswer?"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fugit
          quos neque cumque ullam quam dolor culpa at quibusdam quo. Reiciendis
          dolore cupiditate hic deleniti, iste molestiae commodi expedita error."
          />
          <FaqItem
            title="How It Work This Application In Broswer?"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fugit
          quos neque cumque ullam quam dolor culpa at quibusdam quo. Reiciendis
          dolore cupiditate hic deleniti, iste molestiae commodi expedita error."
          />
          <FaqItem
            title="How It Work This Application In Broswer?"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fugit
          quos neque cumque ullam quam dolor culpa at quibusdam quo. Reiciendis
          dolore cupiditate hic deleniti, iste molestiae commodi expedita error."
          />
        </div>
      </section>
    </>
  );
}

export default Faq;
