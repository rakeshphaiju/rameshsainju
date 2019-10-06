import React, {Component} from 'react';
import Gallery from './Gallery/Gallery';
import pic1 from './Pictures/pic1.jpg';
import pic2 from './Pictures/pic2.jpg';

class Landing extends Component{
  render(){
  return (
    <div className="container">
      <h1>Gallery</h1>
      <Gallery
      path={pic1}
      alt='pic1'
      text='Portrait'
        />
           <Gallery
      path={pic2}
      alt='pic1'
      text='WildLife'
        />
    </div>
  )
  }
};

export default Landing;
