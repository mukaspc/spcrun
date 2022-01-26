import React, { useRef } from 'react';

interface InputProps {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  optionalClass?: string;
  autoFillOff?: boolean;
  requiredField?: boolean;
  disabledField?: boolean;
}

function Input({
  type,
  label,
  name,
  placeholder,
  optionalClass,
  autoFillOff,
  disabledField,
  requiredField,
}: InputProps) {
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const required = !!requiredField || false;
  const disabled = !!disabledField || false;

  const clickInputHandler = (): void => {
    const input = inputRef.current;

    input!.focus();
  };

  const focusInputHanlder = (): void => {
    const container = inputContainerRef.current;
    const inputClassVisible = 'custom__input--visible';

    container!.classList.toggle(inputClassVisible);
  };

  return (
    <div
      ref={inputContainerRef}
      onClick={clickInputHandler}
      className={`custom__input overflow-y-hidden px-3 pt-2 pb-1 border -mt-[1px] bg-white border-gray-200 cursor-pointer drop-shadow-sm transition-all before:duration-500 before:ease-out before:transition-all ${
        optionalClass ? optionalClass : ''
      } ${disabledField ? 'bg-gray-50' : ''}`}
    >
      <label htmlFor={name} className="block text-sm text-black cursor-pointer">
        {label}
      </label>
      <input
        ref={inputRef}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoComplete={`${autoFillOff ? 'off' : ''}`}
        className="py-1 w-full block text-sm text-green-600 font-medium outline-none placeholder:font-normal placeholder:text-gray-200 disabled:bg-gray-50"
        onFocus={() => focusInputHanlder()}
        onBlur={() => focusInputHanlder()}
      />
    </div>
  );
}

export default Input;
