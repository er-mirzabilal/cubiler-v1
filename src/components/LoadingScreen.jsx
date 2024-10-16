'use client';

import React, { useEffect } from 'react'
import { gsap } from 'gsap'; // Import GSAP
import $ from 'jquery';

const LoadingScreen = () => {
  useEffect(() => {
    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text, .loader-wrap-heading .cont", {
      delay: 1.5,
      y: -100,
      opacity: 0,
    })
    .to(svg, {
      duration: 0.5,
      attr: { d: curve },
      ease: "power2.easeIn",
    })
    .to(svg, {
      duration: 0.5,
      attr: { d: flat },
      ease: "power2.easeOut",
    })
    .to(".loader-wrap", {
      y: -1500,
    })
    .to(".loader-wrap", {
      zIndex: -1,
      display: "none",
    });

    const cursor = document.querySelector('.cursor');          

    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };
    window.addEventListener('mousemove', editCursor);    
      $("a, .cursor-pointer").hover(
        function () {
          $(".cursor").addClass("cursor-active");
        }, 
        function () {
          $(".cursor").removeClass("cursor-active");
        }
      );
    return () => {
      tl.kill(); 
      window.removeEventListener('mousemove', editCursor); // Remove the mousemove event listener
      // If using jQuery hover, remove hover functionality (if necessary)
      $("a, .cursor-pointer").off("mouseenter mouseleave");
    };
  }, []);

  return (
    <div className="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>

        <div className="loader-wrap-heading">
          <div className="load-text">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
        </div>
      </div>
  )
}

export default LoadingScreen
