import React, { Component } from "react";
import { browserHistory } from 'react-router';
import "../css/messagelist.css";
import axios from "axios";
import MessageTableRow from "./MessageTableRow";
import auth from "../../auth";


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/message/")
      .then((res) => {
        this.setState({ messages: res.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  messageList() {
    return this.state.messages.map((res, i) => {
      return <MessageTableRow obj={res} key={i} />;
    });
  }

  

  render() {
    return (
      <div>
        <h2> Message List </h2>
        <button className="del-button" onClick={() => {
          auth.logout(()=>{
            browserHistory.push("/admin");
          } )
        }}>Log Out</button>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.messageList()}
         
         </tbody>
        </table>
       
      </div>
    );
  }
}

export default MessageList;
