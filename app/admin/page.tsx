"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Users, Loader2, RefreshCw } from "lucide-react";

export default function AdminDashboard() {
  const [nominees, setNominees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when the page loads
  useEffect(() => {
    fetchNominees();
  }, []);

  const fetchNominees = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('nominees')
        .select('*')
        .order('id', { ascending: false }); // Shows newest registrations first

      if (error) throw error;
      setNominees(data || []);
    } catch (error) {
      console.error("Error fetching nominees:", error);
      alert("Failed to load records.");
    } finally {
      setLoading(false);
    }
  };

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
          
          <button 
            onClick={fetchNominees}
            className="flex items-center gap-2 bg-[#111111] border border-white/10 hover:border-[#D4AF37]/50 px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh Data
          </button>
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
                        <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
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