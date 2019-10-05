import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/header.css";
const Header = props => {
  const { branding } = props;

  return (
    <nav className="nav">
      <div className="nav-right">
        <ul>
          <a href="/" className="nav-left">
            {branding}
          </a>
          <li>
            <Link to="/contact" className="nav-link">
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/cinematography" className="nav-link">
              {" "}
              CINEMATOGRAPHY
            </Link>
          </li>

          <li>
            <Link to="/" className="nav-link">
              {" "}
              GALLERY
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.prototypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
