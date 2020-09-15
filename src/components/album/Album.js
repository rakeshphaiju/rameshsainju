import React from 'react';
import { Link } from 'react-router';
import ImgThumb from './ImgThumb';

const Album = props => {
  // Keep only the data from the clicked on album
  const thisAlbum = props.albums.filter(
    album => album.name === props.params.albumName
  );
  // Pass down props to each image thumbnail
  const photos = thisAlbum[0].photos.map((photo, i) => {
    return (
      <ImgThumb
        key={i}
        id={i}
        img={photo.img}
        albumName={thisAlbum[0].name}
      />
    );
  });
  return (
    <div className="back">
      <p className="arrow">&#10096;</p>
      <Link to="/" id="breadcrumb">
        Back
      </Link>
      <h1 className="title">{thisAlbum[0].name}</h1>
      <div className="albumphoto">{photos}</div>
    </div>
  );
};

export default Album;
