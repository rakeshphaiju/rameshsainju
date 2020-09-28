import React, { Component } from "react";
import "../components/css/messagelist.css";
import axios from "axios";

const Message = props => (
  <tr>
    <td>{props.message.date}</td>
    <td>{props.message.contact_name}</td>
    <td>{props.message.contact_email}</td>
    <td>{props.message.message}</td>
  </tr>
);

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [],
 };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/message/')
      .then((response) => {
        this.setState({ messages: response.data.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  messageList(){
    return this.state.messages.map(function(currentMessage, i){
      return <Message message={currentMessage} key={i} />;
    })
  }

  render(){
    return(
      <div>
        <h2> Message List </h2>
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
          <tbody>
            { this.messageList() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default MessageList;
