import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ProfileSetupProps {
  address: string;
  onSave: (profile: ProfileData) => void;
  onCancel: () => void;
}

interface ProfileData {
  username: string;
  displayName: string;
  bio: string;
  twitter?: string;
  github?: string;
}

export function ProfileSetup({ address, onSave, onCancel }: ProfileSetupProps) {
  const [formData, setFormData] = useState<ProfileData>({
    username: '',
    displayName: '',
    bio: '',
    twitter: '',
    github: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          username: formData.username,
          display_name: formData.displayName,
          bio: formData.bio,
          twitter: formData.twitter,
          github: formData.github,
          updated_at: new Date().toISOString(),
        })
        .eq('id', (await supabase.auth.getUser()).data.user?.id);

      if (updateError) throw updateError;

      onSave(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Set up your profile</h2>
      <p className="text-gray-400 mb-6">
        Customize your Socket Society profile. This information will be visible to other members.
      </p>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
          {error}
        </div>
      )}

      <div className="bg-black/20 rounded-xl p-8 mb-6">
        <div className="flex justify-center">
          <button className="w-32 h-32 rounded-full bg-black/40 flex items-center justify-center group hover:bg-black/60 transition-colors">
            <Camera className="w-8 h-8 text-white/60 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Choose a unique username"
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Display Name
            </label>
            <input
              type="text"
              placeholder="Your display name"
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              value={formData.displayName}
              onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Bio
          </label>
          <textarea
            placeholder="Tell us about yourself..."
            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary h-24 resize-none"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Preferred Connection
          </label>
          <div className="bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white">
            Wallet ({address})
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Twitter
            </label>
            <input
              type="text"
              placeholder="@username"
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              value={formData.twitter}
              onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              GitHub
            </label>
            <input
              type="text"
              placeholder="username"
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              value={formData.github}
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 rounded-lg bg-[#6B46C1] hover:bg-[#6B46C1]/90 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  );
}