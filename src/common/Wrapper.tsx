import React from 'react';

interface WrapperProps {
  children?: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <section className="bg-white mt-3 p-4 min-h-[350px] rounded-3xl">{children}</section>;
}

export default Wrapper;
