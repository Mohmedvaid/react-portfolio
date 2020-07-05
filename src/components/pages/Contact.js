import React from "react";
import resume from '../assets/My-resume-v1.0.pdf'

const Contact = () => (
  <div>
    <h1 className="heading">Lets Get In Touch!</h1>
    <div className="contact-container">

      <div className="phone">
          <p className="form-label">Phone</p>
          <p className="form-data">+1(312)975 2811</p>
      </div>

      <div className="email">
          <p className="form-label">Email</p>
          <p className="form-data">Mvaid@u.northwestern.edu</p>
      </div>
      
      <div className="social-media">
          <p className="form-label">Social Media</p>
          <div className="social-icons">
              <a style={{color:"lightslategrey"}} href={resume}><i className="far fa-file fa-3x resume-icon" aria-hidden="true"></i></a>
              <a style={{color:"lightslategrey"}} href="https://www.linkedin.com/in/mohmedhusain-v-0374b2128/"><i className="fab fa-linkedin fa-3x linkedin-icon" aria-hidden="true"></i></a>
              <a style={{color:"lightslategrey"}} href="https://github.com/Mohmedvaid/"><i className="fab fa-github-square fa-3x github-icon" aria-hidden="true"></i></a>
          </div>
      </div>
    </div>
  </div>
);

export default Contact;
