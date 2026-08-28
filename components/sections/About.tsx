"use client";
import React from "react";
import { Target, Eye, Star, CheckCircle } from "lucide-react";

export default function About() {
  const corePillars = [
    "Business Management & Leadership",
    "Youth Opportunity Initiatives",
    "Property & Real Estate Excellence",
    "Agricultural Innovation & Growth",
    "Healthcare & Wellness Promotion",
    "Arts, Culture & Entertainment",
    "Sports & Athletics Development",
    "Public Service & Governance"
  ];

  return (
    <section id="about" className="relative z-10 px-6 py-24 w-full bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-1.5 mb-4">
            <Star className="w-3 h-3" /> THE VOICE THAT EMPOWERS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">About Us</h2>
          <p className="text-white/70 max-w-3xl mx-auto text-sm leading-relaxed">
            The Voice of Meru Excellence Awards (VMEA) is a dynamic recognition platform committed to professionalism and transformative community impact. We are dedicated to identifying, educating, and honoring the outstanding individuals who serve as the perfect brand ambassadors for our county's brightest future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#111111]/70 p-10 rounded-[1.5rem] border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-300 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              To be a leading agency recognized for excellence in mentoring the young generation, identifying exceptional leadership, and celebrating community innovators. We strive to highlight the unsung heroes who drive real economic and social progress.
            </p>
          </div>
          
          <div className="bg-[#111111]/70 p-10 rounded-[1.5rem] border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-300 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              To empower individuals through professional training, recognize excellence through a transparent awards process, and provide high-quality event coverage in collaboration with institutional partners to inspire a lasting culture of positive impact.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl font-bold text-white mb-8 flex items-center gap-3 text-center justify-center">
             Our Core Focus Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {corePillars.map((pillar, index) => (
              <div key={index} className="bg-[#111111]/40 border border-white/5 p-5 rounded-xl flex items-center gap-3 hover:bg-[#1A1A1A] transition-colors">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-white/80 text-xs font-medium leading-snug">{pillar}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}