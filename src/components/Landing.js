import React, {Component} from 'react';
import Gallery from './Gallery/Gallery';



import portrait from './pictures/portrait.jpg';
import pic2 from './pictures/pic2.jpg';
import pic3 from './pictures/pic3.jpg';

class Landing extends Component{
  state = {
    pictures: [
      {path: portrait, alt:'portrait', text:'Portrait'},
      {path:pic2, alt:'pic2', text:'Wildlife'},
      {path:pic3, alt:'pic3', text:'Landscape'}
    ]
  };
  render(){
      const state= this.state;
  return (
    <div className="container">
      <h1>Gallery</h1>
      <Gallery
      path={state.pictures[0].path}
      alt= {state.pictures[0].alt}
      text={state.pictures[0].text}
        />
           <Gallery
       path={state.pictures[1].path}
       alt= {state.pictures[1].alt}
       text={state.pictures[1].text}
        />
      <Gallery
       path={state.pictures[2].path}
       alt= {state.pictures[2].alt}
       text={state.pictures[2].text}
      />
    
    </div>
  )
  }
};

export default Landing; 
/*

import React, {Component} from 'react';
//import {Link} from 'react-router-dom';

import data from './Gallery/data';

class Landing extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }
  render(){
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        album: this.state.data,
      })
      );
      return (
        <div>
          <div className="container">
           <h1>Gallery</h1>
         
          {childrenWithProps}
           </div>
        </div>
      );
  }
}

export default Landing;
*/