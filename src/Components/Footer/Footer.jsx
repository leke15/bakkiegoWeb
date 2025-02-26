import React from "react";
import Logo from "../../Assets/images/logo.jpg";

function Footer() {
  return (
    <footer
      className="text-white py-3 mt-auto w-100"
      style={{ backgroundColor: "black" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="#" className="navbar-brand">
              <img src={Logo} alt="Bakkiego Image" style={{ width: "70px" }} />
              Bakkiego
            </a>
          </div>
          <div className="col-md-8">
            <ul className="navbar-nav flex-column flex-md-row">
              <li className="nav-item me-md-3">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item me-md-3">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item me-md-3">
                <a href="#" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item me-md-3">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-3">
          © 2024 Bakkiego. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
