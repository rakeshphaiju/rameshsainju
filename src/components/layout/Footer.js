import React from 'react';
import "./css/footer.css";

 const Footer = () => {
  return (
    <div className="foot">
      <hr/>
      <p className="social-icons">

       <a href="https://www.instagram.com/rameshsainju/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-instagram fa-3x"/> </a>&nbsp;	&nbsp;	
        <a href="https://www.facebook.com/rameshsainju" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-square fa-3x"/></a>
      </p>
      <p className="foot-text">
        copyright(c) 2019 Ramesh Sainju</p>

    </div>
  );
};

export default Footer;