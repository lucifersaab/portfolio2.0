import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./../CSS/App.css";

export default function Contact({ section3Ref }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  emailjs.init("2ll-ORzF4qHQi_VwC");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_n84q3uk", "template_rearmm4", {
        from_name: name,
        to_name: "hashimfarooq777@gmail.com",
        message: message + "\nsender's mail: " + email,
      })
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent successfully!");

        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Email sending failed:", error);
        console.error("Email sending failed:", error);
      });
  };

  return (
    <>
      <div className="centered-div" style={{ fontSize: "30px" }}>
        CONTACT DETAILS
      </div>

      <div className="centered-div">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="centered-div" style={{ fontSize: "25px" }}>
              Let's get in touch!
            </div>
            <div>
              <label>Name</label>
              <input
                id="name-input"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label ref={section3Ref}>Email</label>
              <input
                id="mail-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Message</label>
              <input
                id="message-input"
                placeholder="Please enter your query"
                value={message}
                // style={{ height: "50px" }}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <button className="sendBtn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
