import React from "react";
import { personalInfo, navLinks, socialLinks } from "../data/data";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const iconComponents = {
  InstagramIcon: InstagramIcon,
  LinkedInIcon: LinkedInIcon,
  WhatsAppIcon: WhatsAppIcon,
  EmailIcon: EmailIcon,
};

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="name-title">
          <h1>{personalInfo.name}</h1>
          <h3>{personalInfo.title}</h3>
          <p>{personalInfo.description}</p>

          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <div className="nav-line"></div>
                <a href={`#${link.id}`} className="nav-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="social-nav">
          <ul className="social-list">
            {socialLinks.map((social) => {
              const IconComponent = iconComponents[social.component];
              return (
                <li key={social.icon}>
                  <IconComponent fontSize="large" />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
