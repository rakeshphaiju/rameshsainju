import React, { useState } from "react";
import app from "../../base";

const db = app.firestore();

export const NewAlbumForm = () => {
  const [albumName, setAlbumName] = useState("");

  const onAlbumChange = (e) => {
    setAlbumName(e.target.value);
  };

  const onAlbumCreate = () => {
    if (!albumName) {
      return;
    }
    db.collection("albums").doc(albumName).set({
      name: albumName,
    });
    setAlbumName("");
  };

  return (
    <>
      <input value={albumName} onChange={onAlbumChange} type="text" />
      <button onClick={onAlbumCreate}>Create new album</button>
    </>
  );
};
