import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abayo Hirwa Jovin - Portfolio",
  description: "Welcome to A.H. Jovin's portfolio",
  keywords: "Abayo Hirwa Jovin, Hirwa, Jovin, web developer, portfolio",
  authors: [
    { name: "Abayo Hirwa Jovin", url: "https://hirwajovin.vercel.app" },
  ],
  openGraph: {
    title: "Abayo Hirwa Jovin - Web Developer",
    description: "Explore the portfolio of Abayo Hirwa Jovin, featuring projects in Next.js, React, and more.",
    url: "https://hirwajovin.vercel.app",
    type: "website",
    images: [
      {
        url: "/heroImage.png",
        width: 1200,
        height: 630,
        alt: "Abayo Hirwa Jovin Portfolio",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Abayo Hirwa Jovin,Abayo,Abayo Hirwa, Hirwa, Jovin, web developer, portfolio"
        />
        <meta name="author" content="Abayo Hirwa Jovin" />
        <meta property="og:title" content="Abayo Hirwa Jovin - Web Developer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Abayo Hirwa Jovin"
        />
        <meta property="og:url" content="https://hirwajovin.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/heroImage.png" />
      </head>
      <body className="bg-white dark:bg-black">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
