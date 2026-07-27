import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import unnamed from "../../assets/unnamed.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (section) => {
    setMenu(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img src={unnamed} alt="Logo" className="logo" />

      <img
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
        onClick={() => setIsMenuOpen(true)}
      />

      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={() => setIsMenuOpen(false)}
        />

        <li className={menu === "home" ? "active-link" : ""}>
          <AnchorLink href="#home" offset={120} className="anchor-link">
            <p onClick={() => handleLinkClick("home")}>Home</p>
          </AnchorLink>
        </li>

        <li className={menu === "about" ? "active-link" : ""}>
          <AnchorLink href="#about" offset={120} className="anchor-link">
            <p onClick={() => handleLinkClick("about")}>About Me</p>
          </AnchorLink>
        </li>

        <li className={menu === "work" ? "active-link" : ""}>
          <AnchorLink href="#work" offset={120} className="anchor-link">
            <p onClick={() => handleLinkClick("work")}>Portfolio</p>
          </AnchorLink>
        </li>
        <li className={menu === "skills-section" ? "active-link" : ""}>
          <AnchorLink
            href="#skills-section"
            offset={120}
            className="anchor-link"
          >
            <p onClick={() => handleLinkClick("skills-section")}>Skills</p>
          </AnchorLink>
        </li>
        <li className={menu === "contact" ? "active-link" : ""}>
          <AnchorLink href="#contact" offset={120} className="anchor-link">
            <p onClick={() => handleLinkClick("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink href="#contact" offset={120} className="anchor-link">
          <p onClick={() => handleLinkClick("contact")}>Connect with Me</p>
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
