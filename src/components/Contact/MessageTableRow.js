import React, { Component } from "react";
import axios from "axios";
import "../css/messagelist.css";
import { browserHistory } from "react-router";

export default class MessageTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  deleteMessage() {
    browserHistory.push('/messages');
    axios
      .delete("http://localhost:4000/message/delete/" + this.props.obj._id)
      .then((res) => {
        console.log("Message removed");
      })
      .catch((error) => {
        console.log(error);
      });

    
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.date}</td>
        <td>{this.props.obj.contact_name}</td>
        <td>{this.props.obj.contact_email}</td>
        <td>{this.props.obj.message}</td>
        <td>
          <button onClick={this.deleteMessage} className="del-button">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
