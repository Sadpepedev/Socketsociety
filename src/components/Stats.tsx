import React from 'react';
import { Badge, Users, Trophy } from 'lucide-react';

export function Stats() {
  return (
    <div className="py-16 bg-background/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<Users className="w-12 h-12 text-primary" />}
            value="10,000+"
            label="Active Members"
          />
          <StatCard
            icon={<Badge className="w-12 h-12 text-secondary" />}
            value="50+"
            label="Unique Badges"
          />
          <StatCard
            icon={<Trophy className="w-12 h-12 text-accent" />}
            value="1M+"
            label="Achievements Unlocked"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-lg">
      <div className="mb-4">{icon}</div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}