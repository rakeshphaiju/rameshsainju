import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router';
import "./css/header.css";
const Header = props => {
  const { branding } = props;

  return (
    <div className="nav-container">
      <nav className="nav">
        <Link to="/" className="nav-left">
          {branding}
        </Link>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="burger-menu">
        <i className="fas fa-bars"></i>
        </label>
        <div className="nav-right">
          <Link to="/" className="nav-link">
            {" "}
            Gallery
          </Link>
          <Link to="/cinematography" className="nav-link">
            {" "}
            Cinematography
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
           Contact
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
