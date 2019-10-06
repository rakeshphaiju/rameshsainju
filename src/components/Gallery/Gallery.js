import React from 'react';
import PropTypes from 'prop-types';
import './gallery.css';



const Gallery = ({
  path,
  text,
  alt

}) => {
  return(
    <div className="container">
      <img className="gallery-image" src={path} alt={alt}/>
      <p className="gallery-text"><h2>{text}</h2></p>
    </div>
  );
};

Gallery.propTypes = {
  path: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

Gallery.defaultProps = {
  type: 'text'
};

export default Gallery;