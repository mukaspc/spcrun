import React from 'react';

interface ButtonProps {
  type: string;
  optionalClass?: string;
  children: HTMLElement | string;
}

const BUTTON_TYPES: { [key: string]: string } = {
  primary: 'bg-green-400 text-white border-green-400 hover:bg-green-500 hover:border-green-500',
  secondary: 'bg-white text-green-400 border-green-400 hover:border-green-500 hover:text-green-500',
};

function Button({ type, optionalClass, children }: ButtonProps) {
  const getKeyValue =
    <T extends object, U extends keyof T>(obj: T) =>
    (key: U) =>
      obj[key];
  const buttonType = getKeyValue(BUTTON_TYPES)(type);

  return (
    <button
      className={`text-center py-2 px-8 rounded-sm font-medium border text-sm transition-colors ${buttonType} ${
        optionalClass ? optionalClass : ''
      }
      `}
    >
      {children}
    </button>
  );
}

export default Button;
