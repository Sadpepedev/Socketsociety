import React from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { Badges } from './components/Badges';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="relative min-h-screen overflow-hidden bg-[#0066FF]">
          {/* Gradient background */}
          <div className="pointer-events-none absolute inset-0 z-0">
            {/* Main gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0066FF] via-[#0066FF]/90 to-[#0066FF]/80" />

            {/* Animated gradient orbs */}
            <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] animate-pulse-slow rounded-full bg-[#00D1B2]/20 blur-3xl" />
            <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] animate-pulse-slow rounded-full bg-[#00D1B2]/15 blur-3xl" />
            <div className="absolute bottom-1/4 left-1/3 h-[600px] w-[600px] animate-pulse-slow rounded-full bg-[#00D1B2]/10 blur-3xl" />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          <div className="relative z-10">
            <Navbar />
            <main className="container mx-auto px-4 pt-24 pb-12">
              <div className="flex flex-col items-center justify-center text-center mb-16">
                <div className="w-16 h-16 rounded-full border border-[#00D1B2]/30 mb-6 flex items-center justify-center bg-[#00D1B2]/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D1B2] to-[#0066FF]" />
                </div>
                <h1 className="text-5xl font-bold mb-4 text-white">
                  SocketSociety
                </h1>
                <p className="text-white/80 max-w-2xl text-lg">
                  Connect your wallet and Discord to showcase your community badges. Earn rewards
                  and build your reputation in the SocketSociety community.
                </p>
              </div>
              <div className="mt-16 grid gap-8 lg:grid-cols-[300px,1fr]">
                <Profile />
                <Badges />
              </div>
            </main>
          </div>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App