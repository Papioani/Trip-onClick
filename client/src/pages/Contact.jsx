import React from "react";
import "../components/Contact.css";

export default function Contact() {
  return (
    <div className="container-xl">
      <form>
        <label for="email" class="form-label"></label>
        <input
          type="email"
          id="email"
          class="form-control"
          placeholder="Email address"
        />
        <label for="name" class="form-label"></label>
        <input
          type="name"
          id="name"
          class="form-control"
          placeholder="Full name"
        />
        <label for="text" class="form-label"></label>
        <input
          type="text"
          id="text"
          class="form-control"
          placeholder="¿How can we help? In a few words"
        />
        <label for="message" class="form-label textured-label"></label>
        <input
          type="textarea"
          id="message"
          class="form-control form-control-xl"
          placeholder="Message"
        />
        <br />
        <button>Send</button>
      </form>
    </div>
  );
}
