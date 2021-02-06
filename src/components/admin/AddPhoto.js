import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import Rotate from "react-reveal/Rotate";

import { app } from "../../base";
import { NewPhoto } from "./NewPhoto";

const db = app.firestore();

export const AddPhoto = () => {
  const [images, setImages] = useState([]);
  const [albumName, setAlbumName] = useState("");

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
            <div key={image.name}>
              <Rotate top left>
                <img src={image.url} alt="album" />
              </Rotate>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <NewPhoto currentAlbum={album} />
      </footer>
    </div>
  );
};
