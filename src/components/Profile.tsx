import React from 'react';
import { useAccount } from 'wagmi';
import { ExternalLink } from 'lucide-react';

export function Profile() {
  const { address } = useAccount();

  return (
    <div className="relative overflow-hidden rounded-2xl p-8">
      {/* Glass background with stronger definition */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
      
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-transparent" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      <div className="relative flex flex-col items-center">
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00D1B2] to-[#6B46C1] blur-md opacity-50" />
          <div className="relative h-full w-full rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm" />
        </div>
        
        <h2 className="text-xl font-medium mb-1 text-white">
          {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not Connected'}
        </h2>
        
        <div className="flex items-center space-x-12 mt-6 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-sm text-white/60">Total Badges</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-sm text-white/60">Rank</div>
          </div>
        </div>
        
        <button className="relative w-full overflow-hidden rounded-xl group">
          {/* Button gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00D1B2] to-[#6B46C1] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
          
          {/* Button content */}
          <div className="relative px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl transition-colors group-hover:bg-white/10 flex items-center justify-center space-x-2">
            <span className="text-white group-hover:text-[#00D1B2] transition-colors">View on Explorer</span>
            <ExternalLink className="w-4 h-4 text-white group-hover:text-[#00D1B2] transition-all transform group-hover:translate-x-1" />
          </div>
        </button>
      </div>
    </div>
  );
}