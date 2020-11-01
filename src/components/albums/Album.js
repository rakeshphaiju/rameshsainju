import React, { useState, useEffect } from "react";
import { useRouteMatch, Link, useHistory } from "react-router-dom";
import Rotate from "react-reveal/Rotate";
import styled from "styled-components";


import app from "../../base";
import { NewPhoto } from "../admin/NewPhoto";


const db = app.firestore();

const StyledButton = styled.button`
  background: green;
  color: #fff;
  padding: 10px;
  margin: 5px;
  width: 150px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
`;



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


let history = useHistory();
  
  const onDelete = () => {
    
    db.collection("albums")
      .doc(album)
      .delete()
      .then(() => {
        console.log("Album successfully deleted!");
        history.push("/");
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
            <StyledButton onClick={onDelete}>Drop album</StyledButton>
          </>
        ) : (
          <></>
        )}
      </footer>
    </div>
  );
};
