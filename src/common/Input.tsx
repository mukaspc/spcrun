import React, { useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
interface InputProps {
  id?: string;
  type: string;
  mask?: any;
  masked: boolean;
  label: string;
  name: string;
  min?: number;
  max?: number;
  placeholder?: string;
  optionalClass?: string;
  autoFillOff?: boolean;
  requiredField?: boolean;
  disabledField?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAccept?: (e: any, mask: any) => void;
}

function Input({
  id,
  type,
  mask,
  masked,
  label,
  name,
  min,
  max,
  placeholder,
  optionalClass,
  autoFillOff,
  disabledField,
  requiredField,
  onChange,
  onAccept,
}: InputProps) {
  const [inputElement, setInputElement] = useState<any>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const required = !!requiredField || false;
  const disabled = !!disabledField || false;

  const focusInputContainer = (): void => {
    inputElement && inputElement.focus();
  };

  const handleInputFocus = (status = true): void => {
    const container = inputContainerRef.current;
    const inputClassVisible = 'custom__input--visible';

    if (container) {
      if (status) {
        container.classList.add(inputClassVisible);
      } else {
        container.classList.remove(inputClassVisible);
      }
    }
  };

  return (
    <div
      ref={inputContainerRef}
      onClick={focusInputContainer}
      className={`custom__input overflow-y-hidden px-3 pt-2 pb-1 border -mt-[1px] bg-white border-gray-200 cursor-pointer drop-shadow-sm transition-all before:duration-500 before:ease-out before:transition-all ${
        optionalClass ? optionalClass : ''
      } ${disabledField ? 'bg-gray-50' : ''}`}
    >
      <label htmlFor={name} className="block text-sm text-black cursor-pointer">
        {label}
      </label>
      <IMaskInput
        mask={mask}
        radix="."
        unmask={masked}
        inputRef={(el) => setInputElement(el)}
        id={id}
        name={name}
        type={type}
        min={min}
        max={max}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoComplete={`${autoFillOff ? 'off' : ''}`}
        className="py-1 w-full block text-sm text-green-600 font-medium outline-none placeholder:font-normal placeholder:text-gray-200 disabled:bg-gray-50"
        onFocus={() => handleInputFocus(true)}
        onBlur={() => handleInputFocus(false)}
        onChange={onChange}
        onAccept={onAccept}
      />
    </div>
  );
}

export default Input;
