import React from "react";

export const Footer = (props) => {
  return (
      <div id="footer">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h3>Newsletter</h3>
                <p>
                  Subscribe to our newsletter and stay in touch with Natural Fizz.
                </p>
                <h3>SUBSCRIBE TO NEWSLETTER</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 footer-info">
            <div className="footer-item">
              <h3>Contact Us</h3>
            </div>
            <div className="footer-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> <a href="#contact">Work with Us</a>
                </span>{" "}
              </p>
            </div>
            <div className="footer-item">
              <p>
                <span>
                  <i className="fa fa-book"></i> <a href="#mission">Our Story</a>
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
