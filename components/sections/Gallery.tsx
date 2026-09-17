"use client";
import React, { useState, useEffect } from "react";
import { Image as ImageIcon, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const WETRANSFER_LINK = "https://collect.wetransfer.com/board/s26b8strcyuwwt7bc20260913050122/latest?token=08b92486-c1a0-406f-8bc7-65617326fe98";

  // List of all 7 images in your public folder
  const images = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
    "/gallery-7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Auto-play the slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="relative bg-[#050505] py-24 px-6 text-white overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/20">
            <ImageIcon className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Event <span className="text-[#D4AF37]">Gallery</span></h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">
            Take a look at the highlights and unforgettable moments from the Voice of Meru Excellence Awards.
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative w-full aspect-video md:h-[600px] bg-[#111111]/50 rounded-3xl overflow-hidden border border-white/10 mb-16 group shadow-2xl backdrop-blur-sm">
          
          {/* Images */}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`VMEA Highlight ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-contain md:object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          {/* Gradient Overlay so arrows and dots are visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#D4AF37] w-8" : "bg-white/50 w-2 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* WeTransfer External Link Section */}
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
            View all photos <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}