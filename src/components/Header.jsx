'use client';

import React from "react";
import CustomImage from "./CustomImage";
import { usePathname } from "next/navigation";
import Link from "next/link";

const headerData = [
  { id: "1", name: "Home", url: "/" },
  { id: "2", name: "Studio", url: "/studio" },
  { id: "3", name: "Works", url: "/works" },
  { id: "4", name: "News", url: "/news" },
];

const Header = () => {
    const pathName = usePathname();
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* <!-- Logo --> */}
          <a className="logo" href="#">
            {/* <img src="/asserts/images/Logo-light.svg" alt="logo" /> */}
            <CustomImage src="/asserts/images/Logo-light.svg" />
          </a>
          {/* <!-- navbar links --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {headerData.map((data, index) => (
                <li className="nav-item" key={index}>
                  <a  className={`nav-link ${pathName === data.url ? "active" : ""}`} href={data.url}>
                    {data.name} 
                  </a>
                </li>
              ))}
              {/* <li className="nav-item">
                <a className="nav-link" href="/studio">
                  Studio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/works"
                >
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">
                  News
                </a>
              </li> */}
            </ul>
          </div>
          <div className="topnav d-flex align-items-center">
            <a href="../inner_pages/contact.html" className="butn butn-rounded">
              <div className="d-flex align-items-center">
                <span>Start Project</span>
                <span className="icon ml-10">
                  {/* <img src="/asserts/images/arrow-top-right.svg" alt="" /> */}
                  <CustomImage src="/asserts/images/arrow-top-right.svg" />
                </span>
              </div>
            </a>
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="hamenu">
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container-fluid rest d-flex">
          <div className="menu-links">
            <ul className="main-menu rest">
              <li>
                <div className="o-hidden">
                  <div className="link cursor-pointer dmenu">
                    <span className="fill-text" data-text="Home">
                      Home
                    </span>
                    <i></i>
                  </div>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <a
                        href="../startup_agency/index.html"
                        className="sub-link"
                      >
                        Startup Agency
                      </a>
                    </li>
                    <li>
                      <a
                        href="../creative-studio/index.html"
                        className="sub-link"
                      >
                        Creative Studio
                      </a>
                    </li>
                    <li>
                      <a
                        href="../creative_agency/index.html"
                        className="sub-link"
                      >
                        Creative Agency
                      </a>
                    </li>
                    <li>
                      <a
                        href="../digital-marketing/index.html"
                        className="sub-link"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="../modern_portfolio/index.html"
                        className="sub-link"
                      >
                        Modern Portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        href="../digital_studio/index.html"
                        className="sub-link"
                      >
                        Digital Studio
                      </a>
                    </li>
                    <li>
                      <a
                        href="../modern_agency/index.html"
                        className="sub-link"
                      >
                        Modern Agency
                      </a>
                    </li>
                    <li>
                      <a
                        href="../creative_agency2/index.html"
                        className="sub-link"
                      >
                        Creative Agency 2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="o-hidden">
                  <div className="link cursor-pointer dmenu">
                    <span className="fill-text" data-text="Pages">
                      Pages
                    </span>
                    <i></i>
                  </div>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <a href="../inner_pages/about.html" className="sub-link">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/services.html"
                        className="sub-link"
                      >
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/service-details.html"
                        className="sub-link"
                      >
                        Services Details
                      </a>
                    </li>
                    <li>
                      <a href="../inner_pages/team.html" className="sub-link">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/pricing.html"
                        className="sub-link"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="../inner_pages/faqs.html" className="sub-link">
                        FAQS
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/contact.html"
                        className="sub-link"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="o-hidden">
                  <div className="link cursor-pointer dmenu">
                    <span className="fill-text" data-text="Portfolio">
                      Portfolio
                    </span>
                    <i></i>
                  </div>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <a
                        href="../inner_pages/portfolio-standard.html"
                        className="sub-link"
                      >
                        Standard
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/portfolio-gallery.html"
                        className="sub-link"
                      >
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/portfolio-cards.html"
                        className="sub-link"
                      >
                        Card
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/portfolio-layout2.html"
                        className="sub-link"
                      >
                        Grid 2 Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/portfolio-layout3.html"
                        className="sub-link"
                      >
                        Gid 3 Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/portfolio-layout4.html"
                        className="sub-link"
                      >
                        Grid 4 Column
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/project-details.html"
                        className="sub-link"
                      >
                        Project Details
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="o-hidden">
                  <div className="link cursor-pointer dmenu">
                    <span className="fill-text" data-text="Blog">
                      Blog
                    </span>
                    <i></i>
                  </div>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <a
                        href="../inner_pages/blog-grid.html"
                        className="sub-link"
                      >
                        Blog Grid
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/blog-standard.html"
                        className="sub-link"
                      >
                        Blog Standard
                      </a>
                    </li>
                    <li>
                      <a
                        href="../inner_pages/blog-details.html"
                        className="sub-link"
                      >
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="o-hidden">
                  <a href="../inner_pages/contact.html" className="link">
                    <span className="fill-text" data-text="Contact Us">
                      Contact Us
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="cont-info valign">
            <div className="text-center full-width">
              <div className="logo">
                {/* <img src="/asserts/images/Logo-light_1.svg" alt="" /> */}
                <CustomImage src="/asserts/images/Logo-light_1.svg" />
              </div>
              <div className="social-icon mt-40">
                <a href="#">
                  {" "}
                  <i className="fab fa-facebook-f"></i>{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fab fa-x-twitter"></i>{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fab fa-linkedin-in"></i>{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fab fa-instagram"></i>{" "}
                </a>
              </div>
              <div className="item mt-30">
                <h5>
                  541 Melville Geek, <br /> Palo Alto, CA 94301
                </h5>
              </div>
              <div className="item mt-10">
                <h5>
                  <a href="#0">Hello@email.com</a>
                </h5>
                <h5 className="underline">
                  <a href="#0">+1 840 841 25 69</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
