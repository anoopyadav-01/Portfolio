import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profileimage.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        <span>I'm Anoop Yadav,</span> Full Stack Developer
      </h1>
      <p className="cont">
        I’m a passionate Full-Stack Developer with experience building dynamic,
        scalable, and user-friendly web applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">
            <p onClick={() => setMenu("contact")}>Connect with Me</p>
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="/public/Anoop_Resume.pdf"
            download="Resume.pdf"
            class="button-style"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
