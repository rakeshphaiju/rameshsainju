import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

//import components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Home } from "./components/Home";
import { Album } from "./components/albums/Album";
import { AddNewAlbum } from "./components/admin/AddNewAlbum";
import { Dashboard } from './components/admin/dashboard';
import {AddPhoto} from './components/admin/AddPhoto';

import SubmitSuccess from "./components/contact/SubmitSuccess";

import {AdminLogin} from './components/admin/AdminLogin';

import Cinematography from "./components/Cinematography";
import About from "./components/About";
import Contact from "./components/contact/Contact";

import { app } from "./base";

const db = app.firestore();

function App() {
  const [albums, setAlbums] = useState([
    {
      name: "First album",
      image: "http://placekitten.com/200/200",
    },
  ]);

  useEffect(() => {
    const unmount = db.collection("albums").onSnapshot((snapshot) => {
      const tempAlbums = [];
      snapshot.forEach((doc) => {
        tempAlbums.push({ ...doc.data(), id: doc.id });
      });
      setAlbums(tempAlbums);
    });
    return unmount;
  }, []);


  return (
    <div className="App"> 
    <div className="container">
      <Header branding="RAMESH SAINJU" />
      <Switch>
        <Route exact path="/" render={() => <Home albums={albums} />} />
        <Route exact path="/cinematography" component={Cinematography} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/submitsuccess" component={SubmitSuccess}/>
        <Route exact path="/dashboard" render={() => <Dashboard albums={albums} />} />
        <Route exact path="/admin" component ={AdminLogin}/>

        { /*<Route path = "/:album" component={AddPhoto}/> */}
        <Route path="/:album" component={Album} />
        <Route exact path="/admin" render={() => <AddNewAlbum albums={albums} />} />
      </Switch>

      <Footer />
    </div>
    </div>
  );
}

export default App;
