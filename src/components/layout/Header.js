import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import "./css/header.css";
import bar from "../pictures/bar.png";
const Header = props => {
  const { branding } = props;

  return (
    <div className="nav-container">
      <nav className="nav">
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
            <i class="far fa-id-card-alt"></i> CONTACT
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
