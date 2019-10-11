// Import React stuff
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
// Import components
import App from "./App";
import Albums from "./components/album/Albums";
//import Album from "./components/Album";
// import Photo from './components/Photo';
import Cinematography from "./components/Cinematography";
import About from "./components/About";
import Contact from "./components/Contact";
//import Header from "./components/layout/Header";
//import Footer from "./components/layout/Footer";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Albums} />
      <Route exact path="/cinematography" component={Cinematography} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />

      {/*  <Route path=":albumName" component={Album} />
    <Route path=":albumName/:photoId" component={Photo} /> */}
    </Route>
  </Router>,
  document.getElementById("root")
);
