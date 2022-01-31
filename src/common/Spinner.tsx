import React from 'react';
import Logo from './Logo';
import 'tw-elements';

function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div
        className="
    spinner-border
    animate-spin
    inline-block
    w-8
    h-8
    border-4
    rounded-full
    text-green-600
  "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <Logo />
    </div>
  );
}

export default Spinner;
