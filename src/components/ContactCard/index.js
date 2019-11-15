import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  // handleSubmit(e) {
  //     console.log("submitted");
  //     e.preventDefault();
  //     const name = document.getElementById('name').value;
  //     const email = document.getElementById('email').value;
  //     const message = document.getElementById('message').value;
  //     axios({
  //         method: "POST",
  //         url: "http://localhost:3002/send",
  //         data: {
  //             name: name,
  //             email: email,
  //             messsage: message
  //         }
  //     }).then((response) => {
  //         if (response.data.msg === 'success') {
  //             alert("Message Sent.");
  //             this.resetForm()
  //         } else if (response.data.msg === 'fail') {
  //             alert("Message failed to send.")
  //         }
  //     })
  // }

  // resetForm() {
  //     document.getElementById('contact-form').reset();
  // }

  render() {
    return (
      <div className="container">

        <form action="/contact" id="contact-form" method="post" role="form">
            
          <fieldset>
            <label for="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />

            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Your email"
              required
            />

            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
              rows="3"
              required
            />

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ContactForm;
