import CustomImage from "@/components/CustomImage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import Progress from "@/components/Progress";
import React from "react";

const page = () => {
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

            <header className="about-hed section-padding pb-0">
              <div className="container">
                <div className="caption mb-80">
                  <h1 className="sec-head">
                    <span className="sub-head mr-30">About Us</span> Expert web
                    designers &amp; web developers trained in the digital
                    industry.
                  </h1>
                  <div className="row justify-content-end">
                    <div className="col-lg-5">
                      <div className="text mt-30">
                        <p>
                          Crafting a virtual presence that stands out in the
                          bustling online space requires not only technical
                          skill but a flair for the unique feel each brand
                          holds. With a unique view, she crafts projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="main-marq shadow-off">
                  <div className="slide-har st1">
                    <div className="box">
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                    </div>
                    <div className="box">
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                      <div className="item">
                        <h2>
                          <span>About Us</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fit-img radius-15">
                   {/* <img src="/asserts/images/studio/1.jpg" alt="" /> */}
                   <CustomImage src="/asserts/images/studio/1.jpg" alt="" />
                </div>
              </div>
            </header>

            {/* <!-- ==================== End Header ==================== --> */}

            {/* <!-- ==================== Start Services ==================== --> */}

            <section className="services-dm container-fluid">
              <div className="box sub-bg radius-30 section-padding mt-15">
                <div className="container">
                  <div className="sec-head mb-100">
                    <div className="row">
                      <div className="col-lg-4">
                        <h6 className="sub-head">Our Service Expertise</h6>
                      </div>
                      <div className="col-lg-5">
                        <h3 className="text-indent md-mb30">
                          We help you to build a creative digital business
                        </h3>
                      </div>
                      <div className="col-lg-3">
                        <div className="text">
                          <p>
                            We are a digital marketing agency with expertise,
                            and we’re on a mission to help you take the next
                            step in your business.
                          </p>
                          <a href="#0" className="crv-butn mt-40">
                            <div className="d-flex">
                              <span className="text">Learn More</span>
                              <span className="icon">
                                 {/* <img src="/asserts/images/studio/arrow-top-right.svg" alt="" /> */}
                                 <CustomImage src="/asserts/images/studio/arrow-top-right.svg" alt="" />
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-end">
                    <div className="col-lg-9">
                      <div className="item d-flex align-items-center">
                        <div className="title">
                          <h2>Branding</h2>
                        </div>
                        <div className="text ml-auto">
                          <div className="d-flex align-items-center">
                            <p>
                              Brand Identity, Stragegy &amp; Consult, <br />{" "}
                              Position, Rebrand
                            </p>
                            <div>
                              <div className="icon invert">
                                 {/* <img src="/asserts/images/studio/crown-solid.svg" alt="" /> */}
                                 <CustomImage src="/asserts/images/studio/crown-solid.svg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item d-flex align-items-center">
                        <div className="title">
                          <h2>Design</h2>
                        </div>
                        <div className="text ml-auto">
                          <div className="d-flex align-items-center">
                            <p>
                              Brand Identity, Stragegy &amp; Consult, <br />{" "}
                              Position, Rebrand
                            </p>
                            <div>
                              <div className="icon invert">
                                {/* <img
                                  src="/asserts/images/bezier-curve-solid.svg"
                                  alt=""
                                /> */}
                                <CustomImage
                                  src="/asserts/images/bezier-curve-solid.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item d-flex align-items-center">
                        <div className="title">
                          <h2>Code</h2>
                        </div>
                        <div className="text ml-auto">
                          <div className="d-flex align-items-center">
                            <p>
                              Brand Identity, Stragegy &amp; Consult, <br />{" "}
                              Position, Rebrand
                            </p>
                            <div>
                              <div className="icon invert">
                                 <CustomImage src="/asserts/images/studio/code-solid.svg" alt="" />
                                 {/* <img src="/asserts/images/studio/code-solid.svg" alt="" /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item d-flex align-items-center">
                        <div className="title">
                          <h2>Growth</h2>
                        </div>
                        <div className="text ml-auto">
                          <div className="d-flex align-items-center">
                            <p>
                              Brand Identity, Stragegy &amp; Consult, <br />{" "}
                              Position, Rebrand
                            </p>
                            <div>
                              <div className="icon invert">
                                 <CustomImage src="/asserts/images/studio/chart-line-solid.svg" alt="" />
                                 {/* <img src="/asserts/images/studio/chart-line-solid.svg" alt="" /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End Services ==================== --> */}

            {/* <!-- ==================== Start Intro ==================== --> */}

            <section className="intro-iner section-padding">
              <div className="container">
                <div className="row justify-content-around">
                  <div className="col-lg-5">
                    <div className="img-box">
                      <div className="img fit-img">
                         {/* <img src="/asserts/images/studio/intro1.jpg" alt="" /> */}
                         <CustomImage src="/asserts/images/studio/intro1.jpg" alt="" />
                      </div>
                      <div className="states">
                        <h2 className="mb-10 fw-600">7k+</h2>
                        <span className="text-u fz-12 fw-500">
                          Satisfaction <br /> Clients
                        </span>
                      </div>
                      <div className="just-shape">
                        <div className="shap-right-top">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#0e0f11"
                            ></path>
                          </svg>
                        </div>
                        <div className="shap-left-bottom">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#0e0f11"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="butn-vid d-flex align-items-center">
                        <div className="play-button">
                          <a href="https://youtu.be/AzwC6umvd1s" className="vid">
                            <i className="fas fa-play"></i>
                          </a>
                        </div>
                        <div className="cont">
                          <span>
                            Let&apos;s see <br /> how we did it.
                          </span>
                        </div>
                        <div className="shaps bottom">
                          <div className="shap-right-top">
                            <svg
                              viewBox="0 0 11 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-11 h-11"
                            >
                              <path
                                d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                fill="#0e0f11"
                              ></path>
                            </svg>
                          </div>
                          <div className="shap-left-bottom">
                            <svg
                              viewBox="0 0 11 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-11 h-11"
                            >
                              <path
                                d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                fill="#0e0f11"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="sec-head mb-60">
                      <h6 className="sub-head mb-10">Who we are?</h6>
                      <h3>
                        Elevating brands globally with innovative strategies and
                        visionary design
                      </h3>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item active">
                            <h4 className="accordion-header" id="heading2">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2"
                                aria-expanded="false"
                                aria-controls="collapse2"
                              >
                                What’s Our mission?
                              </button>
                            </h4>
                            <div
                              id="collapse2"
                              className="accordion-collapse collapse show"
                              aria-labelledby="heading2"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  How quick is quick? For most design, we’re
                                  talking 2-3 business days. We balance speed
                                  with quality,ensuring you get top-north design
                                  swiftly
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h4 className="accordion-header" id="heading3">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3"
                                aria-expanded="false"
                                aria-controls="collapse3"
                              >
                                Our Culture &amp; Our Studio
                              </button>
                            </h4>
                            <div
                              id="collapse3"
                              className="accordion-collapse collapse"
                              aria-labelledby="heading3"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  How quick is quick? For most design, we’re
                                  talking 2-3 business days. We balance speed
                                  with quality,ensuring you get top-north design
                                  swiftly
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content" data-tp-throwable-scene="true">
                  <div className="item" data-tp-throwable-el="">
                    <div className="">
                      <span>SEO/Marketing</span>
                    </div>
                  </div>
                  <div className="item" data-tp-throwable-el="">
                    <div className="">
                      <span className="bdark">Motion</span>
                    </div>
                  </div>
                  <div className="item" data-tp-throwable-el="">
                    <div className="icon1">
                       {/* <img src="/asserts/images/studio/s-icon1.svg" alt="" /> */}
                       <CustomImage src="/asserts/images/studio/s-icon1.svg" alt="" />
                    </div>
                  </div>
                  <div className="item" data-tp-throwable-el="">
                    <div className="">
                      <span className="bred">UI/UX Design</span>
                    </div>
                  </div>
                  <div className="item" data-tp-throwable-el="">
                    <div className="">
                       <CustomImage src="/asserts/images/studio/s-icon2.svg" alt="" />
                       {/* <img src="/asserts/images/studio/s-icon2.svg" alt="" /> */}
                    </div>
                  </div>
                  <div className="item" data-tp-throwable-el="">
                    <div className="">
                      <span>Branding</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End Intro ==================== --> */}

            {/* <!-- ==================== Start Team ==================== --> */}

            <div className="team-mp">
              <div className="container section-padding bord-thin-top-light">
                <div className="sec-head mb-80">
                  <div className="row">
                    <div className="col-lg-7">
                      <h6 className="sub-head">Team’s Leaders</h6>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center">
                      <div className="ml-auto">
                        <p>
                          Each products built by passionate hearts. It’s our
                          team!, meet our leader
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item mb-10">
                  <div className="d-flex">
                    <div>
                      <div className="img fit-img">
                         {/* <img src="/asserts/images/studio/1.png" alt="" /> */}
                         <CustomImage src="/asserts/images/studio/1.png" alt="" />
                      </div>
                    </div>
                    <div className="cont">
                      <h2>Jurgen Klopp</h2>
                      <span>CEO Founder</span>
                    </div>
                    <div className="ml-auto">
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item mb-10">
                  <div className="d-flex">
                    <div>
                      <div className="img fit-img">
                         {/* <img src="/asserts/images/studio/2.png" alt="" /> */}
                         <CustomImage src="/asserts/images/studio/2.png" alt="" />
                      </div>
                    </div>
                    <div className="cont">
                      <h2>Rahat Chowhury</h2>
                      <span>CTO &amp; Product Management</span>
                    </div>
                    <div className="ml-auto">
                      <div className="social-icon">
                        <a href="#0">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="#0">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item mb-10">
                  <div className="d-flex">
                    <div>
                      <div className="img fit-img">
                         {/* <img src="/asserts/images/studio/3.png" alt="" /> */}
                         <CustomImage src="/asserts/images/studio/3.png" alt="" />
                      </div>
                    </div>
                    <div className="cont">
                      <h2>Luke Van de Berg</h2>
                      <span>Marketing Director</span>
                    </div>
                    <div className="ml-auto">
                      <div className="social-icon">
                        <a href="#0">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="#0">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                        <a href="#0">
                          <i className="fa-brands fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="d-flex">
                    <div>
                      <div className="img fit-img">
                         <CustomImage src="/asserts/images/studio/4.png" alt="" />
                         {/* <img src="/asserts/images/studio/4.png" alt="" /> */}
                      </div>
                    </div>
                    <div className="cont">
                      <h2>Logan Dang</h2>
                      <span>Creative Director</span>
                    </div>
                    <div className="ml-auto">
                      <div className="social-icon">
                        <a href="#0">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#0">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                        <a href="#0">
                          <i className="fa-brands fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ==================== End Team ==================== --> */}

            {/* <!-- ==================== Start dark box ==================== --> */}

            <section className="container-fluid">
              <div className="section-padding sub-bg radius-30">
                {/* <!-- ==================== Start Testimonials ==================== --> */}

                <div className="testimonials-ds">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="qoute-icon md-mb50">
                          <div className="text">
                             {/* <img src="/asserts/images/studio/Vector_Cricle_Text.svg" alt="" /> */}
                             <CustomImage src="/asserts/images/studio/Vector_Cricle_Text.svg" alt="" />
                          </div>
                          <div className="icon">
                             <CustomImage src="/asserts/images/studio/vector_quote.svg" alt="" />
                             {/* <img src="/asserts/images/studio/vector_quote.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="swiper testim-swiper swiper-container">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="item">
                                <div className="text">
                                  <h4>
                                    “Hubfolio studio ability to create a high
                                    quality UI is stands out. It’s something we
                                    placed a premium on. A studio with
                                    passionate, professional, fun and full
                                    creativity. Recommend!.”
                                  </h4>
                                </div>
                                <div className="info d-flex align-items-center mt-40 pt-30 bord-thin-top-light">
                                  <div>
                                    <div className="img-author">
                                       <CustomImage src="/asserts/images/studio/avatar1.jpg" alt="" />
                                       {/* <img src="/asserts/images/studio/avatar1.jpg" alt="" /> */}
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
                                <div className="text">
                                  <h4>
                                    “Hubfolio studio ability to create a high
                                    quality UI is stands out. It’s something we
                                    placed a premium on. A studio with
                                    passionate, professional, fun and full
                                    creativity. Recommend!.”
                                  </h4>
                                </div>
                                <div className="info d-flex align-items-center mt-40 pt-30 bord-thin-top-light">
                                  <div>
                                    <div className="img-author">
                                       {/* <img src="/asserts/images/studio/avatar2.jpg" alt="" /> */}
                                       <CustomImage src="/asserts/images/studio/avatar2.jpg" alt="" />
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
                                <div className="text">
                                  <h4>
                                    “Hubfolio studio ability to create a high
                                    quality UI is stands out. It’s something we
                                    placed a premium on. A studio with
                                    passionate, professional, fun and full
                                    creativity. Recommend!.”
                                  </h4>
                                </div>
                                <div className="info d-flex align-items-center mt-40 pt-30 bord-thin-top-light">
                                  <div>
                                    <div className="img-author">
                                       {/* <img src="/asserts/images/studio/avatar3.jpg" alt="" /> */}
                                       <CustomImage src="/asserts/images/studio/avatar3.jpg" alt="" />
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
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- ==================== End Testimonials ==================== --> */}

                {/* <!-- ==================== Start clients ==================== --> */}

                <div className="clients-ds mt-100">
                  <div className="container">
                    <div className="sec-head mb-80">
                      <h6 className="sub-head">Partner with +150 brands</h6>
                    </div>
                    <div className="row sm-marg">
                      <div className="col-lg col-md-4 col-6 md-mb30">
                        <div className="item d-flex align-items-center justify-content-center">
                          <div className="img">
                             <CustomImage src="/asserts/images/studio/1.svg" alt="" />
                             {/* <img src="/asserts/images/studio/1.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg col-md-4 col-6 md-mb30">
                        <div className="item d-flex align-items-center justify-content-center">
                          <div className="img">
                             <CustomImage src="/asserts/images/studio/2.svg" alt="" />
                             {/* <img src="/asserts/images/studio/2.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg col-md-4 col-6 md-mb30">
                        <div className="item d-flex align-items-center justify-content-center">
                          <div className="img">
                             <CustomImage src="/asserts/images/studio/3.svg" alt="" />
                             {/* <img src="/asserts/images/studio/3.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg col-md-4 col-6 sm-mb30">
                        <div className="item d-flex align-items-center justify-content-center">
                          <div className="img">
                             <CustomImage src="/asserts/images/studio/4.svg" alt="" />
                             {/* <img src="/asserts/images/studio/4.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg col-md-4 col-6">
                        <div className="item d-flex align-items-center justify-content-center">
                          <div className="img">
                             <CustomImage src="/asserts/images/studio/5.svg" alt="" />
                             {/* <img src="/asserts/images/studio/5.svg" alt="" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- ==================== End clients ==================== --> */}
              </div>
            </section>

            {/* <!-- ==================== End dark box ==================== --> */}
          </main>

          {/* <!-- ==================== Start Footer ==================== --> */}

          <Footer/>

          {/* <!-- ==================== End Footer ==================== --> */}
        </div>
      </div>
    </>
  );
};

export default page;
