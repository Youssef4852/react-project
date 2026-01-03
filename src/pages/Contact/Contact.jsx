import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [focus, setFocus] = useState({
    first: false,
    last: false,
    email: false,
    subject: false,
    message: false,
  });

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="main-heading">
          Let's Complete Forms To <span>Contact</span> Me
        </h2>
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <i className="bx bx-envelope"></i>
              <h4>Email Address</h4>
              <p>buisness@youssef.com</p>
            </div>
            <div className="info-card">
              <i className="bx bx-phone"></i>
              <h4>Phone Number</h4>
              <p>+01234567891</p>
            </div>
            <div className="info-card">
              <i className="bx bx-map"></i>
              <h4>Address</h4>
              <p>+15 New York, Alnahr Bridge.</p>
            </div>
            <div className="info-card">
              <i className="bx bx-globe"></i>
              <h4>Personal Website</h4>
              <p>youssef.com</p>
            </div>
          </div>
          <div className="forms">
            <form>
              <div className="field-group">
                <div className="input-field">
                  <label
                    style={{ top: focus.first ? "-11px" : "15px" }}
                    for="firstName"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    value={inputs.firstName}
                    onChange={(e) => {
                      setInputs({ ...inputs, firstName: e.target.value });
                    }}
                    id="firstName"
                    onFocus={() => setFocus({ ...focus, first: true })}
                    onBlur={(e) => {
                      setFocus({ ...focus, first: false });

                      if (e.target.value.trim().length > 0) {
                        setFocus({ ...focus, first: true });
                      } else {
                        setFocus({ ...focus, first: false });
                      }
                    }}
                    required
                  />
                </div>
                <div className="input-field">
                  <label
                    style={{ top: focus.last ? "-11px" : "15px" }}
                    for="lastName"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    value={inputs.lastName}
                    onChange={(e) => {
                      setInputs({ ...inputs, lastName: e.target.value });
                    }}
                    id="lastName"
                    onFocus={() => setFocus({ ...focus, last: true })}
                    onBlur={(e) => {
                      setFocus({ ...focus, last: false });

                      if (e.target.value.trim().length > 0) {
                        setFocus({ ...focus, last: true });
                      } else {
                        setFocus({ ...focus, last: false });
                      }
                    }}
                    required
                  />
                </div>
              </div>
              <div className="field-group">
                <div className="input-field">
                  <label
                    style={{ top: focus.email ? "-11px" : "15px" }}
                    for="email"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    value={inputs.emailAddress}
                    onChange={(e) => {
                      setInputs({ ...inputs, emailAddress: e.target.value });
                    }}
                    id="email"
                    onFocus={() => setFocus({ ...focus, email: true })}
                    onBlur={(e) => {
                      setFocus({ ...focus, email: false });

                      if (e.target.value.trim().length > 0) {
                        setFocus({ ...focus, email: true });
                      } else {
                        setFocus({ ...focus, email: false });
                      }
                    }}
                    required
                  />
                </div>
                <div className="input-field">
                  <label
                    style={{ top: focus.subject ? "-11px" : "15px" }}
                    for="subject"
                  >
                    Your Subject*
                  </label>
                  <input
                    type="text"
                    value={inputs.subject}
                    onChange={(e) => {
                      setInputs({ ...inputs, subject: e.target.value });
                    }}
                    id="subject"
                    onFocus={() => setFocus({ ...focus, subject: true })}
                    onBlur={(e) => {
                      setFocus({ ...focus, subject: false });

                      if (e.target.value.trim().length > 0) {
                        setFocus({ ...focus, subject: true });
                      } else {
                        setFocus({ ...focus, subject: false });
                      }
                    }}
                    required
                  />
                </div>
              </div>
              <div className="field-group">
                <div className="input-field">
                  <label
                    style={{ top: focus.message ? "-11px" : "15px" }}
                    for="message"
                  >
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    value={inputs.message}
                    onChange={(e) => {
                      setInputs({ ...inputs, message: e.target.value });
                    }}
                    onFocus={() => setFocus({ ...focus, message: true })}
                    onBlur={(e) => {
                      setFocus({ ...focus, message: false });

                      if (e.target.value.trim().length > 0) {
                        setFocus({ ...focus, message: true });
                      } else {
                        setFocus({ ...focus, message: false });
                      }
                    }}
                    required
                  ></textarea>
                </div>
              </div>

              <button className="btn fill">Send Data</button>
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
