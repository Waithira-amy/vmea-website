"use client";
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-black pt-20 pb-12">
      
      {/* The Logo Image */}
      {/* object-contain ensures the circle never gets cut off on any screen size */}
      <img 
        src="/hero-logo.jpg" 
        alt="Voice of Meru Excellence Awards" 
        className="w-full max-w-3xl lg:max-w-4xl px-6 object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-1000" 
      />
      
    </section>
  );
}