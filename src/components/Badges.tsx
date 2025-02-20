import React from 'react';
import { Shield, Users, Bug, Crown, Trophy, Lightbulb } from 'lucide-react';

const BADGES = [
  {
    title: 'Early Adopter',
    description: 'Joined during beta phase',
    icon: Shield,
    unlocked: false
  },
  {
    title: 'Active Contributor',
    description: 'Regular community participation',
    icon: Users,
    unlocked: false
  },
  {
    title: 'Bug Hunter',
    description: 'Reported critical bugs',
    icon: Bug,
    unlocked: false
  },
  {
    title: 'Community Leader',
    description: 'Guided new members',
    icon: Crown,
    unlocked: false
  },
  {
    title: 'Event Champion',
    description: 'Participated in community events',
    icon: Trophy,
    unlocked: false
  },
  {
    title: 'Innovation Star',
    description: 'Proposed new features',
    icon: Lightbulb,
    unlocked: false
  }
];

export function Badges() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {BADGES.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.title}
            className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Glass background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
            
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-transparent" />
            
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D1B2] to-[#6B46C1] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            
            {/* Content */}
            <div className="relative">
              <div className="mb-4 h-20 rounded-xl bg-black/20 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-[#00D1B2]/50 group-hover:bg-black/30">
                <Icon className="w-8 h-8 text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-[#00D1B2]" />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-white transition-colors duration-300 group-hover:text-[#00D1B2]">
                {badge.title}
              </h3>
              <p className="text-sm text-white/60">{badge.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}