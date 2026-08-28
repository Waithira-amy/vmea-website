"use client";
import React from "react";
import Link from "next/link";
import { Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full pt-16 pb-6 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start">
          <Link href="#home" className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-[#D4AF37]" />
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-lg leading-none text-white">VMEA</span>
              <span className="text-[7px] text-[#D4AF37] uppercase tracking-[0.2em] mt-1">AWARDS</span>
            </div>
          </Link>
          <p className="text-white/50 text-xs leading-relaxed pr-8">
            Developing, improving, empowering, and educating individuals into perfect brand ambassadors fit for the industry.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="font-serif font-bold text-base text-white mb-4 border-b border-white/10 pb-2 inline-block">Platform</h4>
          <ul className="space-y-3 text-xs text-white/50">
            <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
            <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">Award Categories</a></li>
            <li><a href="#sponsors" className="hover:text-[#D4AF37] transition-colors">Partners</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-serif font-bold text-base text-white mb-4 border-b border-white/10 pb-2 inline-block">Contact</h4>
          <ul className="space-y-3 text-xs text-white/50">
            <li className="flex items-center gap-3"><span className="text-[#D4AF37]">✉</span> info@vmea.co.ke</li>
            <li className="flex items-center gap-3"><span className="text-[#D4AF37]">🌐</span> @voiceofmeru</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-white/5 text-center flex flex-col items-center gap-2">
        <p className="text-[9px] text-white/40 uppercase tracking-widest">
          © {new Date().getFullYear()} Perfectors Creative Hub. All rights reserved.
        </p>
        <div className="flex gap-4 text-[9px] text-[#D4AF37] uppercase tracking-widest">
          <Link href="#" className="hover:text-white transition-colors">Privacy Terms</Link>
          <Link href="#sponsors" className="hover:text-white transition-colors">Partner With Us</Link>
        </div>
      </div>
    </footer>
  );
}