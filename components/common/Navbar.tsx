"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Award, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#categories", label: "Awards" },
    { href: "#sponsors", label: "Partners" },
    { href: "#portal", label: "Portal" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#050505]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/5" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="#home" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
          <Award className="w-8 h-8 text-[#D4AF37]" />
          <div className="flex flex-col text-left">
            <span className="font-serif font-bold text-xl leading-none text-white tracking-widest">VMEA</span>
          </div>
        </Link>

        {/* Desktop Links (Centered beautifully now that the button is gone) */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-white/80">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors duration-300 hover:text-[#D4AF37]">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 lg:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-sm font-bold uppercase tracking-widest hover:text-[#D4AF37]">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}