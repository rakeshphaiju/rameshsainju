import React, { Component } from 'react'

const API = 'AIzaSyDa0fjI0OIiokU4RdFZPWPgnpdtd34n7vQ'
const channelID = 'UCPiMXPNL1lnCJxZCZKkZNTA'
const result = 5;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

 class Youtube extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);

  }

  clicked=()=>{
    fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
    // console.log(responseJson);
    const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
    this.setState({resultyt});
  
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    console.log(finalURL);
   console.log(this.state.resultyt);
    return (
      <div>
        <button onClick={this.clicked}> Get Videos</button>
        
        {
            this.state.resultyt.map((link, i)=>{
              var frame = <div  key={i} className="youtube"> <iframe title="myFrame"width="560" height="315" src={link} frameBorder="0"allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"allowFullScreen></iframe> </div>
              return frame;
            })
        }

       
        </div>
     
    );
  }
}

export default Youtube;