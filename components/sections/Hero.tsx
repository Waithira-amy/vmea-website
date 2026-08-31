"use client";
import React from "react";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-end pt-32 pb-12 overflow-hidden bg-[#050505]">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/vmea-bg.jpg" 
          alt="VMEA Stage" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/70" />
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-6 flex flex-col lg:flex-row items-end justify-between gap-6 lg:gap-8 mt-auto pb-4">
        
        {/* Left Side - Glass on Mobile, Transparent on Desktop */}
        <div className="w-full lg:max-w-lg flex flex-col items-start p-6 lg:p-2 bg-[#050505]/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none rounded-[1.5rem] lg:rounded-none border border-white/10 lg:border-transparent transition-all">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-5 backdrop-blur-sm">
            <Star className="w-3 h-3" /> 1st Edition
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5 drop-shadow-2xl">
            VOICE OF MERU <br />
            <span className="text-[#D4AF37]">AWARDS.</span>
          </h1>
          
          <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4 drop-shadow-lg">
            Celebrating Excellence, Inspiring Impact, Empowering Meru. Join us in honoring the outstanding individuals and organizations driving positive change across the county.
          </p>

          <Link href="/register" className="bg-[#D4AF37] hover:bg-yellow-400 text-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            PROCEED <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Side - Glass on Mobile, Transparent on Desktop */}
        <div className="w-full lg:max-w-sm p-6 lg:p-2 flex flex-col items-center text-center bg-[#050505]/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none rounded-[1.5rem] lg:rounded-none border border-white/10 lg:border-transparent transition-all">
          <h3 className="font-serif text-2xl font-bold text-white mb-2 drop-shadow-xl">Gala Night 2026</h3>
          <div className="w-12 h-1 bg-[#D4AF37] rounded-full mb-6 shadow-lg"></div>
          
          <div className="flex gap-4 w-full justify-center mb-5">
            <div className="flex flex-col items-center bg-[#050505]/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 w-20 shadow-2xl">
              <span className="text-xl font-bold text-white">TBA</span>
              <span className="text-[9px] text-[#D4AF37] uppercase tracking-widest mt-1">Date</span>
            </div>
            <div className="flex flex-col items-center bg-[#050505]/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 w-20 shadow-2xl">
              <span className="text-xl font-bold text-white">MERU</span>
              <span className="text-[9px] text-[#D4AF37] uppercase tracking-widest mt-1">Venue</span>
            </div>
          </div>
          <p className="text-[9px] text-white/70 uppercase tracking-widest mt-3 drop-shadow-md">The Ultimate Celebration</p>
        </div>
        
      </div>
    </section>
  );
}