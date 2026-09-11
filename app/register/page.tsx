"use client";
import React, { useState } from "react";
import Link from "next/link";
import { User, Calendar, Phone, MapPin, Trophy, Upload, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

// 🏆 THE COMPLETE VMEA AWARDS MASTER LIST
const AWARD_CATEGORIES = [
  // --- Entertainment ---
  "Male Artist of the Year (Entertainment)",
  "Female Artist of the Year (Entertainment)",
  "Male Actor of the Year (Entertainment)",
  "Female Actor of the Year (Entertainment)",
  "Comedian of the Year (Entertainment)",
  "DJ of the Year (Entertainment)",
  "Upcoming Artist of the Year (Entertainment)",
  "Content Creator of the Year (Entertainment)",
  "Radio Presenter of the Year (Entertainment)",
  "Best Photography/Videographer (Entertainment)",
  "Artist of the Year (Entertainment)",
  "Best Cultural Preservation Initiative (Entertainment)",
  "Journalist of the Year (Entertainment)",
  "Best Local Media House (Entertainment)",
  "Photographer of the Year (Entertainment)",
  "Fashion Designer of the Year (Entertainment)",

  // --- Agriculture & Farming ---
  "Farmer of the Year (Agriculture)",
  "Best Dairy Farmer (Agriculture)",
  "Best Coffee Farmer (Agriculture)",
  "Best Miraa (Khat) Farmer (Agriculture)",
  "Best Tea Farmer (Agriculture)",
  "Best Horticulture Farmer (Agriculture)",
  "Horticulture Farmer of the Year (Agriculture)",
  "Best Poultry Farmer (Agriculture)",
  "Best Livestock Farmer (Agriculture)",
  "Agribusiness Innovator of the Year (Agriculture)",
  "Young Farmer of the Year (Agriculture)",
  "Woman Farmer of the Year (Agriculture)",
  "Best Cooperative Society (Agriculture)",
  "Agroforestry Champion (Agriculture)",
  "Best Irrigation Project (Agriculture)",

  // --- Leadership ---
  "Best Performing MP (Leadership)",
  "Best Performing MCA (Leadership)",
  "Most Influential Youth Leader (Leadership)",
  "Leader of the Year (Leadership)",
  "Lifetime Leadership Achievement Award (Leadership)",
  "Public Servant of the Year (Leadership)",
  "Best Ward Development Project (Leadership)",
  "Community Service Award (Leadership)",
  "Transparency & Accountability Award (Leadership)",
  "Best NGO/CBO (Leadership)",
  "Peace Ambassador Award (Leadership)",
  "Chief/Assistant Chief of the Year (Leadership)",

  // --- Business & Entrepreneurship ---
  "Entrepreneur of the Year (Business)",
  "Young Entrepreneur of the Year (Business)",
  "Woman Entrepreneur of the Year (Business)",
  "Best SME (Business)",
  "Best Startup (Business)",
  "Business Innovation Award (Business)",
  "Best Retail Business (Business)",
  "Best Hospitality Business (Business)",
  "Best Transport & Logistics Business (Business)",
  "Best Manufacturing Enterprise (Business)",
  "Best Export Business (Business)",
  "Best CSR Initiative (Business)",
  "Business Lifetime Achievement Award (Business)",
  "Bank (Business)",
  "Best Distributor of the Year (Business)",

  // --- Education ---
  "Best Primary School (Education)",
  "Best Secondary School (Education)",
  "Best Teacher (Primary) (Education)",
  "Best Teacher (Secondary) (Education)",
  "Head Teacher of the Year (Education)",
  "Best TVET Institution (Education)",
  "Outstanding Student Award (Education)",
  "Best School Sports Program (Education)",
  "Education Innovation Award (Education)",
  "Best Special Needs School/Program (Education)",

  // --- Health ---
  "Health Worker of the Year (Health)",
  "Best Health Facility (Health)",
  "Community Health Volunteer of the Year (Health)",
  "Maternal Health Champion (Health)",
  "Mental Health Advocate of the Year (Health)",
  "Best Public Health Initiative (Health)",
  "Nurse of the Year (Health)",
  "Doctor of the Year (Health)",

  // --- Hospitality ---
  "Best Luxury Hotel (Hospitality)",
  "Best Budget Hotel (Hospitality)",
  "Best Resort (Hospitality)",
  "Best Lodge and Bar (Hospitality)",
  "Best Guest House (Hospitality)",
  "Best Airbnb/Vacation Rental (Hospitality)",
  "Chef of the Year (Hospitality)",

  // --- Tourism ---
  "Best Tour Operator (Tourism)",
  "Best Travel Agency (Tourism)",
  "Best Safari Company (Tourism)",
  "Best Tour Guide (Tourism)",
  "Best Travel Content Creator (Tourism)",

  // --- Technology & Innovation ---
  "Tech Entrepreneur of the Year (Technology)",
  "Best Tech Startup (Technology)",
  "Digital Excellence Award (Technology)",
  "Best Use of Technology in Agriculture (Technology)",
  "ICT Champion of the Year (Technology)",
  "Best AI Innovation (Technology)",
  "Best Digital Service Provider (Technology)",
  "Best Agritech Innovation (Technology)",
  "Technology Influencer of the Year (Technology)",
  "Young Tech Innovator of the Year (Technology)",

  // --- Religion & Community ---
  "Religious Leader of the Year (Religion)",
  "Community Leader of the Year (Religion)",
  "Clergy/Pastor of the Year (Religion)",
  "Bishop of the Year (Religion)",
  "Priest of the Year (Religion)",
  "Faith Leader of the Year (Religion)",
  "Youth Ministry Leader of the Year (Religion)",
  "Humanitarian of the Year (Religion)",
  "Social Impact Leader of the Year (Religion)",
  "Community Organization of the Year (Religion)",
  "Youth Empowerment Champion (Religion)",
  "Women's Empowerment Champion (Religion)",
  "Environmental Community Champions (Religion)",

  // --- Football & Sports ---
  "Footballer of the Year (Sports)",
  "Best Male Footballer (Sports)",
  "Best Female Footballer (Sports)",
  "Young Footballer of the Year (Sports)",
  "Coach of the Year (Sports)",
  "Goalkeeper of the Year (Sports)",
  "Football Club of the Year (Sports)",
  "Sports Coach of the Year (Sports)",
  "Athlete of the Year (Sports)",
  "Best Rugby Player (Sports)",
  "Best Volleyball Player (Sports)",
  "Best Basketball Player (Sports)",
  "Best Boxer (Sports)",
  "Best Martial Arts Athlete (Sports)",
  "Best Runner/Athlete (Sports)",
  "Best Swimmer (Sports)",
  "Best Cyclist (Sports)",
  "Best Motor Sports Athlete (Sports)",
  "Best Disability Sports Athlete (Sports)",

  // --- Special Recognition ---
  "Lifetime Achievement Award (Special Recognition)",
  "Meru Icon of the Year (Special Recognition)",
  "Legacy Award (Special Recognition)"
];

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    full_name: "",
    age: "",
    phone: "",
    location: "",
    category: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please upload a photo.");
    
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

      // 3. Save to Database
      const { error: dbError } = await supabase
        .from('nominees')
        .insert([
          {
            full_name: formData.full_name,
            age: parseInt(formData.age),
            phone: formData.phone,
            location: formData.location,
            category: formData.category, 
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

          <div>
            <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">5. Award Category</label>
            <div className="relative">
              <Trophy className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <select name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-[#050505] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-[#D4AF37] transition-colors" required>
                <option value="" disabled>Select an award...</option>
                {AWARD_CATEGORIES.map((award) => (
                  <option key={award} value={award}>{award}</option>
                ))}
              </select>
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