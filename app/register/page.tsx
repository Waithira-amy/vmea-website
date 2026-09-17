"use client";
import React, { useState } from "react";
import Link from "next/link";
import { User, Calendar, Phone, MapPin, Trophy, Upload, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

// 🏆 THE COMPLETE VMEA AWARDS MASTER DICTIONARY
const SUBCATEGORIES: Record<string, string[]> = {
  "Entertainment": [
    "Male Artist of the Year", "Female Artist of the Year", "Male Actor of the Year", 
    "Female Actor of the Year", "Comedian of the Year", "DJ of the Year", 
    "Upcoming Artist of the Year", "Content Creator of the Year", "Radio Presenter of the Year", 
    "Best Photography/Videographer", "Artist of the Year", "Best Cultural Preservation Initiative", 
    "Journalist of the Year", "Best Local Media House", "Photographer of the Year", 
    "Fashion Designer of the Year", "Dancer of the Year", "Vixen of the Year", "Event Organizer of the Year", 
    "Producer of the Year", "Director of the Year", "Song Writer of the Year", "Poet and Writer of the Year"
  ],
  "Media and Journalism": [
    "Best Radio Presenter", "Best Radio Station", "Best TV Presenter", 
    "Best TV Station", "Best Journalist", "Best News Anchor", 
    "Best Investigative Journalist", "Best Entertainment Journalist", "Best Sports Journalist", 
    "Best Political Journalist", "Best Digital Journalist", "Best Blogger", 
    "Best Content Creator", "Best YouTube Channel", "Best Podcast", 
    "Best Online Media Platform", "Best Social Media Personality", "Media Personality of the Year", 
    "Rising Media Personality of the Year", "Media House of the Year", "Best Photography & Visual Storytelling", 
    "Best Videographer"
  ],
  "Fashion": [
    "Fashion Designer of the Year", "Best Fashion Brand of the Year", "Fashion Model of the Year", 
    "Male Fashion Icon of the Year", "Female Fashion Icon of the Year", "Best Dressed Personality of the Year", 
    "Best Traditional Wear/Attire", "Emerging Fashion Talent of the Year", "Fashion Content Creator of the Year", 
    "Fashion Photographer of the Year", "Best Stylist of the Year", "Fashion Influencer of the Year"
  ],
  "Beauty": [
    "Makeup Artist of the Year", "Beauty Influencer of the Year", "Beauty Content Creator of the Year", 
    "Beauty Salon of the Year", "Barber of the Year", "Nail Artist of the Year", 
    "Hair Stylist of the Year", "Beauty Brand of the Year"
  ],
  "Agriculture & Farming": [
    "Farmer of the Year", "Best Dairy Farmer", "Best Coffee Farmer", 
    "Best Miraa (Khat) Farmer", "Best Tea Farmer", "Best Horticulture Farmer", 
    "Horticulture Farmer of the Year", "Best Poultry Farmer", "Best Livestock Farmer", 
    "Agribusiness Innovator of the Year", "Young Farmer of the Year", "Woman Farmer of the Year", 
    "Best Cooperative Society", "Agroforestry Champion", "Best Irrigation Project"
  ],
  "Leadership": [
    "Best Performing MP", "Best Performing MCA", "Most Influential Youth Leader", 
    "Leader of the Year", "Lifetime Leadership Achievement Award", "Public Servant of the Year", 
    "Best Ward Development Project", "Community Service Award", "Transparency & Accountability Award", 
    "Best NGO/CBO", "Peace Ambassador Award", "Chief/Assistant Chief of the Year", "Promising Aspirant"
  ],
  "Business & Entrepreneurship": [
    "Entrepreneur of the Year", "Young Entrepreneur of the Year", "Woman Entrepreneur of the Year", 
    "Best SME", "Best Startup", "Business Innovation Award", "Best Retail Business", 
    "Best Hospitality Business", "Best Transport & Logistics Business", "Best Manufacturing Enterprise", 
    "Best Export Business", "Best CSR Initiative", "Business Lifetime Achievement Award", 
    "Bank", "Best Distributor of the Year"
  ],
  "Education": [
    "Best Primary School", "Best Secondary School", "Best Teacher (Primary)", 
    "Best Teacher (Secondary)", "Head Teacher of the Year", "Best TVET Institution", 
    "Outstanding Student Award", "Best School Sports Program", "Education Innovation Award", 
    "Best Special Needs School/Program"
  ],
  "Health": [
    "Health Worker of the Year", "Best Health Facility", "Community Health Volunteer of the Year", 
    "Maternal Health Champion", "Mental Health Advocate of the Year", "Best Public Health Initiative", 
    "Nurse of the Year", "Doctor of the Year"
  ],
  "Hospitality": [
    "Best Luxury Hotel", "Best Budget Hotel", "Best Resort", 
    "Best Lodge and Bar", "Best Guest House", "Best Airbnb/Vacation Rental", "Chef of the Year"
  ],
  "Tourism": [
    "Best Tour Operator", "Best Travel Agency", "Best Safari Company", 
    "Best Tour Guide", "Best Travel Content Creator"
  ],
  "Technology & Innovation": [
    "Tech Entrepreneur of the Year", "Best Tech Startup", "Digital Excellence Award", 
    "Best Use of Technology in Agriculture", "ICT Champion of the Year", "Best AI Innovation", 
    "Best Digital Service Provider", "Best Agritech Innovation", "Technology Influencer of the Year", 
    "Young Tech Innovator of the Year"
  ],
  "Religion & Community": [
    "Religious Leader of the Year", "Community Leader of the Year", "Clergy/Pastor of the Year", 
    "Bishop of the Year", "Priest of the Year", "Faith Leader of the Year", 
    "Youth Ministry Leader of the Year", "Humanitarian of the Year", "Social Impact Leader of the Year", 
    "Community Organization of the Year", "Youth Empowerment Champion", "Women's Empowerment Champion", 
    "Environmental Community Champions"
  ],
  "Football & Sports": [
    "Footballer of the Year", "Best Male Footballer", "Best Female Footballer", 
    "Young Footballer of the Year", "Coach of the Year", "Goalkeeper of the Year", 
    "Football Club of the Year", "Sports Coach of the Year", "Athlete of the Year", 
    "Best Rugby Player", "Best Volleyball Player", "Best Basketball Player", 
    "Best Boxer", "Best Martial Arts Athlete", "Best Runner/Athlete", 
    "Best Swimmer", "Best Cyclist", "Best Motor Sports Athlete", "Best Disability Sports Athlete"
  ],
  "Special Recognition": [
    "Lifetime Achievement Award", "Meru Icon of the Year", "Legacy Award"
  ]
};

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    full_name: "",
    age: "",
    phone: "",
    location: "",
    main_category: "",
    exact_subcategory: "", 
  });
  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // If they change the main category, reset the exact award so they don't accidentally submit a mismatch
    if (name === "main_category") {
      setFormData({ ...formData, main_category: value, exact_subcategory: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please upload a photo.");
    if (!formData.exact_subcategory) return alert("Please select the exact award.");
    
    setIsSubmitting(true);

    try {
      // 1. Upload Photo
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('nominee-photos')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // 2. Get URL
      const { data: { publicUrl } } = supabase.storage
        .from('nominee-photos')
        .getPublicUrl(fileName);

      // 3. Save to Database - Formatting it perfectly with the brackets!
      const finalCategoryString = `${formData.exact_subcategory} (${formData.main_category})`;
      
      const { error: dbError } = await supabase
        .from('nominees')
        .insert([
          {
            full_name: formData.full_name,
            age: parseInt(formData.age),
            phone: formData.phone,
            location: formData.location,
            category: finalCategoryString, // Saves as "Best DJ (Entertainment)"
            photo_url: publicUrl
          }
        ]);

      if (dbError) throw dbError;

      setSuccess(true);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
        <div className="bg-[#111111]/80 backdrop-blur-xl border border-[#D4AF37]/50 p-12 rounded-[2rem] text-center max-w-lg shadow-2xl">
          <CheckCircle2 className="w-20 h-20 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Registration Successful!</h2>
          <p className="text-white/70 mb-8">Your profile has been securely submitted for the Voice of Meru Excellence Awards.</p>
          <Link href="/" className="bg-[#D4AF37] text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] relative flex items-center justify-center py-24 px-6 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img src="/vmea-bg.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/95 to-[#050505]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl bg-[#111111]/80 backdrop-blur-xl border border-[#D4AF37]/20 p-8 md:p-12 rounded-[2rem] shadow-2xl">
        
        <Link href="/" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">Nominee <span className="text-[#D4AF37]">Registration</span></h1>
          <p className="text-white/60 text-sm">Fill in your details below to submit your profile for the Voice of Meru Excellence Awards.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          
          <div>
            <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">1. Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input type="text" name="full_name" value={formData.full_name} onChange={handleInputChange} placeholder="John Doe" className="w-full bg-[#050505] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">2. Age</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="25" min="1" className="w-full bg-[#050505] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" required />
              </div>
            </div>
            <div>
              <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">3. Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+254 700 000 000" className="w-full bg-[#050505] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" required />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">4. Location</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="e.g. Meru Town, Imenti South" className="w-full bg-[#050505] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1st Dropdown: Main Category */}
            <div>
              <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">5. Main Category</label>
              <div className="relative">
                <Trophy className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <select name="main_category" value={formData.main_category} onChange={handleInputChange} className="w-full bg-[#050505] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-[#D4AF37] transition-colors" required>
                  <option value="" disabled>Select a field...</option>
                  {Object.keys(SUBCATEGORIES).map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 2nd Dropdown: Exact Subcategory */}
            <div>
              <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">Exact Award</label>
              <div className="relative">
                <Trophy className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <select 
                  name="exact_subcategory" 
                  value={formData.exact_subcategory} 
                  onChange={handleInputChange} 
                  disabled={!formData.main_category}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50" 
                  required
                >
                  <option value="" disabled>
                    {formData.main_category ? "Pick the exact award..." : "Select main category first"}
                  </option>
                  {formData.main_category && SUBCATEGORIES[formData.main_category]?.map((sub) => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">6. Upload Photo</label>
            <div className="relative">
              <input type="file" id="photo-upload" accept="image/*" className="hidden" onChange={handleFileChange} required />
              <label htmlFor="photo-upload" className="w-full flex flex-col items-center justify-center bg-[#050505] border-2 border-dashed border-white/10 hover:border-[#D4AF37]/50 rounded-xl py-8 cursor-pointer transition-colors">
                <Upload className="w-8 h-8 text-[#D4AF37] mb-3" />
                <span className="text-white/70 text-sm font-medium">{file ? file.name : "Click to upload a high-quality photo"}</span>
                <span className="text-white/40 text-xs mt-1">JPEG, PNG, or JPG (Max 5MB)</span>
              </label>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center bg-[#D4AF37] text-black py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] mt-8 disabled:opacity-70">
            {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Processing...</> : "Submit Registration"}
          </button>
          
        </form>
      </div>
    </div>
  );
}