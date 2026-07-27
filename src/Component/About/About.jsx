import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import image from "../../assets/image.jpeg";
import reactcertificate from "../../assets/reactcertificate.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={image} alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a passionate and dedicated Full-Stack Developer with a strong
              foundation in both front-end and back-end technologies. I enjoy
              building responsive, user-friendly web applications and
              continuously learning new tools and technologies to improve my
              skills.
            </p>

            <p>
              My technical expertise includes HTML, CSS, JavaScript, React.js,
              Node.js, Express.js, MongoDB, and MySQL. I have experience
              developing full-stack applications, creating RESTful APIs, and
              designing efficient database solutions that deliver seamless user
              experiences.
            </p>

            <p>
              Through projects such as AdvocateHub and FeastFlow, I have
              strengthened my problem-solving abilities, coding practices, and
              understanding of real-world software development. I am also
              familiar with Git, GitHub, Postman, and collaborative development
              environments.
            </p>

            <p>
              I am currently seeking opportunities as a Full Stack Developer,
              backend Developer, where I can contribute, learn from experienced
              professionals, and build impactful digital solutions that make a
              difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
