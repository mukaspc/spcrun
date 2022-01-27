import React from 'react';

interface LogoProps {
  optionalClass?: string;
}

function Logo({ optionalClass }: LogoProps) {
  return (
    <div className={`text-2xl font-black text-green-600 tracking-tighter ${optionalClass ? optionalClass : ''}`}>
      spc<span className="text-green-500">run.</span>
    </div>
  );
}

export default Logo;
