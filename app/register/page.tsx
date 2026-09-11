"use client";
import React, { useState } from "react";
import Link from "next/link";
import { User, Calendar, Phone, MapPin, Trophy, Upload, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

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
      // 1. Upload the image to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const { error: uploadError, data } = await supabase.storage
        .from('nominee-photos')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // 2. Get the public URL of the uploaded image
      const { data: { publicUrl } } = supabase.storage
        .from('nominee-photos')
        .getPublicUrl(fileName);

      // 3. Save the form data + image URL to the database
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

      // Success! Show confirmation
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
      
      {/* Background Styling */}
      <div className="absolute inset-0 z-0">
        <img src="/vmea-bg.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/95 to-[#050505]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl bg-[#111111]/80 backdrop-blur-xl border border-[#D4AF37]/20 p-8 md:p-12 rounded-[2rem] shadow-2xl">
        
        {/* Header */}
        <Link href="/" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">Nominee <span className="text-[#D4AF37]">Registration</span></h1>
          <p className="text-white/60 text-sm">Fill in your details below to submit your profile for the Voice of Meru Excellence Awards.</p>
        </div>

        {/* The Form */}
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
            <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">5. Category</label>
            <div className="relative">
              <Trophy className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <select name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-[#050505] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-[#D4AF37] transition-colors" required>
                <option value="" disabled>Select a main category...</option>
                <option value="entertainment">Entertainment</option>
                <option value="agriculture">Agriculture & Farming</option>
                <option value="leadership">Leadership</option>
                <option value="business">Business & Entrepreneurship</option>
                <option value="education">Education</option>
                <option value="health">Health</option>
                <option value="hospitality">Hospitality</option>
                <option value="tourism">Tourism</option>
                <option value="technology">Technology & Innovation</option>
                <option value="religion">Religion & Community</option>
                <option value="sports">Football & Sports</option>
                <option value="special">Special Recognition</option>
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