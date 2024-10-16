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
            <header className="header-studio d-flex align-items-center">
              {/* <div className="background1"></div> */}
              <div className="container">
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
                <h1>Hello , Studio</h1>
              </div>
            </header>
          </main>
          {/* <!-- ==================== Start Footer ==================== --> */}

          <Footer />

          {/* <!-- ==================== End Footer ==================== --> */}
        </div>
      </div>
    </>
  );
};

export default page;
