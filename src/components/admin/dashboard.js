
import React from "react";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

import {NewAlbumForm} from './NewAlbumForm';

export const Dashboard = ({ albums }) => {
  return (
    <>
      <div className="thumbContainer">
        {albums.map((album) => (
          <Link to={`/${album.id}`} className="thumb">
            <div className="thumbImage fade" key={album.name}>
              <Flip left cascade>
                <img
                  src={album.images ? album.images[0].url : ""}
                  alt="album"
                />
              </Flip>
              <div className="thumbTitle">{album.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <NewAlbumForm/>
    </>
  );
};
