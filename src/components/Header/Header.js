import React from "react";
import "./header.css";
import Logo from "../../assets/images/logo.png"

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="fixed-top">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#home"
          onClick={() => handlePageChange("Home")}
        >
        <img src={Logo} className="logo" alt="logo"/>
        </a>
      </div>
      <ul className="nav nav-tabs justify-content-end">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={
              currentPage === "Home"
                ? "nav-link active active-link font-face-gm"
                : "nav-link nav-link-1 font-face-gm"
            }
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "About"
                ? "nav-link active active-link font-face-gm"
                : "nav-link nav-link-2 font-face-gm"
            }
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Projects"
                ? "nav-link active active-link font-face-gm"
                : "nav-link nav-link-3 font-face-gm"
            }
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact"
                ? "nav-link active active-link font-face-gm"
                : "nav-link nav-link-4 font-face-gm"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Resume"
                ? "nav-link active active-link font-face-gm"
                : "nav-link nav-link-5 font-face-gm"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}
