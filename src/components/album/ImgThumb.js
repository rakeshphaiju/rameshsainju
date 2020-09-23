import React from "react";
// import { Link } from 'react-router-dom';
import Rotate from 'react-reveal/Rotate';

const ImgThumb = props => (
  <div className="thumb">
    <div className="thumbImage">
      <Rotate top left>
      <img src={require("../../images/" + props.img)} alt={props.cap} />
      </Rotate>
    </div>
  </div>
);

export default ImgThumb;
