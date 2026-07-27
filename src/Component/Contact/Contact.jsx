import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import gmail from "../../assets/gmail_logo.jpg";
import location_icon from "../../assets/location.webp";
import image_contact from "../../assets/images_contact.jpg";
import linkedinlogo from "../../assets/linkedinlogo.webp";
import { toast } from "react-toastify";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d98318f2-587f-4423-9809-00e8bd8cb8c7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    }).then((res) => res.json());
    if (res.success) {
      toast.success("Email sent successfully!");
      event.target.reset();
    } else {
      toast.error("Failed to send message.");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            "I'm currently open to full-time roles, freelance opportunities, and
            interesting collaborations. Feel free to reach out—I'd love to chat
            about how I can contribute to your team!"
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img className="linkedin" src={gmail} alt="gmail" />
              <p>anoopyadav0264@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img className="call" src={image_contact} alt="" />
              <p>7977195135</p>
            </div>
            <div className="contact-detail">
              <img className="call" src={location_icon} alt="" />
              <p>Mumbai,Maharashtra</p>
            </div>
            <div className="contact-detail">
              <a
                href="https://www.linkedin.com/in/anoop-yadav-40614b37b"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <img className="linkedin" src={linkedinlogo} alt="LinkedIn" />
                <span>Anoop Yadav</span>
              </a>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="Your Name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" id="" />
          <label htmlFor="">Your Email</label>
          <input
            type="emial"
            placeholder="Enter your email"
            name="email"
            id=""
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter youe message"
          ></textarea>
          <div className="buttons">
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
