"use client";
import React from "react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Categories from "@/components/sections/Categories";
import Gallery from "@/components/sections/Gallery";
import Sponsors from "@/components/sections/Sponsors";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col font-sans overflow-x-hidden">
      {/* 
        DIAGNOSTIC TEST:
        If you get the red screen, put two slashes (//) in front of Navbar below. 
        Save the file. If the red screen goes away, Navbar.tsx is the broken file!
        Repeat this for each component until the site loads.
      */}
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Gallery />
      <Sponsors />
      <Footer />
    </main>
  );
}