import React, { useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { Badge, Menu, X } from 'lucide-react';
import { Modal } from './Modal';
import { ProfileSetup } from './ProfileSetup';
import { Button } from './Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = async () => {
    await connect({ connector: injected() });
    setShowConnectModal(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 font-bold">
            <Badge className="h-6 w-6 text-[#00D1B2]" />
            <span className="hidden sm:inline-block text-white">Socket Society</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            {isConnected ? (
              <Button
                variant="ghost"
                onClick={() => disconnect()}
                className="text-white hover:bg-white/10"
              >
                {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
              </Button>
            ) : (
              <Button 
                onClick={handleConnect} 
                className="text-white bg-[#6B46C1] hover:bg-[#6B46C1]/90"
              >
                Connect Wallet
              </Button>
            )}
            <Button 
              variant="default"
              className="hidden sm:flex text-white bg-[#6B46C1] hover:bg-[#6B46C1]/90"
            >
              Connect Discord
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden text-white hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="container border-t border-white/10 px-4 py-4 sm:hidden">
            <Button 
              variant="default"
              className="w-full justify-start text-white bg-[#6B46C1] hover:bg-[#6B46C1]/90"
            >
              Connect Discord
            </Button>
          </div>
        )}
      </header>

      <Modal isOpen={showConnectModal} onClose={() => setShowConnectModal(false)}>
        <ProfileSetup
          address={address || ''}
          onSave={(profile) => {
            console.log('Profile saved:', profile);
            setShowConnectModal(false);
          }}
          onCancel={() => setShowConnectModal(false)}
        />
      </Modal>
    </>
  );
}