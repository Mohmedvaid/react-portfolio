import React from "react";
import "./styles.css"

const Contact = () => (
  <div>
    <h1 className="heading">Lets Get In Touch!</h1>
    <div className="contact-container">

      <div className="phone">
          <p className="form-label">Phone</p>
          <p className="form-data monospaceFont">+1(312)975 2811</p>
      </div>

      <div className="email">
          <p className="form-label">Email</p>
          <p className="form-data monospaceFont">Mohmedvaid@gmail.com</p>
      </div>
      
      <div className="social-media">
          <p className="form-label">Social Media</p>
          <div className="social-icons">
              <a style={{color:"lightslategrey"}} href="https://www.linkedin.com/in/mohmedhusain-v-0374b2128/" target="_blank"><i className="fab fa-linkedin fa-4x linkedin-icon" aria-hidden="true"></i></a>
              <a style={{color:"lightslategrey"}} href="https://github.com/Mohmedvaid/" target="_blank"><i className="fab fa-github-square fa-4x github-icon" aria-hidden="true"></i></a>
          </div>
      </div>

      <div className="email">
          <p className="form-label">PDF Resume</p>
          <a style={{color:"lightslategrey"}} href="/assets/resume/Mohmedhusain_Vaid_Resume.docx" target="_blank"><i className="far fa-file fa-4x resume-icon" aria-hidden="true"></i></a>
      </div>
      <div className="email">
          <p className="form-label">Word Doc Resume</p>
          <a style={{color:"lightslategrey"}} href="/assets/resume/Mohmedhusain_Vaid_Resume.pdf" target="_blank"><i className="far fa-file fa-4x resume-icon" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
);

export default Contact;
