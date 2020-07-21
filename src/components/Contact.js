import React from "react";

const Contact = () => {
  return (
    <div id="anchor-contact" className="row row1 contact-section-form">
      <div className="row-inner contact-section-inner">
        <div className="contact-section-container">
          <div className="contact-section-image"></div>
          <div className="contact-section-text">
            Pick my<span className="text-italic"> brain/cortex </span> and let's
            get <span className="text-bolder">started</span> on your project
          </div>
          <div className="contact-social-container">
            <div className="contact-social contact-social-email">
              <div className="contact-social-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-social-title">bilal@test.comn</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
