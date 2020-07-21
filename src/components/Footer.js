import React from "react";

const Footer = () => {
  return (
    <div className="row row2 footer">
      <div className="row-inner footer-inner">
        <div className="footer-container">
          <p>Based in Sydney, Australia. Available worldwide.</p>

          <div className="footer-row footer-personas"></div>

          <div className="footer-row footer-icons">
            <a href="">
              {" "}
              <div className="sidebar-icon">
                <i className="fas fa-film"></i>
              </div>{" "}
            </a>
            <a href="">
              {" "}
              <div className="sidebar-icon">
                <i className="fab fa-facebook-square"></i>
              </div>{" "}
            </a>
            <a href="">
              {" "}
              <div className="sidebar-icon">
                <i className="fab fa-linkedin"></i>
              </div>{" "}
            </a>
          </div>

          <div className="footer-row footer-info">
            <div className="footer-year">
              © Cortex Copywriter <span className="footer-year-num">2020</span>{" "}
              | ABN 341 1599 0520
            </div>
            <div className="footer-sitedeveloper">
              <a>Interaction Design + Code by Liam Key</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
