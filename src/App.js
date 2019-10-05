import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Cinematography from "./components/Cinematography";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./components/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header branding="RAMESH SAINJU" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/cinematography" component={Cinematography} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
