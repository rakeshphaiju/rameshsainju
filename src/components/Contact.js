import React, { Component } from "react";
import TextInputGroup from "../components/layout/TextInputGroup";
import "../components/style.css";

class Contact extends Component {
  state = {
    name: " ",
    email: " ",
    message: " ",

    errors: {}
  };
  render() {
    const { name, email,  message, errors } = this.state;

    return (
      <div className="about">
        <h1>Contact</h1>
        <div className="text-message">
        <p style={{ textDecoration: "underline" }}>Leave a message</p>
        <form>
          <TextInputGroup
            label="Name: "
            name="name"
            placeholder="Enter name..."
            value={name}
          />
          <TextInputGroup
            label="Email Address: "
            name="email"
            placeholder="Enter email..."
            value={email}
          />
          <TextInputGroup
            label="Message: "
            name="message"
            placeholder="Write your message here..."
            value={message}
          /><br/>
          <input
            type="submit"
            value="Submit"
            className="submit-button"
            />

        </form>
        </div>
        <p>
          <h3 style={{textDecoration:"underline"}}>You can also contact Ramesh by following him on social medias.You can find him on:</h3>
          Email: rameshsainju@gmail.com<br/>
          Facebook: Ramesh Sainju<br/>
          Instagram: rameshsainju
        </p>
      </div>
    );
  }
}

export default Contact;
