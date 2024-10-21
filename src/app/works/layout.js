import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
        <Script
          src="/asserts/js/jquery-3.6.0.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/asserts/js/jquery-migrate-3.4.0.min.js"
          strategy="afterInteractive"
        />

        {/* <!-- plugins --> */}
        <Script src="/asserts/js/plugins.js" strategy="afterInteractive" />

        {/* <!-- GSAP --> */}
        <Script src="/asserts/js/gsap.min.js" strategy="afterInteractive" />
        <Script
          src="/asserts/js/ScrollSmoother.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/asserts/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/asserts/js/SplitText.min.js"
          strategy="afterInteractive"
        />
        <Script src="/asserts/js/matter.js" strategy="afterInteractive" />
        <Script src="/asserts/js/throwable.js" strategy="afterInteractive" />

        {/* <!-- common scripts --> */}
        <Script
          src="/asserts/js/common_scripts.js"
          strategy="afterInteractive"
        />

        {/* <!-- custom scripts --> */}
        <Script src="/asserts/js/inner_pages.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
