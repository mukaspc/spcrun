import React from 'react';

interface WrapperProps {
  children?: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <section id="wrapper" className="relative bg-white mt-3 p-5 mb-5 min-h-[350px] rounded-3xl">
      {children}
    </section>
  );
}

export default Wrapper;
