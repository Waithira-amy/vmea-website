import React from "react";
import { Image as ImageIcon, ExternalLink } from "lucide-react";

export default function Gallery() {
  const WETRANSFER_LINK = "https://collect.wetransfer.com/board/s26b8strcyuwwt7bc20260913050122/latest?token=08b92486-c1a0-406f-8bc7-65617326fe98";

  return (
    <section id="gallery" className="relative bg-[#050505] py-24 px-6 text-white overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/20">
            <ImageIcon className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Event <span className="text-[#D4AF37]">Gallery</span></h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">
            Take a look at the highlights and unforgettable moments from the Voice of Meru Excellence Awards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          
          {/* Main Hero Photo */}
          <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-colors aspect-[4/3] md:aspect-auto">
            <img src="/gallery-1.jpg" alt="VMEA Highlight 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Top Right Photo */}
          <div className="md:col-span-2 relative group rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-colors aspect-video md:aspect-auto">
            <img src="/gallery-2.jpg" alt="VMEA Highlight 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* Middle Small Photos */}
          <div className="relative group rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-colors aspect-square md:aspect-auto">
            <img src="/gallery-3.jpg" alt="VMEA Highlight 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative group rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-colors aspect-square md:aspect-auto">
            <img src="/gallery-4.jpg" alt="VMEA Highlight 4" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* Bottom Row */}
          <div className="md:col-span-1 relative group rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-colors aspect-square md:aspect-auto min-h-[250px]">
            <img src="/gallery-5.jpg" alt="VMEA Highlight 5" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="md:col-span-2 relative group rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-colors aspect-video md:aspect-auto">
            <img src="/gallery-6.jpg" alt="VMEA Highlight 6" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="md:col-span-1 relative group rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-colors aspect-square md:aspect-auto">
            <img src="/gallery-7.jpg" alt="VMEA Highlight 7" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          
        </div>

        <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 text-center flex flex-col items-center shadow-2xl">
          <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">Want to see more?</h3>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mb-8">
            These are just a few of the unforgettable moments. We have a full collection of high-quality images from the awards available for you to browse, save, and share.
          </p>
          
          <a 
            href={WETRANSFER_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4AF37] text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)]"
          >
            View Full Collection on WeTransfer <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}