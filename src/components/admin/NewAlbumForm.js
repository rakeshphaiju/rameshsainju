import React, { useState } from "react";
import app from "../../base";
import styled from "styled-components";

import "../style.css";

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

const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 150px;
  box-sizing: border-box;
`;

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
      <StyledInput value={albumName} onChange={onAlbumChange} type="text" />
      <StyledButton onClick={onAlbumCreate}>Create new album</StyledButton>
    </>
  );
};
