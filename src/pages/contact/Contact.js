import React from "react";
import "./styles.css";

const Contact = () => (
  <div>
    <h1 className="heading">Let's Get In Touch!</h1>
    <div className="contact-container">
      <div className="contact-item phone">
        <p className="form-label">Phone</p>
        <p className="form-data monospaceFont">
          {/* tel */}
          <a href="tel:+1(312)975 2811">+1(312)975 2811</a>
        </p>
      </div>

      <div className="contact-item email">
        <p className="form-label">Email</p>
        <p className="form-data monospaceFont">
          {/* mail */}
          <a className="mail" href="mailto:Mohmedvaid@gmail.com">
            Mohmedvaid@gmail.com
          </a>
        </p>
      </div>

      <div className="contact-item social-media">
        <p className="form-label">Social Media</p>
        <div className="social-icons">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/mohmedhusain-v-0374b2128/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-linkedin fa-4x linkedin-icon"
              aria-hidden="true"
            ></i>
          </a>
          <a
            className="icon-link"
            href="https://github.com/Mohmedvaid/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-github-square fa-4x github-icon"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>

      <div className="contact-item email-pdf">
        <p className="form-label">
          PDF Resume
          <br />
          (Open In Browser)
        </p>
        <a
          className="icon-link"
          href="assets/resume/Mohmedhusain_Vaid_Resume.pdf"
        >
          <i className="far fa-file fa-4x resume-icon" aria-hidden="true"></i>
        </a>
      </div>
      <div className="contact-item email-doc">
        <p className="form-label">
          Word Doc Resume
          <br />
          (Download)
        </p>
        <a
          className="icon-link"
          href="assets/resume/Mohmedhusain_Vaid_Resume.docx"
        >
          <i className="far fa-file fa-4x resume-icon" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
