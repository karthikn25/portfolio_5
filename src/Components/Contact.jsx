import React, { useState } from "react";
import emailjs from "emailjs-com";
import Base from "../Base/Base";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To handle success/error messages

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data before submission to check if it's correct
    console.log("Form Data Submitted: ", formData);

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_m4zwyho",  // Your service ID from EmailJS
        "template_l6615uh",  // Your template ID from EmailJS
        e.target,            // The form element
        "_ulEAJwyCohSqgl0t"  // Your user ID from EmailJS
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!"); // Success message
          console.log(result.text);  // Log the result if needed
        },
        (error) => {
          setStatus("Oops! Something went wrong. Please try again."); // Error message
          console.log(error.text);  // Log the error if needed
        }
      );

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Base>
      <div className="contact-container">
        <div className="row contact-head">
          <div className="col contact">
            <h2>
              <span className="color">C</span>ontact{" "}
              <span className="color">M</span>e
            </h2>
          </div>
        </div>
        <div className="row contact-head">
          <div className="col contact">
            <p>
              Ready to collaborate? Reach out for projects, opportunities, or
              just to connect. Let's create impactful digital experiences
              together.
            </p>
          </div>
        </div>
        <div className="row contact-second-data">
          <div className="col-12 col-sm-6">
            <div className="contact">
              <div className="contact-detail">
                <div className="contact-detail-head">
                  <div className="contact-detail-first-row">
                    <i className="bx bx-envelope"></i>
                    <div className="contact-detail-second-row">
                      <h5>Have a question?</h5>
                      <p>I am here to help you</p>
                      <h6 className="color">
                        Email Me At mkarthikeyan@gmail.com
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="contact-detail-head">
                  <div className="contact-detail-first-row">
                    <i className="bx bx-map"></i>
                    <div className="contact-detail-second-row">
                      <h5>Current Location</h5>
                      <p>Bangalore, India</p>
                      <h6 className="color">Serving Clients Worldwide</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-btn">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          {status && <p className="status-message" style={{ textAlign: "center" }}>{status}</p>}
        </div>
      </div>
    </Base>
  );
}
