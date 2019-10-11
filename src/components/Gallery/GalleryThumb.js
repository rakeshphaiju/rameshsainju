import React from 'react';
import { Link } from 'react-router-dom';

const GalleryThumb = props => (
  <Link to={props.name} className="">
    <div className="">
      <img src={require('.././pictures/' + props.img)} alt={props.name} />
    </div>
    <h3 className="">{props.name}</h3>
  </Link>
);

export default GalleryThumb;
