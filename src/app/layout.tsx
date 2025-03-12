import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import SmoothScrollWrapper from "./SmoothScrollWrapper";


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

export const metadata: Metadata = {
  title: "YourWebsite.Shop - Full Stack Development Agency",
  description: "We build scalable, high-performance web & mobile applications using modern full-stack technologies. Let's bring your ideas to life!",
  keywords: "full stack development, web development, app development, Next.js, React, Node.js, software solutions, scalable applications, react native, expo, cross platform apps",
  robots: "index, follow",
  openGraph: {
    title: "YourWebsite.Shop - Full Stack Development Agency",
    description: "We specialize in cutting-edge full-stack solutions. Build fast, scalable, and secure applications with us. Connect on LinkedIn!",
    url: "https://yourwebsite.shop",
    siteName: "YourWebsite.Shop",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D560BAQHiVQWEb4NKzQ/company-logo_200_200/company-logo_200_200/0/1739299024281/yourwebsiteshop_logo?e=1749686400&v=beta&t=kvsYlYsiCoVDJGLZqPBAs0PYlDYTrtwwtiqOLLB60es",
        width: 1200,
        height: 630,
        alt: "YourWebsite.Shop - Full Stack Development Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YourWebsite.Shop - Full Stack Development Agency",
    description: "We build modern, scalable web & mobile applications. Connect with us on LinkedIn!",
    images: [
      "https://media.licdn.com/dms/image/v2/D560BAQHiVQWEb4NKzQ/company-logo_200_200/company-logo_200_200/0/1739299024281/yourwebsiteshop_logo?e=1749686400&v=beta&t=kvsYlYsiCoVDJGLZqPBAs0PYlDYTrtwwtiqOLLB60es",
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0D0D0D] text-white `}
        >
        {/* <SmoothScrollWrapper> */}

          <Navbar />
          {children}
          <Footer />
        {/* </SmoothScrollWrapper> */}
      </body>
    </html>
  );
}
