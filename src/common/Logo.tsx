import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  optionalClass?: string;
}

function Logo({ optionalClass }: LogoProps) {
  return (
    <Link to="/">
      <div className={`text-2xl font-black text-green-600 tracking-tighter ${optionalClass ? optionalClass : ''}`}>
        spc<span className="text-green-500">run.</span>
      </div>
    </Link>
  );
}

export default Logo;
