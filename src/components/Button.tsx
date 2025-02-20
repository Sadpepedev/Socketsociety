import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'icon';
  children: React.ReactNode;
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 overflow-hidden',
        {
          'bg-gradient-to-r from-[#6B46C1] to-[#6B46C1]/80 p-[1px] hover:shadow-[0_0_20px_rgba(107,70,193,0.3)]': variant === 'default',
          'border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30': variant === 'ghost',
          'border border-white/20 hover:border-[#6B46C1] hover:bg-[#6B46C1]/5': variant === 'outline',
          'h-10 px-4': size === 'default',
          'h-10 w-10': size === 'icon',
        },
        className
      )}
      {...props}
    >
      {variant === 'default' ? (
        <span className="relative flex h-full w-full items-center justify-center rounded-[6px] bg-[#6B46C1] px-4 transition-all hover:bg-[#6B46C1]/90">
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}