import React from 'react';
import { Link } from 'react-router';

const Photo = props => {
  const thisAlbum = props.albums.filter(
    album => album.name === props.params.albumName
  );

  const thisPhoto = thisAlbum[0].photos[props.params.photoId];
  return (
    <div>
      <p className="arrow">&#10096;</p>
      <Link to="/" id="breadcrumb">
        Back
      </Link>
      <p className="arrow">&#10096;</p>
      <Link to={`/${props.params.albumName}`} id="breadcrumb">
        {thisAlbum[0].name}

      </Link>
      <h1 className="title">{thisPhoto.cap}</h1>
      <img 
        className="largePhoto"
        src={require('../../images' + thisPhoto.img)}
        alt={thisPhoto.cap}
        />
    </div>
  );
};

export default Photo;