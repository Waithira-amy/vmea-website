"use client";
import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, Megaphone, Users, ThumbsUp, Network, Award, CheckCircle2 } from "lucide-react";

export default function Sponsors() {
  const generalBenefits = [
    { icon: Megaphone, text: "Brand visibility before, during, and after the event." },
    { icon: Users, text: "Access to a targeted audience." },
    { icon: ThumbsUp, text: "Positive corporate image through community support." },
    { icon: Network, text: "Networking opportunities with leaders, entrepreneurs, creatives, and media." },
    { icon: Award, text: "Recognition as partners in promoting excellence in Meru County." }
  ];

  const packages = [
    {
      name: "PLATINUM SPONSOR",
      badge: "TITLE SPONSOR",
      benefits: [
        '"POWERED BY" BRANDING ON ALL EVENT MATERIALS',
        "LOGO ON ALL PROMOTIONAL MATERIALS",
        "SPEAKING OPPORTUNITY DURING THE EVENT VIP TABLE",
        "BRAND ACTIVATION SPACE",
        "EXTENSIVE SOCIAL MEDIA PROMOTION",
        "MEDIA RECOGNITION"
      ]
    },
    {
      name: "GOLD SPONSOR",
      badge: "PREMIUM",
      benefits: [
        "LOGO ON BANNERS AND POSTERS",
        "STAGE RECOGNITION",
        "VIP TICKETS",
        "SOCIAL MEDIA MENTIONS",
        "BRAND VISIBILITY THROUGHOUT THE EVENT"
      ]
    },
    {
      name: "SILVER SPONSOR",
      badge: "EXECUTIVE",
      benefits: [
        "LOGO ON SELECTED MARKETING MATERIALS",
        "EVENT ACKNOWLEDGEMENTS",
        "COMPLIMENTARY TICKETS",
        "SOCIAL MEDIA RECOGNITION"
      ]
    },
    {
      name: "BRONZE SPONSOR",
      badge: "SUPPORTER",
      benefits: [
        "LOGO ON THE EVENT PROGRAM",
        "CERTIFICATE OF APPRECIATION",
        "SOCIAL MEDIA APPRECIATION POST"
      ]
    }
  ];

  return (
    <section id="sponsors" className="relative z-10 px-6 py-24 w-full bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">Sponsors & <span className="text-[#D4AF37]">Partners</span></h2>
          <div className="inline-block mt-4 border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-6 py-2 rounded-full">
            <span className="text-white/80 text-xs md:text-sm font-bold tracking-widest uppercase">Key Valued Sponsor: <span className="text-[#D4AF37]">Northline Group</span></span>
          </div>
        </div>

        {/* Targeted Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center">01</div>
              <h3 className="font-serif text-xl font-bold text-white">Government & Institutional Partners</h3>
            </div>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0"/> Meru County Government</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0"/> Ministry of Sports, Culture and Arts</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0"/> Tourism Organizations</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0"/> Business Associations</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0"/> Chambers of Commerce</li>
            </ul>
          </div>

          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center">02</div>
              <h3 className="font-serif text-xl font-bold text-white">Corporate Sponsors</h3>
            </div>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0"/> Banks and SACCOs</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0"/> Insurance Companies</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0"/> Beverage Companies</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0"/> Motor Vehicle Dealers</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0"/> Real Estate Companies</li>
            </ul>
          </div>
        </div>

        {/* Sponsor Benefits Grid */}
        <div className="mb-24">
          <h3 className="font-serif text-3xl font-bold text-white text-center mb-10">Sponsor Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {generalBenefits.map((benefit, index) => (
              <div key={index} className="bg-[#111111]/70 border border-[#D4AF37]/20 p-6 rounded-xl flex flex-col items-center text-center hover:border-[#D4AF37]/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <span className="text-white/80 text-xs font-medium leading-relaxed">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Packages */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl font-bold text-white text-center mb-10">Sponsorship Packages</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-[#111111]/80 backdrop-blur-md p-8 rounded-[1.5rem] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300">
                <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-white mb-1">{pkg.name}</h4>
                    <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">{pkg.badge}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    0{index + 1}
                  </div>
                </div>
                <ul className="space-y-4">
                  {pkg.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-3">
                      <span className="text-[#D4AF37] font-bold text-sm mt-0.5">{bIndex + 1}.</span>
                      <span className="text-white/70 text-xs md:text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action with Logo & Contacts */}
        <div className="bg-gradient-to-br from-[#111111] to-[#1A1500] border border-[#D4AF37]/30 p-10 rounded-[2rem] text-center max-w-4xl mx-auto flex flex-col items-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <img src="/logo.png" alt="VMEA Official Logo" className="w-24 h-24 object-contain mb-6 relative z-10 drop-shadow-xl" />
          
          <h3 className="font-serif text-3xl font-bold text-white mb-4 relative z-10">Ready to Partner with VMEA?</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-10 relative z-10 max-w-xl">
            Secure your sponsorship package today and join us in recognizing excellence and inspiring generations across Meru County.
          </p>
          
          {/* Phone Contacts */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-10 w-full">
            <Link href="tel:+254714591468" className="w-full sm:w-auto bg-[#D4AF37] text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" /> +254 714 591468
            </Link>
            <Link href="tel:+254719314805" className="w-full sm:w-auto bg-[#D4AF37] text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" /> +254 719 314 805
            </Link>
          </div>

          {/* Social Links inside Sponsor Block */}
          <div className="relative z-10 border-t border-white/10 pt-8 w-full flex flex-col items-center">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Connect With Us</span>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/p/1AZ1yJYScr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all text-white shadow-lg hover:-translate-y-1">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/p/Db6fIvdIqfY/?igsi=YnE4cjl2M2MzaWkz" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all text-white shadow-lg hover:-translate-y-1">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@voice.ofmeru.exce?_r=1&_t=ZS-99HtzWGog54" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all text-white shadow-lg hover:-translate-y-1">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}