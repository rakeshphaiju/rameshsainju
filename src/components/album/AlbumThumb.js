import React from 'react';
import { Link } from 'react-router';
import Flip from 'react-reveal/Flip';

const AlbumThumb = props => (
  <Link to={props.name} className="thumb">
    <div className="thumbImage fade">
    <Flip left cascade>
      <img src={require('../../images/' + props.img)} alt={props.name} />
      </Flip>
    </div>
    <h3 className="thumbTitle">{props.name}</h3>
  </Link>
);

export default AlbumThumb;
