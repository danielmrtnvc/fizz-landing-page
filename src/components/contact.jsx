import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import Heading from "./heading";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, phone, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, message);

    {
      /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
    }

    emailjs
      .sendForm(
        "service_3zdmc87",
        "template_fnq1e5x",
        e.target,
        "7QS50qxX92NtAJMga"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-container">
      <Heading title="Let's Collaborate" />

      <div
        id="contact"
        className="contact text-center"
        style={{ marginTop: "6rem" }}
      >
        <div className="contact-image">
          <img
            src="img/contact-image.jpg"
            className="img-responsive"
            alt="contact"
          />
        </div>

        <div className="contact-content">
          <div className="about-text">
            <h2>Contact Us</h2>
            <h3>If you are a wholesaler or a retail store, let's connect.</h3>

            <form
              name="sentMessage"
              validate
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="form-group">
                <p>Name</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>

              <div className="form-group">
                <p>Email</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>

              <div className="form-group">
                <p>Phone</p>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Phone number"
                  required
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>

              <div className="form-group">
                <p>Message</p>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>

              <button type="submit" className="contact-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
