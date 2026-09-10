"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-center bg-black pt-32 pb-16 md:pt-40 md:pb-24">
      
      {/* The Logo Image */}
      <img 
        src="/hero-logo.jpg" 
        alt="Voice of Meru Excellence Awards" 
        className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl px-6 object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-1000" 
      />

      {/* Register Button */}
      <Link 
        href="/register" 
        className="mt-10 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:from-yellow-400 hover:to-[#D4AF37] text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300"
      >
        Register Now <ArrowRight className="w-5 h-5" />
      </Link>
      
    </section>
  );
}