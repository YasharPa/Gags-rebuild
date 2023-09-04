import React from "react";

function About({ id }) {
  const email = "yasharpashaiy1@gmail.com";
  const gitHub = "https://github.com/YasharPa";
  const linkedinLink = "https://www.linkedin.com/in/yasharpa11";
  return (
    <footer id={id}>
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Me</h1>
          <p>
            If you have any questions or inquiries, feel free to reach out to
            me:
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <h4>Email:</h4>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div className="social-footer">
          <h3>Links</h3>
          <ul>
            <li>
              <p>LinkedIn:</p>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                yasharpa11
              </a>
            </li>
            <li>
              <p>GitHub:</p>
              <a href={gitHub} target="_blank" rel="noopener noreferrer">
                YasharPa
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default About;
