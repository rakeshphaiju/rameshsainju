import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory, IndexRoute } from "react-router";
import {Switch, Route} from "react-router-dom";

// Import components
import App from "./App";
import Albums from "./components/album/Albums";
import Album from "./components/album/Album";
import Photo from "./components/album/Photo";

import Cinematography from "./components/Cinematography";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/layout/NotFound";


ReactDOM.render(
  <Router history={browserHistory}>
    <Switch>
    <Route path="/" component={App}>
      <IndexRoute component={Albums} />
      <Route exact path="/cinematography" component={Cinematography} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />

      <Route path=":albumName" component={Album} />
      <Route path=":albumName/:photoId" component={Photo} />
     <Route component={NotFound}/>
    </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
