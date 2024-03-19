import { useState } from "react";
import Email from "emailjs-com"; // Import Email.js library
import ImageEmail from "../assets/email.png";
import ImageCall from "../assets/call.png";
import ImageLocation from "../assets/location.png";
import "./style.css";

function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    phone: "",
    subject: "",
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
                Email: ${data.email}
                Phone: ${data.phone}
                Subject: ${data.subject}
                Message: ${data.message}
            `,
    }).then(() => {
      alert("Message Sent Successfully");
      // Optionally, reset the form fields after successful submission
      setFormData({
        fname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="left-c">
          <div className="contact-heading">
            <div>
              <span className="stroke-text">READY TO </span>
              <span>LEVEL UP</span>
            </div>

            <div>
              <span>YOUR BODY </span>
              <span className="stroke-text">WITH US?</span>
            </div>

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
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-wrap">
              <input
                type="text"
                className="contact-input"
                name="fname"
                placeholder="Full Name"
                value={formData.fname}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrap">
              <input
                type="text"
                className="contact-input"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrap w-100">
              <input
                type="email"
                className="contact-input"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrap w-100">
              <input
                type="text"
                className="contact-input"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrap textarea w-100">
              <textarea
                name="message"
                className="contact-input"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="contact-btn w-100">
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
        <div className="right-c"></div>
      </div>
    </div>
  );
}

export default Form;
