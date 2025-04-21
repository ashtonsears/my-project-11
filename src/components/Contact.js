import React from "react";
import "./Contact.css";

export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "358e2d6d-1eb4-4c85-8f2f-99b78f140520");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <form onSubmit={onSubmit}>
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name here" required></input>

          <label for="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email here" required></input>

          <label for="message">Your Message</label>
          <textarea id="message" name="message" placeholder="Write your message here" required></textarea>
  
          <button id="submit" type="submit">Submit Form</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }