import React from 'react';

interface ContainerProps {
  children?: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <section className="container lg:max-w-screen-lg mx-auto">{children}</section>;
}

export default Container;
