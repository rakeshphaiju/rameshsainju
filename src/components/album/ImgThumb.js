
import React from 'react';
// import { Link } from 'react-router-dom';

const ImgThumb = props => (
  <div className="thumb">
    <div className="thumbImgWrap">
      <img src={require('./../images/' + props.img)} alt={props.cap} />
    </div>
    <h3 className="thumbTitle">{props.cap}</h3>
    </div>

);

export default ImgThumb;
