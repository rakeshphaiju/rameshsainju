import React, {useState} from 'react'
import firebase from 'firebase'
import app from '../../base'
import styled from 'styled-components'

const db = app.firestore()
const storage = app.storage();

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

export const NewPhoto = ({currentAlbum}) => {
  const [file, setFile] = useState(null)

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const onUpload = async () => {
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    db.collection("albums").doc(currentAlbum).update({
      images: firebase.firestore.FieldValue.arrayUnion({
        name: file.name,
        url: await fileRef.getDownloadURL()
      })
    })
  }

  return <>
    <input type="file" onChange={onFileChange}/>
    <StyledButton onClick={onUpload}>Upload image</StyledButton>
  </>
}