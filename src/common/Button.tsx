import React from 'react';

interface ButtonProps {
  theme: string;
  modal?: boolean;
  bsTarget?: string;
  optionalClass?: string;
  children: HTMLElement | string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const BUTTON_TYPES: { [key: string]: string } = {
  primary:
    'bg-green-400 text-white border-green-400 hover:bg-green-500 hover:border-green-500 active:bg-green-500 active:border-green-500',
  secondary:
    'bg-white text-green-400 border-green-400 hover:border-green-500 hover:text-green-500 active:border-green-500 active:text-green-500',
};

function Button({ theme, modal = false, bsTarget = '', optionalClass, children, onClick }: ButtonProps) {
  const getKeyValue =
    <T extends object, U extends keyof T>(obj: T) =>
    (key: U) =>
      obj[key];
  const buttonType = getKeyValue(BUTTON_TYPES)(theme);

  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      data-bs-toggle={`${modal ? 'modal' : ''}`}
      data-bs-target={bsTarget}
      onClick={onClick}
      className={`text-center py-2 px-8 rounded-sm font-medium border text-sm transition duration-150 ease-in-out focus:outline-none focus:ring-0 ${buttonType} ${
        optionalClass ? optionalClass : ''
      }
      `}
    >
      {children}
    </button>
  );
}

export default Button;
