import localFont from "next/font/local";
import Script from "next/script";
// import "./globals.css";

// Define the fonts outside the RootLayout function
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap"
          rel="stylesheet"
        />
         <link
          href="https://fonts.googleapis.com/css2?family=Six+Caps&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/asserts/css/plugins.css" />
        <link rel="stylesheet" href="/asserts/css/common_style.css" />
        <link rel="stylesheet" href="/asserts/css/home1-style.css" />
        <link rel="stylesheet" href="/asserts/css/inner_pages.css" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
        {/* <!-- common scripts --> */}
        <Script
          src="/asserts/js/common_scripts.js"
          strategy="afterInteractive"
        />
        <Script src="/asserts/js/scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
