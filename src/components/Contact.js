import React, { Component } from "react";
import TextInputGroup from "../components/layout/TextInputGroup";
import "../components/css/style.css";
import axios from "axios";


class Contact extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      contact_name: " ",
      contact_email: " ",
      message: " "

    };
  }

  onChangeName(e) {
    this.setState({ contact_name: e.target.value })
  }

  onChangeEmail(e){
    this.setState({ contact_email: e.target.value })
  }
 
  onChangeMessage(e){
    this.setState({ message: e.target.value })
  }

  onSubmit(e){
    e.preventDefault()

    const messageObject = {
      contact_name: this.state.contact_name,
      contact_email: this.state.contact_email,
      message: this.state.message
    };
    axios.post('http://localhost:4000/message/add', messageObject)
      .then(res => console.log(res.data.data));

    this.setState({ contact_name: '', contact_email: '', message: ''})
  }

  render() {

    return (
      <div className="about">
        <h1>Contact</h1>
        <div className="text-message">
          <p style={{ textDecoration: "underline" }}>Leave a message</p>
          <form onSubmit= {this.onSubmit}>
            <TextInputGroup
              label="Name: "
              name="name"
              placeholder="Enter name..."
              value={this.state.contact_name}
              onChange={this.onChangeName}
            />
            <TextInputGroup
              label="Email Address: "
              name="email"
              placeholder="Enter email..."
              value={this.state.contact_email}
              onChange={this.onChangeEmail}
            />
            <TextInputGroup
              label="Message: "
              name="message"
              placeholder="Write your message here..."
              value={this.state.message}
              onChange={this.onChangeMessage}
            />
            <br />
            <input type="submit" value="Submit" className="submit-button" />
          </form>
        </div>
        <p>
          <h3 style={{ textDecoration: "underline" }}>
            You can also contact Ramesh by following him on social medias.You
            can find him on:
          </h3>
          Email: rameshsainju@gmail.com
          <br />
          Facebook: Ramesh Sainju
          <br />
          Instagram: rameshsainju
        </p>
      </div>
    );
  }
}

export default Contact;
