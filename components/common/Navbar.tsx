"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add a slight background blur when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Categories", href: "#categories" },
    { name: "Sponsors", href: "#sponsors" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand & Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="VMEA Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform" 
          />
          <span className="font-serif font-bold text-xl md:text-2xl text-white tracking-widest">
            VMEA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              className="text-white/80 hover:text-[#D4AF37] text-sm font-medium tracking-wide uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#categories" 
            className="bg-[#D4AF37] text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            Vote Now
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#111111] border-b border-white/10 shadow-2xl flex flex-col items-center py-6 gap-6">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#D4AF37] text-lg font-medium tracking-wide uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#categories"
            onClick={() => setIsMobileMenuOpen(false)} 
            className="bg-[#D4AF37] text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 mt-2"
          >
            Vote Now
          </Link>
        </div>
      )}
    </nav>
  );
}