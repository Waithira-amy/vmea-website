"use client";
import React, { useState } from "react";
import { Trophy, ChevronLeft } from "lucide-react";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categoryList = [
    { 
      title: "Entertainment", 
      count: "23 Sub-Categories", // Updated count
      desc: "Recognizing outstanding talent in media, arts, and creative industries.",
      subCategories: [
        "Male Artist of the Year", "Female Artist of the Year", "Male Actor of the Year", 
        "Female Actor of the Year", "Comedian of the Year", "DJ of the Year", 
        "Upcoming Artist of the Year", "Content Creator of the Year", "Radio Presenter of the Year", 
        "Best Photography/Videographer", "Artist of the Year", "Best Cultural Preservation Initiative", 
        "Journalist of the Year", "Best Local Media House", "Photographer of the Year", 
        "Fashion Designer of the Year", "Dancers", "Vixens", "Event Organizers", 
        "Producers", "Director", "Song Writer", "Poets and Writers"
      ]
    },
    {
      title: "Media and Journalism",
      count: "22 Sub-Categories",
      desc: "Honoring excellence in broadcasting, journalism, and digital media.",
      subCategories: [
        "Best Radio Presenter", "Best Radio Station", "Best TV Presenter", 
        "Best TV Station", "Best Journalist", "Best News Anchor", 
        "Best Investigative Journalist", "Best Entertainment Journalist", "Best Sports Journalist", 
        "Best Political Journalist", "Best Digital Journalist", "Best Blogger", 
        "Best Content Creator", "Best YouTube Channel", "Best Podcast", 
        "Best Online Media Platform", "Best Social Media Personality", "Media Personality of the Year", 
        "Rising Media Personality of the Year", "Media House of the Year", "Best Photography & Visual Storytelling", 
        "Best Videographer"
      ]
    },
    {
      title: "Fashion",
      count: "12 Sub-Categories",
      desc: "Celebrating trendsetters, designers, and icons in the fashion industry.",
      subCategories: [
        "Fashion Designer of the Year", "Best Fashion Brand of the Year", "Fashion Model of the Year", 
        "Male Fashion Icon of the Year", "Female Fashion Icon of the Year", "Best Dressed Personality of the Year", 
        "Best Traditional Wear/Attire", "Emerging Fashion Talent of the Year", "Fashion Content Creator of the Year", 
        "Fashion Photographer of the Year", "Best Stylist of the Year", "Fashion Influencer of the Year"
      ]
    },
    {
      title: "Beauty",
      count: "8 Sub-Categories",
      desc: "Highlighting top professionals and brands in the beauty and grooming sector.",
      subCategories: [
        "Makeup Artist of the Year", "Beauty Influencer of the Year", "Beauty Content Creator of the Year", 
        "Beauty Salon of the Year", "Barber of the Year", "Nail Artist of the Year", 
        "Hair Stylist of the Year", "Beauty Brand of the Year"
      ]
    },
    { 
      title: "Agriculture & Farming", 
      count: "15 Sub-Categories",
      desc: "Celebrating excellence in crop production, livestock, and agribusiness.",
      subCategories: [
        "Farmer of the Year", "Best Dairy Farmer", "Best Coffee Farmer", 
        "Best Miraa (Khat) Farmer", "Best Tea Farmer", "Best Horticulture Farmer", 
        "Horticulture Farmer of the Year", "Best Poultry Farmer", "Best Livestock Farmer", 
        "Agribusiness Innovator of the Year", "Young Farmer of the Year", "Woman Farmer of the Year", 
        "Best Cooperative Society", "Agroforestry Champion", "Best Irrigation Project"
      ]
    },
    { 
      title: "Leadership", 
      count: "13 Sub-Categories", // Updated count
      desc: "Honoring outstanding political, civil, and community leaders.",
      subCategories: [
        "Best Performing MP", "Best Performing MCA", "Most Influential Youth Leader", 
        "Leader of the Year", "Lifetime Leadership Achievement Award", "Public Servant of the Year", 
        "Best Ward Development Project", "Community Service Award", "Transparency & Accountability Award", 
        "Best NGO/CBO", "Peace Ambassador Award", "Chief/Assistant Chief of the Year", "Promising Aspirant"
      ]
    },
    { 
      title: "Business & Entrepreneurship", 
      count: "15 Sub-Categories",
      desc: "Highlighting innovators, enterprises, and corporate leaders.",
      subCategories: [
        "Entrepreneur of the Year", "Young Entrepreneur of the Year", "Woman Entrepreneur of the Year", 
        "Best SME", "Best Startup", "Business Innovation Award", 
        "Best Retail Business", "Best Hospitality Business", "Best Transport & Logistics Business", 
        "Best Manufacturing Enterprise", "Best Export Business", "Best CSR Initiative", 
        "Business Lifetime Achievement Award", "Bank", "Best Distributor of the Year"
      ]
    },
    { 
      title: "Education", 
      count: "10 Sub-Categories",
      desc: "Awarding excellence in schools, teaching, and educational programs.",
      subCategories: [
        "Best Primary School", "Best Secondary School", "Best Teacher (Primary)", 
        "Best Teacher (Secondary)", "Head Teacher of the Year", "Best TVET Institution", 
        "Outstanding Student Award", "Best School Sports Program", "Education Innovation Award", 
        "Best Special Needs School/Program"
      ]
    },
    { 
      title: "Health", 
      count: "8 Sub-Categories",
      desc: "Recognizing dedicated healthcare professionals and facilities.",
      subCategories: [
        "Health Worker of the Year", "Best Health Facility", "Community Health Volunteer of the Year", 
        "Maternal Health Champion", "Mental Health Advocate of the Year", "Best Public Health Initiative", 
        "Nurse of the Year", "Doctor of the Year"
      ]
    },
    { 
      title: "Hospitality", 
      count: "7 Sub-Categories",
      desc: "Celebrating the best in accommodation and culinary experiences.",
      subCategories: [
        "Best Luxury Hotel", "Best Budget Hotel", "Best Resort", 
        "Best Lodge and Bar", "Best Guest House", "Best Airbnb/Vacation Rental", 
        "Chef of the Year"
      ]
    },
    { 
      title: "Tourism", 
      count: "5 Sub-Categories",
      desc: "Honoring top operators, agencies, and guides in the travel sector.",
      subCategories: [
        "Best Tour Operator", "Best Travel Agency", "Best Safari Company", 
        "Best Tour Guide", "Best Travel Content Creator"
      ]
    },
    { 
      title: "Technology & Innovation", 
      count: "10 Sub-Categories",
      desc: "Highlighting digital pioneers, tech startups, and IT champions.",
      subCategories: [
        "Tech Entrepreneur of the Year", "Best Tech Startup", "Digital Excellence Award", 
        "Best Use of Technology in Agriculture", "ICT Champion of the Year", "Best AI Innovation", 
        "Best Digital Service Provider", "Best Agritech Innovation", "Technology Influencer of the Year", 
        "Young Tech Innovator of the Year"
      ]
    },
    { 
      title: "Religion & Community", 
      count: "13 Sub-Categories",
      desc: "Recognizing spiritual leaders and community impact champions.",
      subCategories: [
        "Religious Leader of the Year", "Community Leader of the Year", "Clergy/Pastor of the Year", 
        "Bishop of the Year", "Priest of the Year", "Faith Leader of the Year", 
        "Youth Ministry Leader of the Year", "Humanitarian of the Year", "Social Impact Leader of the Year", 
        "Community Organization of the Year", "Youth Empowerment Champion", "Women's Empowerment Champion", 
        "Environmental Community Champions"
      ]
    },
    { 
      title: "Football & Sports", 
      count: "19 Sub-Categories",
      desc: "Celebrating exceptional athletes, coaches, and sports clubs.",
      subCategories: [
        "Footballer of the Year", "Best Male Footballer", "Best Female Footballer", 
        "Young Footballer of the Year", "Coach of the Year", "Goalkeeper of the Year", 
        "Football Club of the Year", "Sports Coach of the Year", "Athlete of the Year", 
        "Best Rugby Player", "Best Volleyball Player", "Best Basketball Player", 
        "Best Boxer", "Best Martial Arts Athlete", "Best Runner/Athlete", 
        "Best Swimmer", "Best Cyclist", "Best Motor Sports Athlete", 
        "Best Disability Sports Athlete"
      ]
    },
    { 
      title: "Special Recognition", 
      count: "3 Sub-Categories",
      desc: "Honoring lifetime achievements and iconic legacy figures in Meru.",
      subCategories: [
        "Lifetime Achievement Award", "Meru Icon of the Year", "Legacy Award"
      ]
    }
  ];

  return (
    <section id="categories" className="relative w-full py-24 overflow-hidden bg-[#050505]">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Awards Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/30 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
            OFFICIAL CATEGORIES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Voting Categories</h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-xs md:text-sm leading-relaxed">
            We feature over 180 distinct categories across 15 major pillars. Click on any pillar below to explore the specific awards honoring the very best in Meru County.
          </p>
        </div>
        
        {/* Interactive View Switcher */}
        {activeCategory === null ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
            {categoryList.map((cat, index) => (
              <div 
                key={index} 
                onClick={() => setActiveCategory(index)}
                className="bg-[#111111]/90 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col items-center text-center shadow-2xl cursor-pointer group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37] transition-colors duration-300 flex-shrink-0">
                  <Trophy className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />
                </div>
                <h3 className="font-bold text-white text-base mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors">{cat.title}</h3>
                <div className="flex items-center gap-2 mt-auto pt-4">
                  <span className="text-[9px] text-white/50 uppercase tracking-widest font-bold bg-[#050505] px-3 py-1.5 rounded-full whitespace-nowrap">{cat.count}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-8 fade-in duration-500 bg-[#111111]/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-[2rem] p-6 md:p-12 shadow-2xl max-w-5xl mx-auto">
            <button 
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest mb-8"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Main Categories
            </button>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 border-b border-white/10 pb-8">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">{categoryList[activeCategory].title}</h3>
                <p className="text-white/60 text-sm">{categoryList[activeCategory].desc}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {categoryList[activeCategory].subCategories.map((sub, idx) => (
                <div key={idx} className="bg-[#050505] border border-white/5 p-4 rounded-xl flex items-center justify-between hover:border-[#D4AF37]/20 transition-colors group">
                  <span className="text-white/90 text-xs md:text-sm font-medium pr-2 leading-tight">{sub}</span>
                  <span className="text-[8px] md:text-[9px] text-[#D4AF37] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-right">
                    Voting Starting Soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}