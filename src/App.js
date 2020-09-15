// Import React stuff
import React, { Component } from 'react';
// Import compiled CSS
import "./components/style.css";
import './App.css';
// Import photo album info
import data from './data';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Create main React component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }
  render() {
    // Clone child components giving them props from the state
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        albums: this.state.data,
      })
    );
    return (
      <div className="App">
        <Header branding="RAMESH SAINJU" />
        <div className="container">
          {childrenWithProps}
          <Footer/>
        </div>
        
      </div>
    );
  }
}

export default App;
