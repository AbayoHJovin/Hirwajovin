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
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Abayo Hirwa Jovin" />
        <meta
          property="og:description"
          content="Jovin is a software developer with a passion for solving complex problems."
        />
        <meta property="og:image" content="/heroImage.png" />
        <meta property="og:url" content="https://hirwajovin.vercel.app" />
        <link rel="icon" href="./favicon.ico" /> {/* Moved this inside <head> for proper placement */}
      </head>
      <body className="bg-white dark:bg-black">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
