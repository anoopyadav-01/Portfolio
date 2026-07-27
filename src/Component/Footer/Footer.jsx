import React from "react";
import "./Footer.css";
import unnamed from "../../assets/unnamed.png";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={unnamed} alt="" className="footerlogo" />
          <p>I am a fullStack developer</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-emial-input">
            <img src={user_icon} alt="" />
            <input type="emial" placeholder="Enter your emial" />
          </div>
          <div className="" className="footer-subscribe">
            <p className="subscribe">Subscribe</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2025 My Website. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <a href="https://www.linkedin.com/in/anoop-yadav-40614b37b">
            <p>Linkedin</p>
          </a>
          <a href="https://github.com/anoopyadav-01">
            <p>Github</p>
          </a>
          <a href="#">
            <p>Connect with me</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
