import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import "./css/header.css";
const Header = props => {
  const { branding } = props;

  return (
    <div className="nav-container">
      <nav className="nav">
        <input type="checkbox" className="nav-toggle" />
        <label for="nav-toggle" className="burger-menu">
          <i class="fas fa-bars fa-7x" />
        </label>
        <Link to="/" className="nav-left">
          {branding}
        </Link>
        <div className="nav-right">
          <Link to="/" className="nav-link">
            {" "}
            GALLERY
          </Link>
          <Link to="/cinematography" className="nav-link">
            {" "}
            CINEMATOGRAPHY
          </Link>

          <Link to="/about" className="nav-link">
            ABOUT
          </Link>
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.prototypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
