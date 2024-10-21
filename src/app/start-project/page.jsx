import CustomImage from "@/components/CustomImage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerPage from "@/components/InnerPage";
import LoadingScreen from "@/components/LoadingScreen";
import Progress from "@/components/Progress";
import Head from "next/head";
import React from "react";

const StartProject = () => {
  return (
    <>
      {/* <!-- ==================== Loading css ==================== --> */}
      <InnerPage />
      <Head>
        <link rel="stylesheet" href="/asserts/css/inner_pages.css" />
      </Head>
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

            <header class="contact-hed section-padding pb-0">
              <div class="container">
                <div class="caption mb-80 text-center">
                  <h1 style={{ lineHeight: 1.2 }}>Get In Touch</h1>
                </div>
              </div>
              <div class="container-fluid">
                <div class="google-map">
                  {/* <iframe
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=hollwood&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  ></iframe> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216173.89467018383!2d73.99980194905267!3d32.15793209060126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2983d520eb29%3A0x6fb33af85e7a368!2sGujranwala%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729518150298!5m2!1sen!2s"
                    id="gmap_canvas"
                  ></iframe>
                </div>
              </div>
            </header>

            {/* <!-- ==================== End Header ==================== --> */}

            {/* <!-- ==================== Start Contact ==================== --> */}

            <section class="contact-pg section-padding">
              <div class="container">
                <div class="row">
                  <div class="col-lg-5 valign">
                    <div class="full-width md-mb80">
                      <div class="sec-head md-mb80">
                        <h2 class="text-u">
                          Let&apos;s make your <br /> brand{" "}
                          <span class="fw-200">brilliant!</span>
                        </h2>
                        <p class="mt-20 mb-20">
                          If you would like to work with us or just want to get
                          in touch, we’d love to hear from you!
                        </p>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="morinfo mt-30">
                              <h6 class="mb-15">Address</h6>
                              <p>
                                Besòs 1, 08174 Sant Cugat del Vallès, Barcelona
                              </p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="morinfo mt-30">
                              <h6 class="mb-15">Email</h6>
                              <p>Support@uithemez.com</p>
                            </div>
                          </div>
                        </div>
                        <div class="phone fz-30 fw-600 mt-30 underline main-color">
                          <a href="#0">+1 840 841 25 69</a>
                        </div>
                      </div>
                      <ul class="rest social-text d-flex mt-60 fz-16">
                        <li class="mr-30">
                          <a href="#0" class="hover-this">
                            <span class="hover-anim">Facebook</span>
                          </a>
                        </li>
                        <li class="mr-30">
                          <a href="#0" class="hover-this">
                            <span class="hover-anim">Twitter</span>
                          </a>
                        </li>
                        <li class="mr-30">
                          <a href="#0" class="hover-this">
                            <span class="hover-anim">LinkedIn</span>
                          </a>
                        </li>
                        <li>
                          <a href="#0" class="hover-this">
                            <span class="hover-anim">Instagram</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 offset-lg-1 valign">
                    <div class="full-width">
                      <div class="sec-head mb-50">
                        <h6 class="sub-head">
                          Send a <span class="fw-200">message</span>
                        </h6>
                      </div>
                      <form
                        id="contact-form"
                        method="post"
                        action="contact.php"
                      >
                        <div class="messages"></div>

                        <div class="controls row">
                          <div class="col-lg-6">
                            <div class="form-group mb-30">
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                required="required"
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="form-group mb-30">
                              <input
                                id="form_email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required="required"
                              />
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="form-group mb-30">
                              <input
                                id="form_subject"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="form-group">
                              <textarea
                                id="form_message"
                                name="message"
                                placeholder="Message"
                                rows="4"
                                required="required"
                              ></textarea>
                            </div>
                            <div class="mt-30">
                              <button
                                type="submit"
                                class="butn butn-md butn-bord butn-rounded"
                              >
                                <div class="d-flex align-items-center">
                                  <span>Let&apos;s Talking</span>
                                  <span class="icon ml-10">
                                    {/* <img
                                      src="images/arrow-top-right.svg"
                                      alt=""
                                    /> */}
                                    <CustomImage
                                      src="images/arrow-top-right.svg"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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
};

export default StartProject;
