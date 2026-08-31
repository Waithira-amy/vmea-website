"use client";
import React from "react";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-end pt-32 pb-12 md:pb-20 overflow-hidden bg-[#050505]">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/vmea-bg.jpg" 
          alt="VMEA Stage" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90" 
        />
        {/* Vertical gradient keeps the bottom dark behind the text boxes, but the center perfectly clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-[#050505]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mt-auto">
        
        {/* Left Side */}
        <div className="flex flex-col items-start bg-[#111111]/80 p-6 md:p-8 rounded-[1.5rem] border border-white/5 shadow-2xl backdrop-blur-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-5">
            <Star className="w-3 h-3" /> 1st Edition
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            VOICE OF MERU <br />
            <span className="text-[#D4AF37]">AWARDS.</span>
          </h1>
          
          <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4">
            Celebrating Excellence, Inspiring Impact, Empowering Meru. Join us in honoring the outstanding individuals and organizations driving positive change across the county.
          </p>

          <Link href="/register" className="bg-[#D4AF37] hover:bg-yellow-400 text-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            PROCEED <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="bg-[#111111]/80 p-8 rounded-[1.5rem] border border-white/5 shadow-2xl flex flex-col items-center text-center w-full max-w-sm backdrop-blur-md lg:justify-self-end">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">Gala Night 2026</h3>
          <div className="w-12 h-1 bg-[#D4AF37] rounded-full mb-6"></div>
          
          <div className="flex gap-4 w-full justify-center mb-5">
            <div className="flex flex-col items-center bg-[#050505] px-4 py-3 rounded-xl border border-white/5 w-20">
              <span className="text-xl font-bold text-white">TBA</span>
              <span className="text-[9px] text-[#D4AF37] uppercase tracking-widest mt-1">Date</span>
            </div>
            <div className="flex flex-col items-center bg-[#050505] px-4 py-3 rounded-xl border border-white/5 w-20">
              <span className="text-xl font-bold text-white">MERU</span>
              <span className="text-[9px] text-[#D4AF37] uppercase tracking-widest mt-1">Venue</span>
            </div>
          </div>
          <p className="text-[9px] text-white/40 uppercase tracking-widest mt-3">The Ultimate Celebration</p>
        </div>
        
      </div>
    </section>
  );
}