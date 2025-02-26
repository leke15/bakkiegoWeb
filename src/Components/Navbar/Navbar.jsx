import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../Assets/images/logo.jpg";
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark"
      style={{ backgroundColor: "black" }}
    >
      <div className="container ">
        <a href="#" className="navbar-brand">
          <img src={Logo} alt="Bakkiego Image" style={{ width: "70px" }} />
          Bakkiego
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-text container">
          <div className="navbar-whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
            <a href="http://wa.me/27696680474">+27 696680474</a> 
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarLinks">
          <ul className="navbar-nav">
            <li className="nav-item navbar-links">
              <Link className="nav-link" smooth to="/">
                Home
              </Link>
            </li>

            <li className="nav-item navbar-links">
              <Link className="nav-link" smooth to="/about">
                About
              </Link>
            </li>

            <li className="nav-item navbar-links">
              <Link className="nav-link" smooth to="/services">
                Services
              </Link>
            </li>

            <li className="nav-item navbar-links">
              <Link className="nav-link" smooth to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
