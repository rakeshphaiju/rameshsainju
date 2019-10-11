import React from 'react';
import GalleryThumb from './GalleryThumb';

const Albums = props => {

  const albums = props.albums.map((album, i) => {
    return(
      <GalleryThumb name= {album.name} img = {album.photos[0].img} id={i} key={i} />
       
    );
  });
    return <div>{albums}</div>;
  
};


export default Albums;