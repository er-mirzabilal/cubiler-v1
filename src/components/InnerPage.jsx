'use client';
import React, { useEffect } from 'react'

const InnerPage = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "/asserts/css/inner_pages.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }, []);

  return ;
}

export default InnerPage
