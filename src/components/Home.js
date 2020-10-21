import React, {useState} from "react";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import auth from '../auth';

import { NewAlbumForm } from "./admin/NewAlbumForm";

export const Home = ({ albums }) => {
  let [isLoggedIn, setIsLoggedIn] = useState(false)
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
     
       {isLoggedIn ? <> <NewAlbumForm/></> : <> </>}  
         
    </>
  );
};
