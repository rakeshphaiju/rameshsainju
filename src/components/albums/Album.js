import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import Rotate from "react-reveal/Rotate";

import app from "../../base";
import { NewPhoto } from "../admin/NewPhoto";

const db = app.firestore();

export const Album = (props) => {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  
  const clearInputs = () => {
    setEmail("");
    setPassword(" ");
  };

  const authListener = () => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);




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

  const onDelete = (props) => {
    db.collection("albums")
      .doc(album)
      .delete()
      .then(function () {
        console.log("Album successfully deleted!");
        props.history.push('/admin');
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };


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
                <img src={image.url} alt="album" className="largePhoto"/>
              </Rotate>
            </div>
          ))}
        </div>
      </div>
      <footer>
        {user ? (
          <>
            <NewPhoto currentAlbum={album} />
            <button onClick={onDelete}>Drop this album</button>
          </>
        ) : (
          <></>
        )}
      </footer>
    </div>
  );
};
