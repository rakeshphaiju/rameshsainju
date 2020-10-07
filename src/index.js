import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory, IndexRoute } from "react-router";
import {Switch, Route, BrowserRouter} from "react-router-dom";

// Import components
import App from "./App";
import Albums from "./components/album/Albums";
import Album from "./components/album/Album";
import Photo from "./components/album/Photo";

import Cinematography from "./components/Cinematography";
import About from "./components/About";
import Contact from "./components/contact/Contact";

import MessageList from "./components/contact/MessageList";
import SubmitSuccess from "./components/contact/SubmitSuccess";
import  {Admin}  from "./admin";
import { ProtectedRoute } from './protected.route';


ReactDOM.render(<BrowserRouter>
  <Router history={browserHistory}>
    <Switch>
    <Route path="/" component={App}>
      <IndexRoute component={Albums} />
      <Route exact path="/cinematography" component={Cinematography} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <ProtectedRoute exact path="/messages" component={MessageList}/>
      <Route exact path="/submitsuccess" component={SubmitSuccess}/>
      <Route exact path="/admin" component={Admin}/>

      <Route path=":albumName" component={Album} />
    </Route>
 
    </Switch>
  </Router>
  </BrowserRouter>,
  document.getElementById("root")
);
