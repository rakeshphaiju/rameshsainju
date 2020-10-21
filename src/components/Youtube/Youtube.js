import React, { Component } from "react";
import '../style.css';

const API = "AIzaSyDa0fjI0OIiokU4RdFZPWPgnpdtd34n7vQ";
const channelID = "UCPiMXPNL1lnCJxZCZKkZNTA";
const result = 5;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: []
    };
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(
          obj => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    //console.log(finalURL);
    //console.log(this.state.resultyt);
    return (
      <div>
        {this.state.resultyt.map((link, i) => {
          var frame = (
            <div key={i} className="youtube">
              {" "}
              <center><iframe
                title="myFrame"
                src={link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              </center>{" "}
            </div>
          );
          return frame;
        })}
      </div>
    );
  }
}

export default Youtube;
