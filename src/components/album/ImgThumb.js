import React from "react";
// import { Link } from 'react-router-dom';

const ImgThumb = props => (
  <div className="thumb">
    <div className="thumbImage">
      <img src={require("../../images/" + props.img)} alt={props.cap} />
    </div>
  </div>
);

export default ImgThumb;
