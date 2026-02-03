import React, { useState, useRef } from "react";
import "./Contact.css";
import ContactInputField from "../../components/ContactInputField.js";
import ContactTextareaField from "../../components/ContactTextareaField.js";
import emailjs from "@emailjs/browser";

interface ContactFormState {
  first: string;
  last: string ;
  email: string ;
  subject: string;
  message: string;
}

function Contact() {
  const [focus, setFocus] = useState<ContactFormState>({
    first: '',
    last: '',
    email: '',
    subject: '',
    message: '',
  });

  const InfoCards = [
    { icon: "envelope", title: "Email Address", text: "buisness@youssef.com" },
    { icon: "phone", title: "Phone Number", text: "+01234567891" },
    { icon: "map", title: "Address", text: "+15 New York, Alnahr Bridge." },
    { icon: "globe", title: "Personal Website", text: "youssef.com" },
  ];

  const mapFrameSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1763567675724!5m2!1sen!2seg";

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    console.log("Loading...")

    emailjs.sendForm("service_lxaxark", "template_9z1k9sd", form.current, {
      publicKey: "RLg3zE_X80Z_srgaO",
    });
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
            <form ref={form} onSubmit={sendEmail}>
              <div className="field-group">
                <ContactInputField
                  id="first"
                  name="first_name"
                  label="First Name"
                  value={focus.first}
                  setValue={(key, val) => setFocus({ ...focus, [key]: val })}
                  type="text"
                />
                <ContactInputField
                  id="last"
                  name="last_name"
                  label="Last Name"
                  value={focus.last}
                  setValue={(key, val) => setFocus({ ...focus, [key]: val })}
                  type="text"
                />
              </div>
              <div className="field-group">
                <ContactInputField
                  id="email"
                  name="email_address"
                  label="Email Address"
                  value={focus.email}
                  setValue={(key, val) => setFocus({ ...focus, [key]: val })}
                  type="email"
                />
                <ContactInputField
                  id="subject"
                  name="subject"
                  label="Subject"
                  value={focus.subject}
                  setValue={(key, val) => setFocus({ ...focus, [key]: val })}
                  type="text"
                />
              </div>
              <div className="field-group">
                <ContactTextareaField
                  id="message"
                  name="message"
                  label="Message"
                  value={focus.message}
                  setValue={(key, val) => setFocus({ ...focus, [key]: val })}
                />
              </div>

              <button className="btn fill">Send Data</button>
            </form>
            <div className="map">
              <iframe
                className="map-frame"
                src={mapFrameSrc}
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
