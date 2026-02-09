import React, { useState, useRef } from "react";
import "./Contact.css";
import Button from "../../components/Button";
import ContactInputField from "../../components/ContactInputField";
import emailjs from "@emailjs/browser";

function Contact() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  const InfoCards = [
    { icon: "envelope", title: "Email Address", text: "buisness@youssef.com" },
    { icon: "phone", title: "Phone Number", text: "+01234567891" },
    { icon: "map", title: "Address", text: "+15 New York, Alnahr Bridge." },
    { icon: "globe", title: "Personal Website", text: "youssef.com" },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lxaxark", "template_9z1k9sd", form.current, {
        publicKey: "RLg3zE_X80Z_srgaO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="main-heading">
          Let's Complete Forms To <span>Contact</span> Me
        </h2>
        <div className="container">
          <div className="info-cards">
            {InfoCards.map((card) => {
              return (
                <div className="info-card">
                  <i className={`bx bx-${card.icon}`}></i>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              );
            })}
          </div>
          <div className="forms">
            <form ref={form} onSubmit={() => sendEmail()}>
              <div className="field-group">
                <ContactInputField
                  id="firstName"
                  label="First Name"
                  value={inputs.firstName}
                  name="first_name"
                  onChange={(e) =>
                    setInputs({ ...inputs, firstName: e.target.value })
                  }
                />
                <ContactInputField
                  id="lastName"
                  label="Last Name"
                  value={inputs.lastName}
                  name="last_name"
                  onChange={(e) =>
                    setInputs({ ...inputs, lastName: e.target.value })
                  }
                />
              </div>
              <div className="field-group">
                <ContactInputField
                  id="EmailAddress"
                  label="Email Address"
                  value={inputs.emailAddress}
                  name="email_address"
                  onChange={(e) =>
                    setInputs({ ...inputs, emailAddress: e.target.value })
                  }
                />
                <ContactInputField
                  id="Subject"
                  label="Subject"
                  value={inputs.subject}
                  name="subject"
                  onChange={(e) =>
                    setInputs({ ...inputs, subject: e.target.value })
                  }
                />
              </div>
              <div className="field-group">
                <ContactInputField
                  id="Message"
                  label="Message"
                  value={inputs.message}
                  name="message"
                  onChange={(e) =>
                    setInputs({ ...inputs, message: e.target.value })
                  }
                  textarea
                />
              </div>

              <Button text="Send Form" fill={false} />
            </form>
            <div className="map">
              <iframe
                className="map-frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1763567675724!5m2!1sen!2seg"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
