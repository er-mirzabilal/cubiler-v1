import React from "react";
import CustomImage from "./CustomImage";

const Footer = () => {
  return (
    <footer className="footer-sa bord-thin-top-light pb-80">
      <div className="container section-padding">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-5">
              <a href="#" className="logo md-mb50">
                <CustomImage src="/asserts/images/Logo-light.svg" alt="" />
                {/* <img src="/asserts/images/Logo-light.svg" alt="" /> */}
              </a>
            </div>
            <div className="col-lg-6">
              <h4>
                We hope to empower user and simplify
                <span className="sub-color inline">their everyday lives.</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="contact-info">
          <div className="row">
            <div className="col-lg-6 offset-lg-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="item">
                    <span className="sub-color">location</span>
                    <p>152 Thatcher Road St, Mahattan, NY 10463, US</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end justify-end">
                  <div className="item">
                    <span className="sub-color">inquiry</span>
                    <p>hello@hubfolio.agency</p>
                    <p>+0685689696</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-5">
              <div className="social-icon">
                <a href="#0">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
                <a href="#0">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href="#0">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="copy sub-color md-mb30">
                <p>
                  © 2024 <a href="#0">Hubfolio Agency</a>. All Right Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-end">
              <div className="links sub-color d-flex justify-content-between">
                <a href="#" className="active">
                  Home
                </a>
                <a href="../inner_pages/portfolio-standard.html">Works</a>
                <a href="../inner_pages/about.html">Studio</a>
                <a href="../inner_pages/blog-standard.html">News</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
