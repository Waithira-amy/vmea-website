"use client";
import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, Megaphone, Users, ThumbsUp, Network, Award, CheckCircle2 } from "lucide-react";

export default function Sponsors() {
  // Data extracted directly from the VMEA presentation slides
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

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-[#111111] to-[#1A1500] border border-[#D4AF37]/30 p-10 rounded-[2rem] text-center max-w-3xl mx-auto flex flex-col items-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <ShieldCheck className="w-12 h-12 text-[#D4AF37] mb-6 relative z-10" />
          <h3 className="font-serif text-3xl font-bold text-white mb-4 relative z-10">Ready to Partner with VMEA?</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-8 relative z-10 max-w-xl">
            Secure your sponsorship package today and join us in recognizing excellence and inspiring generations across Meru County.
          </p>
          
          <Link href="mailto:info@vmea.co.ke" className="relative z-10 bg-[#D4AF37] text-black px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] flex items-center gap-3">
            <Mail className="w-5 h-5" /> Apply Now: info@vmea.co.ke
          </Link>
        </div>

      </div>
    </section>
  );
}