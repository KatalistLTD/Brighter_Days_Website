import { useState } from "react";
import Email from "emailjs-com"; // Import Email.js library
import ImageEmail from "../assets/email.png";
import ImageCall from "../assets/call.png";
import ImageLocation from "../assets/location.png";
import "./style.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
  };

  const sendEmail = (data) => {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "info@brighterdays.co.ke",
      Password: "8D40D2702FB3D4702DB2A83278517FFA6CE0",
      To: "info@brighterdays.co.ke",
      From: data.email,
      Subject: "New Contact Form",
      Body: `
                First Name: ${data.fname}
                Last Name: ${data.lname}
                Email: ${data.email}
                Phone: ${data.phone}
                Message: ${data.message}
            `,
    }).then(() => {
      alert("Message Sent Successfully");
      // Optionally, reset the form fields after successful submission
      setFormData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
      });
    });
  };

  return (
    <div className="right-j">
      <form onSubmit={handleSubmit} className="email-container">
        <div className="input-box">
          <div className="input-field field">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={formData.fname}
              onChange={handleChange}
            />
            <div className="input-field field">
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-field field">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="textarea-field field">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-j">
          Join Now
        </button>

        <div className="contact-details">
          <span>
            <img src={ImageLocation} alt="" />
            along Ngong - Langata link road
          </span>
          <span>
            <img src={ImageEmail} alt="" />
            info@brighterdays.co.ke
          </span>

          <span>
            <img src={ImageCall} alt="" />
            0724916981
          </span>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
