import React from 'react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Socket Society
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Connect, collect badges, and showcase your achievements in the Web3 community
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-primary/80 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            View Badges
          </button>
          <button className="bg-secondary hover:bg-secondary/80 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}