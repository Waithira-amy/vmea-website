"use client";
import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 relative z-10">
        
        {/* Brand / Logo Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="#home" className="flex items-center gap-3 mb-4 group">
            {/* HERE IS YOUR LOGO */}
            <img 
              src="/logo.png" 
              alt="VMEA Logo" 
              className="w-14 h-14 object-contain group-hover:scale-105 transition-transform" 
            />
            <span className="font-serif font-bold text-2xl md:text-3xl leading-none text-white tracking-widest">
              VMEA
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Celebrating and recognizing excellence, innovation, and positive impact across Meru County.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
          <nav className="flex flex-col gap-4 text-center md:text-left">
            <Link href="#home" className="text-white/70 hover:text-white transition-colors text-sm">Home</Link>
            <Link href="#about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</Link>
            <Link href="#categories" className="text-white/70 hover:text-white transition-colors text-sm">Voting Categories</Link>
            <Link href="#sponsors" className="text-white/70 hover:text-white transition-colors text-sm">Sponsors & Partners</Link>
          </nav>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-6">Contact Us</h4>
          <div className="flex flex-col gap-4 mb-8 text-center md:text-left">
            <a href="tel:+254714591468" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4 text-[#D4AF37]" /> +254 714 591468
            </a>
            <a href="tel:+254719314805" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4 text-[#D4AF37]" /> +254 719 314 805
            </a>
          </div>
          
          <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-4">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/share/p/1AZ1yJYScr/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all text-white shadow-md hover:-translate-y-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/p/Db6fIvdIqfY/?igsi=YnE4cjl2M2MzaWkz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all text-white shadow-md hover:-translate-y-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.tiktok.com/@voice.ofmeru.exce?_r=1&_t=ZS-99HtzWGog54" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all text-white shadow-md hover:-translate-y-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright Strip */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
         <p className="text-white/40 text-xs font-medium tracking-wide">© {new Date().getFullYear()} Voice of Meru Excellence Awards. All rights reserved.</p>
         <p className="text-white/40 text-xs font-medium tracking-wide">Powered by Excellence.</p>
      </div>
    </footer>
  );
}