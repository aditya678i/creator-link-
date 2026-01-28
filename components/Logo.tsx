
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* The "C" upper blue segment */}
      <path 
        d="M50 20L20 50L35 65" 
        stroke="#38BDF8" 
        strokeWidth="15" 
        strokeLinecap="butt"
      />
      
      {/* The "C" bottom dark grey segment */}
      <path 
        d="M35 65L50 80L65 65" 
        stroke="#1E293B" 
        strokeWidth="15" 
        strokeLinecap="butt"
      />
      
      {/* The "L" blue segment */}
      <path 
        d="M62 20V80H92" 
        stroke="#38BDF8" 
        strokeWidth="15" 
        strokeLinecap="butt"
      />
    </svg>
  );
};
