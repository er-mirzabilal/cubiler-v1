'use client'
import CustomImage from "@/components/CustomImage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import Progress from "@/components/Progress";
import Image from "next/image";
// import styles from "./page.module.css";
// import '../../public/asserts/js/scripts.js'
// import { useEffect } from "react";
// import $ from 'jquery';

export default function Home() {
  // useEffect(()=>{
  //   if (typeof window !== 'undefined') {  
    
  //   $(function () {
  //       var width = $(window).width();
  //       if (width > 991) {
    
  //           "use strict";
    
  //           $(function () {
  //               let cards = gsap.utils.toArray(".cards .card-item");
        
  //               let stickDistance = 0;
        
  //               let firstCardST = ScrollTrigger.create({
  //                   trigger: cards[0],
  //                   start: "center center"
  //               });
        
  //               let lastCardST = ScrollTrigger.create({
  //                   trigger: cards[cards.length - 1],
  //                   start: "bottom bottom"
  //               });
        
  //               cards.forEach((card, index) => {
  //                   var scale = 1 - (cards.length - index) * 0.025;
  //                   let scaleDown = gsap.to(card, { scale: scale, 'transform-origin': '"50% ' + (lastCardST.start + stickDistance) + '"' });
        
  //                   ScrollTrigger.create({
  //                       trigger: card,
  //                       start: "center center",
  //                       end: () => lastCardST.start + stickDistance,
  //                       pin: true,
  //                       pinSpacing: false,
  //                       ease: "none",
  //                       animation: scaleDown,
  //                       toggleActions: "restart none none reverse"
  //                   });
  //               });
  //           });
    
  //       }
  //   });
  //   }
  
  // },[])
  return (
    <>
      {/* <!-- ==================== Start Loading ==================== --> */}
      <LoadingScreen />
      {/* <!-- ==================== End Loading ==================== --> */}

      <div className="cursor"></div>

      {/* <!-- ==================== Start progress-scroll-button ==================== --> */}
      <Progress />
      {/* <!-- ==================== End progress-scroll-button ==================== --> */}

      {/* <!-- ==================== Start Navbar ==================== --> */}
      <Header />
      {/* <!-- ==================== End Navbar ==================== --> */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* <!-- ==================== Start Header ==================== --> */}

            <header className="header-sa d-flex align-items-center">
              <div className="background"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="caption">
                      <h1>
                        We create award winning{" "}
                        <span className="sub-color">sites</span>
                      </h1>
                      <a
                        href="#0"
                        className="butn butn-md butn-bord butn-rounded mt-40"
                      >
                        <div className="d-flex align-items-center">
                          <span>Play Showreel</span>
                          <span className="icon icon pe-7s-play ml-10 fz-20"></span>
                        </div>
                      </a>
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="text">
                            <p>
                              Hubfolio is a global branding and digital design
                              agency focus on building digital product, services
                              and eCommerce experience
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="imgs">
                      <div className="cube">
                        {/* <img src="/asserts/images/cube.svg" alt="" /> */}
                        <CustomImage src="/asserts/images/cube.svg" />
                      </div>
                      <div className="circle">
                        {/* <img src="/asserts/images/circle-badge.svg" alt="" /> */}
                        <CustomImage src="/asserts/images/circle-badge.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* <!-- ==================== End Header ==================== --> */}

            {/* <!-- ==================== Start services ==================== --> */}

            <section className="services-sa section-padding">
              <div className="container">
                <div className="sec-head mb-100">
                  <div className="row">
                    <div className="col-lg-5">
                      <h6 className="sub-head">Our Services</h6>
                    </div>
                    <div className="col-lg-7">
                      <h4>
                        As a tight-knit team of experts, we create memorable and
                        emotional websites,
                        <span className="sub-color inline">
                          digital experiences, and native apps.
                        </span>
                      </h4>
                      <a
                        href="../inner_pages/services.html"
                        className="butn butn-md butn-bord butn-rounded mt-40"
                      >
                        <div className="d-flex align-items-center">
                          <span>Learn More</span>
                          <span className="icon pe-7s-angle-right ml-10 fz-30"></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="item md-mb50">
                      <div className="cont">
                        <div className="d-flex align-items-center">
                          <div>
                            <h6>
                              Strategy and <br /> Design
                            </h6>
                          </div>
                          <div className="ml-auto">
                            <div className="icon invert">
                              {/* <img
                                src="/asserts/images/bezier-curve-solid.svg"
                                alt=""
                              /> */}
                              <CustomImage src="/asserts/images/bezier-curve-solid.svg" />
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <p>
                            We provide digital solutions as Website
                            Design,Mobile App Design, Landing Page design,
                            Illustration, Animation increase company’s values
                          </p>
                        </div>
                      </div>
                      <div className="img">
                        {/* <img src="/asserts/images/1.png" alt="" /> */}
                        <CustomImage src="/asserts/images/1.png" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="item md-mb50">
                      <div className="cont">
                        <div className="d-flex align-items-center">
                          <div>
                            <h6>
                              Coding and <br /> Implementation
                            </h6>
                          </div>
                          <div className="ml-auto">
                            <div className="icon invert">
                              {/* <img
                                src="/asserts/images/code-solid.svg"
                                alt=""
                              /> */}
                              <CustomImage src="/asserts/images/code-solid.svg" />
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <p>
                            We implement coding with new tech React, Webflow,
                            Wordpress, Shopify, Flutter, iOS, Android and
                            AI-driven applications
                          </p>
                        </div>
                      </div>
                      <div className="img">
                        {/* <img src="/asserts/images/2.png" alt="" />
                         */}
                        <CustomImage src="/asserts/images/2.png" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="item">
                      <div className="cont">
                        <div className="d-flex align-items-center">
                          <div>
                            <h6>
                              SEO/Marketing and <br /> Advertisment
                            </h6>
                          </div>
                          <div className="ml-auto">
                            <div className="icon invert">
                              <CustomImage src="/asserts/images/chart-line-solid.svg" />
                              {/* <img
                                src="/asserts/images/chart-line-solid.svg"
                                alt=""
                              /> */}
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <p>
                            Growth your brand with our SEO/Marketing and
                            advertisment solutions. Help increase the traffic,
                            Google 5* rating and more
                          </p>
                        </div>
                      </div>
                      <div className="img">
                        <CustomImage src="/asserts/images/3.png" />
                        {/* <img src="/asserts/images/3.png" alt="" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End services ==================== --> */}

            {/* <!-- ==================== Start Intro ==================== --> */}

            <section className="intro-sa">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 valign">
                    <div className="img full-width md-mb80">
                      {/* <img src="/asserts/images/intro.png" alt="" /> */}
                      <CustomImage src="/asserts/images/intro.png" />
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-1 valign">
                    <div className="sec-head">
                      <h6 className="sub-head mb-80">Our Philosophy</h6>
                      <h4>
                        We help passionate Founders perfect theirs design &amp;
                        development game.
                        <span className="sub-color inline">
                          Let’s aim for the <br /> top together!
                        </span>
                      </h4>
                      <a
                        href="../inner_pages/about.html"
                        className="butn butn-md butn-bord butn-rounded mt-40"
                      >
                        <div className="d-flex align-items-center">
                          <span>About Hubfolio</span>
                          <span className="icon invert ml-10">
                            <CustomImage src="/asserts/images/arrow-top-right.svg" />
                            {/* <img
                              src="/asserts/images/arrow-top-right.svg"
                              alt=""
                            /> */}
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End Intro ==================== --> */}

            {/* <!-- ==================== Start marquee ==================== --> */}

            <section className="marq-sa section-padding">
              <div className="main-marq shadow-off">
                <div className="slide-har st1">
                  <div className="box">
                    <div className="item">
                      <h2>
                        <span>User Centric Design</span>
                      </h2>
                    </div>
                    <div className="item">
                      <h2>
                        <span>AI-Driven Solutions</span>
                      </h2>
                    </div>
                    <div className="item">
                      <h2>
                        <span>Flexiable Price</span>
                      </h2>
                    </div>
                    <div className="item">
                      <h2>
                        <span>User Centric Design</span>
                      </h2>
                    </div>
                    <div className="item">
                      <h2>
                        <span>AI-Driven Solutions</span>
                      </h2>
                    </div>
                    <div className="item">
                      <h2>
                        <span>Flexiable Price</span>
                      </h2>
                    </div>
                  </div>
                  <div className="box">
                    <div className="item">
                      <h2>
                        <span>User Centric Design</span>
                      </h2>
                    </div>
                    <div className="item">
                      <h2>
                        <span>AI-Driven Solutions</span>
                      </h2>
                    </div>
                    <div className="item">
                      <h2>
                        <span>Flexiable Price</span>
                      </h2>
                    </div>
                    <div className="item">
                      <h2>
                        <span>User Centric Design</span>
                      </h2>
                    </div>
                    <div className="item">
                      <h2>
                        <span>AI-Driven Solutions</span>
                      </h2>
                    </div>
                    <div className="item">
                      <h2>
                        <span>Flexiable Price</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End marquee ==================== --> */}

            {/* <!-- ==================== Start Portfolio ==================== --> */}
            {/* 
           <section className="work-card">
            <div className="container section-padding bord-thin-top-light">
                <div className="sec-head mb-100">
                <div className="row">
                    <div className="col-lg-5">
                    <h6 className="sub-head">Featured Works</h6>
                    </div>
                    <div className="col-lg-7">
                    <h4>
                        Our user-centered design encourages
                        <span className="sub-color inline">
                        productivity &amp; boosts revenue.
                        </span>
                    </h4>
                    </div>
                </div>
                </div>
                <div className="cards">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div className="card-item" key={index}>
                    <div className="row">
                        <div className="col-lg-5">
                        <div className="cont md-mb50">
                            <div>
                            <h5>
                                <a href="../inner_pages/project-details.html">
                                Unerio Residential <br /> Complex Landing page
                                </a>
                            </h5>
                            </div>
                            <div>
                            <p>
                                This paragraph is short description to describe
                                about this project, you can use it to improve SEO
                                or highlight some key result of this project.
                            </p>
                            <div className="mt-40">
                                <a href="#0" className="tag">Development</a>
                                <a href="#0" className="tag">UI/UX</a>
                                <a href="#0" className="tag">Illustration</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-7">
                        <div className="img">
                            <Image src="/asserts/images/1.jpg"  alt="logo"
                width={100}
                height={100}
                layout="responsive"
                style={{ width: "100%", height: "auto" }} />
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                <div className="text-center mt-80">
                <a
                    href="../inner_pages/portfolio-cards.html"
                    className="butn butn-md butn-bord butn-rounded"
                >
                    <div className="d-flex align-items-center">
                    <span>Check Our Portfolio</span>
                    <span className="icon invert ml-10">
                        <CustomImage src="/asserts/images/arrow-top-right.svg"  />
                    </span>
                    </div>
                </a>
                </div>
            </div>
            </section> */}

            <section className="work-card">
              <div className="container section-padding bord-thin-top-light">
                <div className="sec-head mb-100">
                  <div className="row">
                    <div className="col-lg-5">
                      <h6 className="sub-head">Featured Works</h6>
                    </div>
                    <div className="col-lg-7">
                      <h4>
                        Our user-centered design encourages
                        <span className="sub-color inline">
                          productivity &amp; boosts revenue.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="card-item" id="">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="cont md-mb50">
                          <div>
                            <h5 style={{fontSize: '32px',lineHeight: '40px',letterSpacing:'-1px'}}>
                              <a href="../inner_pages/project-details.html">
                                Unerio Residential <br /> Complex Landing page
                              </a>
                            </h5>
                          </div>
                          <div>
                            <p>
                              This paragraph is short description to describe
                              about this project, you can use it to improve SEO
                              or highlight some key result of this project
                            </p>
                            <div className="mt-40">
                              <a href="#0" className="tag">
                                Development
                              </a>
                              <a href="#0" className="tag">
                                UI/UX
                              </a>
                              <a href="#0" className="tag">
                                illustration
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="img">
                          <Image
                            src="/asserts/images/1.jpg"
                            alt="logo"
                            width={100}
                            height={70}
                            layout="responsive"
                            style={{ width: "100%", height: "auto" }}
                          />
                          {/* <img src="/asserts/images/1.jpg" alt="" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-item">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="cont md-mb50">
                          <div>
                            <h5>
                              <a href="../inner_pages/project-details.html">
                                Archin Architecture <br /> Studio
                              </a>
                            </h5>
                          </div>
                          <div>
                            <p>
                              This paragraph is short description to describe
                              about this project, you can use it to improve SEO
                              or highlight some key result of this project
                            </p>
                            <div className="mt-40">
                              <a href="#0" className="tag">
                                Mobile Responsive
                              </a>
                              <a href="#0" className="tag">
                                UX Design
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="img">
                          <Image
                            src="/asserts/images/2_1.jpg"
                            alt="logo"
                            width={100}
                            height={70}
                            layout="responsive"
                            style={{ width: "100%", height: "auto" }}
                          />
                          {/* <img src="/asserts/images/2_1.jpg" alt="" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-item">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="cont md-mb50">
                          <div>
                            <h5>
                              <a href="../inner_pages/project-details.html">
                                Jorger Clarkson - Architect <br /> Personal
                                Portfolio
                              </a>
                            </h5>
                          </div>
                          <div>
                            <p>
                              This paragraph is short description to describe
                              about this project, you can use it to improve SEO
                              or highlight some key result of this project
                            </p>
                            <div className="mt-40">
                              <a href="#0" className="tag">
                                UI/UX
                              </a>
                              <a href="#0" className="tag">
                                Webflow
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="img">
                          <Image
                            src="/asserts/images/3.jpg"
                            alt="logo"
                            width={100}
                            height={70}
                            layout="responsive"
                            style={{ width: "100%", height: "auto" }}
                          />
                          {/* <img src="/asserts/images/3.jpg" alt="" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-item">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="cont md-mb50">
                          <div>
                            <h5>
                              <a href="../inner_pages/project-details.html">
                                DS Freelance Developer
                              </a>
                            </h5>
                          </div>
                          <div>
                            <p>
                              This paragraph is short description to describe
                              about this project, you can use it to improve SEO
                              or highlight some key result of this project
                            </p>
                            <div className="mt-40">
                              <a href="#0" className="tag">
                                Development
                              </a>
                              <a href="#0" className="tag">
                                UI/UX
                              </a>
                              <a href="#0" className="tag">
                                illustration
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="img">
                          <Image
                            src="/asserts/images/4.jpg"
                            alt="logo"
                            width={100}
                            height={70}
                            layout="responsive"
                            style={{ width: "100%", height: "auto" }}
                          />
                          {/* <img src="/asserts/images/4.jpg" alt="" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-80">
                  <a
                    href="../inner_pages/portfolio-cards.html"
                    className="butn butn-md butn-bord butn-rounded"
                  >
                    <div className="d-flex align-items-center">
                      <span>Check Our Portfolio</span>
                      <span className="icon invert ml-10">
                        <CustomImage src="/asserts/images/arrow-top-right.svg" />
                        {/* <img src="/asserts/images/arrow-top-right.svg" alt="" /> */}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End Portfolio ==================== --> */}

            {/* <!-- ==================== Start clients ==================== --> */}

            <section className="clients-sa">
              <div className="container">
                <div className="sec-head mb-100">
                  <h6 className="sub-head">Our Clients &amp; Partners</h6>
                </div>
                <div className="row">
                  <div className="col-lg-2 col-md-4 col-6 md-mb30">
                    <div className="item d-flex align-items-center justify-content-center">
                      <div className="img">
                        <CustomImage src="/asserts/images/1.svg" alt="" />
                        {/* <img src="/asserts/images/1.svg" alt="" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 md-mb30">
                    <div className="item d-flex align-items-center justify-content-center">
                      <div className="img">
                        <CustomImage src="/asserts/images/2.svg" alt="" />
                        {/* <img src="/asserts/images/2.svg" alt="" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 md-mb30">
                    <div className="item d-flex align-items-center justify-content-center">
                      <div className="img">
                        <CustomImage src="/asserts/images/3.svg" alt="" />
                        {/* <img src="/asserts/images/3.svg" alt="" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 sm-mb30">
                    <div className="item d-flex align-items-center justify-content-center">
                      <div className="img">
                        <CustomImage src="/asserts/images/4.svg" alt="" />
                        {/* <img src="/asserts/images/4.svg" alt="" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 sm-mb30">
                    <div className="item d-flex align-items-center justify-content-center">
                      <div className="img">
                        <CustomImage src="/asserts/images/5.svg" alt="" />
                        {/* <img src="/asserts/images/5.svg" alt="" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="item d-flex align-items-center justify-content-center">
                      <div className="cont sub-color">
                        <div className="icon invert">
                          <CustomImage
                            src="/asserts/images/global.svg"
                            alt=""
                          />
                          {/* <img src="/asserts/images/global.svg" alt="" /> */}
                        </div>
                        <span>
                          125+ clients <br /> worldwide
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End clients ==================== --> */}

            {/* <!-- ==================== Start Testimonials ==================== --> */}

            <section className="testimonials-sa section-padding">
              <div className="container">
                <div className="sec-head mb-100">
                  <div className="row">
                    <div className="col-lg-5">
                      <h6 className="sub-head">Testimonials</h6>
                    </div>
                    <div className="col-lg-7">
                      <h4>
                        We’ve helped hundreds of partners, <br /> to achieve
                        their goals and
                        <span className="sub-color inline">
                          stellar feedback, <br /> is our reward!
                        </span>
                      </h4>
                      <div className="gl-rate d-flex align-items-center mt-60">
                        <div className="icon">
                          <CustomImage src="/asserts/images/logo-clutch.svg" />
                          {/* <img src="/asserts/images/logo-clutch.svg" alt="" /> */}
                        </div>
                        <div className="cont">
                          <h6>
                            4.9/5
                            <span className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </span>
                          </h6>
                          <p>Based on 24 reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper testim-swiper swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item">
                        <div>
                          <div className="rate">
                            <h5>
                              5.0
                              <span className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </span>
                            </h5>
                          </div>
                          <div className="mt-30">
                            <h6>
                              A studio with passionate, professional and full
                              creativity. Much more than i’m expect. Great
                              services, high quality products &amp; affordable
                              prices. I’m extremly satisfied!.
                            </h6>
                          </div>
                        </div>
                        <div className="info d-flex align-items-center mt-40 pt-30 bord-thin-top-light">
                          <div>
                            <div className="img-author">
                              <CustomImage src="/asserts/images/avatar1.jpg" />
                              {/* <img src="/asserts/images/avatar1.jpg" alt="" /> */}
                            </div>
                          </div>
                          <div className="info-text">
                            <span>Bradley Gordon</span>
                            <p>CEO &amp; Founder, Archin Studio</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <div>
                          <div className="rate">
                            <h5>
                              5.0
                              <span className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </span>
                            </h5>
                          </div>
                          <div className="mt-30">
                            <h6>
                              Thank you so much for the suppot of Hubfolio team,
                              who have been with our business for more than 3
                              years. A long journey with many exciting
                              experiences and moments. Hubfolio will alway be
                              our 1st choice.
                            </h6>
                          </div>
                        </div>
                        <div className="info d-flex align-items-center mt-40 pt-30 bord-thin-top-light">
                          <div>
                            <div className="img-author">
                              <CustomImage
                                src="/asserts/images/avatar2.jpg"
                                alt=""
                              />
                              {/* <img src="/asserts/images/avatar2.jpg" alt="" /> */}
                            </div>
                          </div>
                          <div className="info-text">
                            <span>Bradley Gordon</span>
                            <p>CEO &amp; Founder, Archin Studio</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <div>
                          <div className="rate">
                            <h5>
                              5.0
                              <span className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </span>
                            </h5>
                          </div>
                          <div className="mt-30">
                            <h6>
                              Hubfolio ability to create a high-quality user
                              interface stands out. It’s something we placed a
                              premium on. Recommended!.
                            </h6>
                          </div>
                        </div>
                        <div className="info d-flex align-items-center mt-40 pt-30 bord-thin-top-light">
                          <div>
                            <div className="img-author">
                              <CustomImage
                                src="/asserts/images/avatar3.jpg"
                                alt=""
                              />
                              {/* <img src="/asserts/images/avatar3.jpg" alt="" /> */}
                            </div>
                          </div>
                          <div className="info-text">
                            <span>Bradley Gordon</span>
                            <p>CEO &amp; Founder, Archin Studio</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End Testimonials ==================== --> */}

            {/* <!-- ==================== Start Awards ==================== --> */}

            <section className="awards-sa section-padding">
              <div className="container">
                <div className="sec-head mb-100">
                  <div className="row">
                    <div className="col-lg-5">
                      <h6 className="sub-head">Awards &amp; Recognition</h6>
                    </div>
                    <div className="col-lg-7">
                      <h4>
                        Efforts to receive worthy rewards, awards &amp;
                        recognition
                        <span className="sub-color inline">
                          help us affirm our brand.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="item-title row">
                    <div className="col-md-4">
                      <div>
                        <h6 className="sub-title">hosted</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h6 className="sub-title">Award title</h6>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-end">
                      <div>
                        <h6 className="sub-title">Date</h6>
                      </div>
                    </div>
                  </div>
                  <div className="item-line row">
                    <div className="col-md-4">
                      <div className="honors">
                        <h6>Awwwards</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="project-title">
                        <h6>SOTY 2023 - 1st Winner</h6>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="project-date">
                        <span>May 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-line row">
                    <div className="col-md-4">
                      <div className="honors">
                        <h6>css awards</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="project-title">
                        <h6>Top 5 Best of eCommerce Websites 2022</h6>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="project-date">
                        <span>Dec 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-line row">
                    <div className="col-md-4">
                      <div className="honors">
                        <h6>Awwwards</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="project-title">
                        <h6>Honor SOTD November, 2022r</h6>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="project-date">
                        <span>Nov 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-line row">
                    <div className="col-md-4">
                      <div className="honors">
                        <h6>Behance Portfolio</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="project-title">
                        <h6>Winner - US Behance Portfolio Review 2021</h6>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="project-date">
                        <span>Aug 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-line row">
                    <div className="col-md-4">
                      <div className="honors">
                        <h6>ui/ux global award</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="project-title">
                        <h6>Top 10 Best of Mobile App Design 2021</h6>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="project-date">
                        <span>Mar 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-line row">
                    <div className="col-md-4">
                      <div className="honors">
                        <h6>fwa us award</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="project-title">
                        <h6>Winner - Best of Architecture Website 2020</h6>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="project-date">
                        <span>Sep 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-80">
                  <a
                    href="../inner_pages/about.html"
                    className="butn butn-md butn-bord butn-rounded"
                  >
                    <div className="d-flex align-items-center">
                      <span>Show More</span>
                      <span className="icon pe-7s-angle-right ml-10 fz-30"></span>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End Awards ==================== --> */}

            {/* <!-- ==================== Start Blog ==================== --> */}

            <section className="blog-sa">
              <div className="container section-padding bord-thin-top-light">
                <div className="sec-head mb-100">
                  <div className="row">
                    <div className="col-lg-5">
                      <h6 className="sub-head">Latest Articles</h6>
                    </div>
                    <div className="col-lg-7">
                      <h4>
                        The place that we share everything related to
                        <span className="sub-color inline">
                          design trends, tips and more.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="item md-mb50">
                      <div className="img fit-img">
                        <CustomImage src="/asserts/images/1_1.jpg" alt="" />
                        {/* <img src="/asserts/images/1_1.jpg" alt="" /> */}
                      </div>
                      <div className="cont mt-30">
                        <h6>
                          <a href="../inner_pages/blog-details.html">
                            Hubfolio agency revolutionizes work with the <br />{" "}
                            power of AI-Driven
                          </a>
                        </h6>
                        <div className="info d-flex align-items-center mt-20">
                          <a href="#0" className="tag">
                            <span>Design Trends</span>
                          </a>
                          <a href="#0" className="date">
                            <span>/ May 15, 2024</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <div className="img fit-img">
                        <CustomImage src="/asserts/images/2.jpg" alt="" />
                        {/* <img src="/asserts/images/2.jpg" alt="" /> */}
                      </div>
                      <div className="cont mt-30">
                        <h6>
                          <a href="../inner_pages/blog-details.html">
                            Common UX painpoints in Dashboard-related <br />{" "}
                            projects
                          </a>
                        </h6>
                        <div className="info d-flex align-items-center mt-20">
                          <a href="#0" className="tag">
                            <span>Experience</span>
                          </a>
                          <a href="#0" className="date">
                            <span>/ May 15, 2024</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End Blog ==================== --> */}

            {/* <!-- ==================== Start Contact ==================== --> */}

            <section className="contact-sa section-padding pt-0">
              <div className="container">
                <div className="box">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="info">
                        <div className="sec-head">
                          <h4>
                            Success is a team play, right?{" "}
                            <span className="sub-color inline">
                              Let’s work together!
                            </span>
                          </h4>
                        </div>
                        <div className="mt-50 md-mb80">
                          <h6>+068 5681 96 96</h6>
                          <span className="d-block sub-color fz-14 mt-10">
                            Call us for urgent
                          </span>
                          <a
                            href="../inner_pages/contact.html"
                            className="butn butn-md butn-bord butn-rounded mt-50"
                          >
                            <div className="d-flex align-items-center">
                              <span>Get Direction</span>
                              <span className="icon invert ml-10">
                                {/* <img
                                  src="/asserts/images/arrow-top-right.svg"
                                  alt=""
                                /> */}
                                <CustomImage
                                  src="/asserts/images/arrow-top-right.svg"
                                  alt=""
                                />
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1">
                      <div className="contact-form">
                        <form
                          id="contact-form"
                          method="post"
                          action="contact.php"
                        >
                          <div className="messages"></div>

                          <div className="controls row">
                            <div className="col-lg-6">
                              <div className="form-group mb-30">
                                <label htmlFor="form_name">
                                  Full Name <span className="star">*</span>
                                </label>
                                <input
                                  id="form_name"
                                  type="text"
                                  name="name"
                                  placeholder="Your full name"
                                  required="required"
                                />
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="form-group mb-30">
                                <label htmlFor="form_email">
                                  Email Address <span className="star">*</span>
                                </label>
                                <input
                                  id="form_email"
                                  type="email"
                                  name="email"
                                  placeholder="Your email address"
                                  required="required"
                                />
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="form-group mb-30">
                                <label htmlFor="form_subject">
                                  Subject <span className="star">*</span>
                                </label>
                                <input
                                  id="form_subject"
                                  type="text"
                                  name="subject"
                                  placeholder="subject"
                                  required="required"
                                />
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="form-group mb-30">
                                <label htmlFor="form_budget">
                                  Your Budget{" "}
                                  <span className="opt sub-color">
                                    (Optional)
                                  </span>
                                </label>
                                <input
                                  id="form_budget"
                                  type="text"
                                  name="budget"
                                  placeholder="A range of budget for project"
                                  required="required"
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="form_message">Message</label>
                                <textarea
                                  id="form_message"
                                  name="message"
                                  placeholder="Write your message here..."
                                  rows="4"
                                  required="required"
                                ></textarea>
                              </div>
                              <div className="mt-60">
                                <button
                                  type="submit"
                                  className="butn butn-md butn-bord butn-rounded"
                                >
                                  <span className="text">
                                    Send Your Message
                                  </span>
                                  <span className="icon invert ml-10">
                                    <CustomImage
                                      src="/asserts/images/arrow-top-right.svg"
                                      alt=""
                                    />
                                    {/* <img
                                      src="/asserts/images/arrow-top-right.svg"
                                      alt=""
                                    /> */}
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End Contact ==================== --> */}
          </main>

          {/* <!-- ==================== Start Footer ==================== --> */}

          <Footer />

          {/* <!-- ==================== End Footer ==================== --> */}
        </div>
      </div>
    </>
  );
}
