"use client";
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full flex items-center justify-center bg-black pt-32 pb-16 md:pt-40 md:pb-24">
      
      {/* The Logo Image */}
      <img 
        src="/hero-logo.jpg" 
        alt="Voice of Meru Excellence Awards" 
        className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl px-6 object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-1000" 
      />
      
    </section>
  );
}