import React, { Component } from "react";
import { browserHistory } from 'react-router';

import TextInputGroup from "../layout/TextInputGroup";
import "../css/style.css";
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
      message: " ",

      errors: {}

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
  

    const {contact_name, contact_email, message} = this.state;

    //check error
    if(contact_name === ''){
      this.setState({errors: {contact_name: 'Name is required'}});
      return;
    }

    if(contact_email === ''){
      this.setState({errors: {contact_email: 'Email is required'}});
      return;
    }
    if(message === ''){
      this.setState({errors: {message: 'Message is required'}});
      return;
    }

    const messageObject = {
      contact_name: this.state.contact_name,
      contact_email: this.state.contact_email,
      message: this.state.message
    };
    axios.post('http://localhost:4000/message/add', messageObject)
      .then(res => console.log(res.data.data));
      browserHistory.push('/submitsuccess');
     

    this.setState({ contact_name: '', contact_email: '', message: '', errors: {}})
    

    
  }

  render() {
    return (
      <div className="about">
        <h1>Contact</h1>
        <div className="text-message">
          <p style={{ textDecoration: "underline" }}>Leave a message</p>
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name: "
              name="name"
              placeholder="Enter name..."
              value={this.state.contact_name}
              onChange={this.onChangeName}
              error={this.state.errors.contact_name}
            />
            <TextInputGroup
              label="Email Address: "
              name="email"
              placeholder="Enter email..."
              value={this.state.contact_email}
              onChange={this.onChangeEmail}
              error={this.state.errors.contact_email}
            />
            <TextInputGroup
              label="Message: "
              name="message"
              placeholder="Write your message here..."
              value={this.state.message}
              onChange={this.onChangeMessage}
              error={this.state.errors.message}
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
