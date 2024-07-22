"use client";
import About from "@/components/about";
import Contacts from "@/components/contacts";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contacts />
      <Footer/>
    </div>
  );
}
