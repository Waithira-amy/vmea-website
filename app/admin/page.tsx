"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Users, Loader2, RefreshCw, Lock, ArrowRight } from "lucide-react";

export default function AdminDashboard() {
  // --- SECURITY STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Change this to whatever you want your admin password to be!
  const ADMIN_PASSWORD = "VMEA2026";

  // --- DATA STATE ---
  const [nominees, setNominees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // --- LOGIN LOGIC ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchNominees(); // Only fetch the data AFTER successful login
    } else {
      setErrorMsg("Incorrect password. Access denied.");
      setPassword("");
    }
  };

  // --- DATABASE LOGIC ---
  const fetchNominees = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('nominees')
        .select('*')
        .order('id', { ascending: false });

      if (error) throw error;
      setNominees(data || []);
    } catch (error) {
      console.error("Error fetching nominees:", error);
      alert("Failed to load records.");
    } finally {
      setLoading(false);
    }
  };

  // --- UI: LOCK SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] relative flex items-center justify-center p-6 overflow-hidden">
        {/* Background Styling */}
        <div className="absolute inset-0 z-0">
          <img src="/vmea-bg.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/95 to-[#050505]" />
        </div>

        <div className="relative z-10 w-full max-w-md bg-[#111111]/90 backdrop-blur-xl border border-[#D4AF37]/30 p-8 md:p-10 rounded-[2rem] shadow-2xl text-center">
          <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/20">
            <Lock className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-white mb-2">Admin <span className="text-[#D4AF37]">Access</span></h2>
          <p className="text-white/60 text-sm mb-8">Enter the secure passcode to view nominee data.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMsg(""); // Clear error when typing
                }}
                placeholder="Enter passcode..." 
                className="w-full bg-[#050505] border border-white/10 rounded-xl py-4 px-6 text-white text-center tracking-[0.2em] focus:outline-none focus:border-[#D4AF37] transition-colors"
                autoFocus
              />
            </div>
            {errorMsg && <p className="text-red-400 text-xs font-medium">{errorMsg}</p>}
            
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-black py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              Unlock Dashboard <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- UI: DASHBOARD (Only shows if logged in) ---
  return (
    <div className="min-h-screen bg-[#050505] p-8 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold flex items-center gap-3">
              <Users className="text-[#D4AF37] w-8 h-8" />
              Admin <span className="text-[#D4AF37]">Dashboard</span>
            </h1>
            <p className="text-white/50 text-sm mt-1">Manage Voice of Meru Excellence Awards Nominees</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={fetchNominees}
              className="flex items-center gap-2 bg-[#111111] border border-white/10 hover:border-[#D4AF37]/50 px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Data
            </button>
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-2 bg-red-950/30 text-red-400 border border-red-500/20 hover:bg-red-950/50 px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <Lock className="w-4 h-4" />
              Lock
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/50 border-b border-white/10 text-[#D4AF37] text-xs uppercase tracking-widest">
                  <th className="p-4 font-semibold">Photo</th>
                  <th className="p-4 font-semibold">Full Name</th>
                  <th className="p-4 font-semibold">Age</th>
                  <th className="p-4 font-semibold">Phone</th>
                  <th className="p-4 font-semibold">Location</th>
                  <th className="p-4 font-semibold">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center">
                      <Loader2 className="w-8 h-8 animate-spin text-[#D4AF37] mx-auto mb-2" />
                      <p className="text-white/50 text-sm">Loading records...</p>
                    </td>
                  </tr>
                ) : nominees.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-white/50">
                      No nominees registered yet.
                    </td>
                  </tr>
                ) : (
                  nominees.map((nominee) => (
                    <tr key={nominee.id} className="hover:bg-white/5 transition-colors group">
                      <td className="p-4">
                        <img 
                          src={nominee.photo_url} 
                          alt={nominee.full_name} 
                          className="w-12 h-12 object-cover rounded-full border border-white/10 group-hover:border-[#D4AF37] transition-colors"
                        />
                      </td>
                      <td className="p-4 font-medium">{nominee.full_name}</td>
                      <td className="p-4 text-white/70">{nominee.age}</td>
                      <td className="p-4 text-white/70">{nominee.phone}</td>
                      <td className="p-4 text-white/70">{nominee.location}</td>
                      <td className="p-4">
                        <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-3 py-1 rounded-full text-xs uppercase tracking-wider whitespace-nowrap">
                          {nominee.category}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}