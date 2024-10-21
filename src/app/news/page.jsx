import CustomImage from "@/components/CustomImage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerPage from "@/components/InnerPage";
import LoadingScreen from "@/components/LoadingScreen";
import Progress from "@/components/Progress";
import Head from "next/head";
import React from "react";

const page = () => {
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

            <header class="blog-hed">
              <div class="container section-padding bord-thin-bottom-light">
                <div class="row">
                  <div class="col-lg-7">
                    <div class="caption md-mb30">
                      <h1 class="text-indent">
                        We are a digital agency for visually compelling about
                        stories Hubfolio.
                      </h1>
                    </div>
                  </div>
                  <div class="col-lg-4 offset-lg-1 d-flex align-items-end">
                    <div class="text">
                      <p>
                        Crafting new bright brands, unique visual systems and
                        digital experience focused on a wide range of original
                        collabs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* <!-- ==================== End Header ==================== --> */}

            {/* <!-- ==================== Start Blog ==================== --> */}

            <div class="blog-mp section-padding">
              <div class="container">
                <div class="row xlg-marg">
                  <div class="col-lg-4 bord">
                    <div class="item">
                      <div class="info d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="author-img fit-img">
                              {/* <img src="/asserts/images/news/a1.jpg" alt="" /> */}
                              <CustomImage
                                src="/asserts/images/news/a1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="author-info ml-10">
                            <span>M Moussa</span>
                            <span class="sub-color">editor</span>
                          </div>
                        </div>
                        <div class="date ml-auto">
                          <span class="sub-color">
                            <i class="fa-regular fa-clock mr-15 opacity-7"></i>{" "}
                            12 hours ago
                          </span>
                        </div>
                      </div>
                      <div class="img fit-img mt-30">
                        {/* <img src="/asserts/images/news/1.jpg" alt="" /> */}
                        <CustomImage src="/asserts/images/news/1.jpg" alt="" />
                      </div>
                      <div class="cont mt-30">
                        <h6>
                          <a href="#0">We’re winner SOTY at CSS Award 2023</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 bord">
                    <div class="item">
                      <div class="info d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="author-img fit-img">
                              {/* <img src="/asserts/images/news/a1.jpg" alt="" /> */}
                              <CustomImage
                                src="/asserts/images/news/a1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="author-info ml-10">
                            <span>M Moussa</span>
                            <span class="sub-color">editor</span>
                          </div>
                        </div>
                        <div class="date ml-auto">
                          <span class="sub-color">
                            <i class="fa-regular fa-clock mr-15 opacity-7"></i>{" "}
                            12 hours ago
                          </span>
                        </div>
                      </div>
                      <div class="img fit-img mt-30">
                        {/* <img src="/asserts/images/news/2.jpg" alt="" /> */}
                        <CustomImage src="/asserts/images/news/2.jpg" alt="" />
                      </div>
                      <div class="cont mt-30">
                        <h6>
                          <a href="#0">
                            Common UX painpoints in Dashboard-related projects
                            you must know
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="item">
                      <div class="info d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="author-img fit-img">
                              <CustomImage
                                src="/asserts/images/news/a2.jpg"
                                alt=""
                              />
                              {/* <img src="/asserts/images/news/a2.jpg" alt="" /> */}
                            </div>
                          </div>
                          <div class="author-info ml-10">
                            <span>M Moussa</span>
                            <span class="sub-color">editor</span>
                          </div>
                        </div>
                        <div class="date ml-auto">
                          <span class="sub-color">
                            <i class="fa-regular fa-clock mr-15 opacity-7"></i>{" "}
                            12 hours ago
                          </span>
                        </div>
                      </div>
                      <div class="img fit-img mt-30">
                        <CustomImage src="/asserts/images/news/3.jpg" alt="" />
                        {/* <img src="/asserts/images/news/3.jpg" alt="" /> */}
                      </div>
                      <div class="cont mt-30">
                        <h6>
                          <a href="#0">Visual Website Tips #5</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 bord">
                    <div class="item">
                      <div class="info d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="author-img fit-img">
                              <CustomImage
                                src="/asserts/images/news/a1.jpg"
                                alt=""
                              />
                              {/* <img src="/asserts/images/news/a1.jpg" alt="" /> */}
                            </div>
                          </div>
                          <div class="author-info ml-10">
                            <span>M Moussa</span>
                            <span class="sub-color">editor</span>
                          </div>
                        </div>
                        <div class="date ml-auto">
                          <span class="sub-color">
                            <i class="fa-regular fa-clock mr-15 opacity-7"></i>{" "}
                            12 hours ago
                          </span>
                        </div>
                      </div>
                      <div class="img fit-img mt-30">
                        <CustomImage src="/asserts/images/news/4.jpg" alt="" />
                        {/* <img src="/asserts/images/news/4.jpg" alt="" /> */}
                      </div>
                      <div class="cont mt-30">
                        <h6>
                          <a href="#0">We’re winner SOTY at CSS Award 2023</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 bord">
                    <div class="item">
                      <div class="info d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="author-img fit-img">
                              <CustomImage
                                src="/asserts/images/news/a1.jpg"
                                alt=""
                              />
                              {/* <img src="/asserts/images/news/a1.jpg" alt="" /> */}
                            </div>
                          </div>
                          <div class="author-info ml-10">
                            <span>M Moussa</span>
                            <span class="sub-color">editor</span>
                          </div>
                        </div>
                        <div class="date ml-auto">
                          <span class="sub-color">
                            <i class="fa-regular fa-clock mr-15 opacity-7"></i>{" "}
                            12 hours ago
                          </span>
                        </div>
                      </div>
                      <div class="img fit-img mt-30">
                        <CustomImage src="/asserts/images/news/5.jpg" alt="" />
                        {/* <img src="/asserts/images/news/5.jpg" alt="" /> */}
                      </div>
                      <div class="cont mt-30">
                        <h6>
                          <a href="#0">
                            Common UX painpoints in Dashboard-related projects
                            you must know
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="item">
                      <div class="info d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="author-img fit-img">
                              <CustomImage
                                src="/asserts/images/news/a2.jpg"
                                alt=""
                              />
                              {/* <img src="/asserts/images/news/a2.jpg" alt="" /> */}
                            </div>
                          </div>
                          <div class="author-info ml-10">
                            <span>M Moussa</span>
                            <span class="sub-color">editor</span>
                          </div>
                        </div>
                        <div class="date ml-auto">
                          <span class="sub-color">
                            <i class="fa-regular fa-clock mr-15 opacity-7"></i>{" "}
                            12 hours ago
                          </span>
                        </div>
                      </div>
                      <div class="img fit-img mt-30">
                        <CustomImage src="/asserts/images/news/6.jpg" alt="" />
                        {/* <img src="/asserts/images/news/6.jpg" alt="" /> */}
                      </div>
                      <div class="cont mt-30">
                        <h6>
                          <a href="#0">Visual Website Tips #5</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ==================== End Blog ==================== --> */}
          </main>

          {/* 
    <!-- ==================== Start Footer ==================== --> */}

          <Footer />

          {/* <!-- ==================== End Footer ==================== --> */}
        </div>
      </div>
    </>
  );
};

export default page;
