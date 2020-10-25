import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import app from '../base';

import { NewAlbumForm } from "./admin/NewAlbumForm";

export const Home = ({ albums }) => {
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
     
       {user ? <> <NewAlbumForm/></> : <> </>}  
         
    </>
  );
};
