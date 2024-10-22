import CustomImage from "@/components/CustomImage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerPage from "@/components/InnerPage";
import LoadingScreen from "@/components/LoadingScreen";
import Progress from "@/components/Progress";
import Head from "next/head";
import React from "react";
// import styles from "/asserts/css/inner_pages.module.css";

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

            <header className="work-hed">
              <div className="container section-padding">
                <div className="caption text-center">
                  <h1>Work Card</h1>
                  <div className="path mt-15">
                    <span>
                      <a href="#">Home</a>
                    </span>
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                    <span className="main-color">Portfolio</span>
                  </div>
                </div>
              </div>
            </header>

            {/* <!-- ==================== End Header ==================== --> */}

            {/* <!-- ==================== Start Portfolio ==================== --> */}

            <section className="work-card section-padding pt-0">
              <div className="container-xxl">
                <div className="cards">
                  <div className="card-item">
                    <div className="img fit-img">
                      <CustomImage src="/asserts/images/works/1.jpg" alt="" />
                      {/* <img src="/asserts/images/works/1.jpg" alt="" /> */}
                      <div className="tags">
                        <a href="#0">Development</a>
                        <a href="#0">UI/UX</a>
                        <a href="#0">illustration</a>
                      </div>
                      <h5 className="bottom">Unerio Residential</h5>
                    </div>
                  </div>
                  <div className="card-item">
                    <div className="img fit-img">
                      <CustomImage src="/asserts/images/works/2.jpg" alt="" />
                      {/* <img src="/asserts/images/works/2.jpg" alt="" /> */}
                      <div className="tags">
                        <a href="#0">Mobile Responsive</a>
                        <a href="#0">UX Design</a>
                      </div>
                      <h5>Archin Studio</h5>
                    </div>
                  </div>
                  <div className="card-item">
                    <div className="img fit-img">
                      <CustomImage src="/asserts/images/works/3.jpg" alt="" />
                      {/* <img src="/asserts/images/works/3.jpg" alt="" /> */}
                      <div className="tags">
                        <a href="#0">UI/UX</a>
                        <a href="#0">Webflow</a>
                      </div>
                      <h5>Jorger Clarkson</h5>
                    </div>
                  </div>
                  <div className="card-item">
                    <div className="img fit-img">
                      <CustomImage src="/asserts/images/works/4.jpg" alt="" />
                      {/* <img src="/asserts/images/works/4.jpg" alt="" /> */}
                      <div className="tags">
                        <a href="#0">Development</a>
                        <a href="#0">UI/UX</a>
                        <a href="#0">illustration</a>
                      </div>
                      <h5 className="bottom left">DS Freelance</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- ==================== End Portfolio ==================== --> */}
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
