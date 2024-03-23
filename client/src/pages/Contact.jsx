import React from "react";
import "../components/Contact.css";

export default function Contact() {
  return (
    <div>
      <div className="container">
        <form>
          <label htmlFor="email" className="form-label"></label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email address"
          />
          <label htmlFor="name" className="form-label"></label>
          <input
            type="name"
            id="name"
            className="form-control"
            placeholder="Full name"
          />
          <label htmlFor="text" className="form-label"></label>
          <input
            type="text"
            id="text"
            className="form-control"
            placeholder="¿How can we help? In a few words"
          />
          <label
            htmlFor="message"
            className="form-label textured-label"
          ></label>
          <input
            type="textarea"
            id="message"
            className="form-control form-control-xl"
            placeholder="Message"
          />
          <br />
          <button class="send-button">Send</button>
        </form>
      </div>
    </div>
  );
}
