import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import Rotate from "react-reveal/Rotate";
import auth from "../../auth";

import { app } from "../../base";
import { NewPhoto } from "../admin/NewPhoto";

const db = app.firestore();

export const Album = (props) => {
  const [images, setImages] = useState([]);
  const [albumName, setAlbumName] = useState("");
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  const match = useRouteMatch("/:album");
  const { album } = match.params;

  useEffect(() => {
    const unmount = db
      .collection("albums")
      .doc(album)
      .onSnapshot((doc) => {
        setImages(doc.data().images || []);
      });
    return unmount;
  });

  return (
    <div className="back">
      <p className="arrow">&#10096;</p>
      <Link to="/" id="breadcrumb">
        Back
      </Link>
      <div className="thumb">
        <div>
          <div className="title">{albumName}</div>
          {images.map((image) => (
            <div key={image.name} className="">
              <Rotate top left>
                <img src={image.url} alt="album" />
              </Rotate>
            </div>
          ))}
        </div>
      </div>
      <footer>
        {
          (isLoggedIn ? (
            <>
              <NewPhoto currentAlbum={album} />
              
            </>
          ) : (
            <></>
          ))
        }
      </footer>
    </div>
  );
};
