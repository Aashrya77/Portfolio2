import React from "react";
import "./Contact.css";
import {
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
export const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <div className="contact-left">
        <div className="heading-contact">
          <p>
            Contact <span>Me</span>
          </p>
        </div>
        <div className="other-contacts">
          <p>
            <BiLogoTelegram className="contact-icon" /> aashryasigdel0@gmail.com
          </p>
          <p>
            <BsFillTelephoneFill className="contact-icon" /> +977-9801431681
          </p>
          <div className="socials">
            <a href="https://www.facebook.com/Aashrya7/" target="_blank">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/aashrya77/" target="_blank">
              <BsInstagram />
            </a>
            <a href="https://github.com/Aashrya77" target="_blank">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-b">
          <form
            action="https://formspree.io/f/xpzgzqdb"
            method="POST"
            className="form"
          >
            <label htmlFor="Name">Name:</label>
            <input type="name" placeholder="Username" name="Name" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="Email" placeholder="Your email" />
            <label htmlFor="Message">Message:</label>
            <textarea
              name="Message"
              id=""
              placeholder="Your message here..."
            ></textarea>
            <button className="sub-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
