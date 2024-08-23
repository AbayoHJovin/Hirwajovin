import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar"; 
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jovin - Portfolio",
  description: "Welcome to A.H. Jovin's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element { 
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="obJAsyVkd4IxDydC9wOWijY8O1wCeTLiovFsz000bfw" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Abayo Hirwa Jovin's portfolio showcasing software development skills." />
        <meta property="og:title" content="Abayo Hirwa Jovin - Portfolio" />
        <meta property="og:description" content="Jovin is a software developer with a passion for solving complex problems." />
        <meta property="og:image" content="/heroImage.png" />
        <meta property="og:url" content="https://hirwajovin.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abayo Hirwa Jovin",
              "url": "https://hirwajovin.vercel.app",
              "image": "/heroImage.png",
              "description": "Jovin is a software developer with a passion for solving complex problems.",
              "jobTitle": "Software Developer",
            }),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white dark:bg-black">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
