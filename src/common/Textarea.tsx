import React, { useRef } from 'react';

interface TextareaProps {
  id?: string;
  name: string;
  label: string;
  minlength?: number;
  maxlength?: number;
  placeholder?: string;
  optionalClass?: string;
  autoFillOff?: boolean;
  requiredField?: boolean;
  disabledField?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea({
  id,
  label,
  name,
  minlength,
  maxlength,
  placeholder,
  optionalClass,
  autoFillOff,
  disabledField,
  requiredField,
  onChange,
}: TextareaProps) {
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
      <textarea
        ref={inputRef}
        id={id}
        name={name}
        minLength={minlength}
        maxLength={maxlength}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoComplete={`${autoFillOff ? 'off' : ''}`}
        className="py-1 w-full block text-sm text-green-600 font-medium outline-none placeholder:font-normal placeholder:text-gray-200 disabled:bg-gray-50 h-24"
        style={{ resize: 'none' }}
        onFocus={() => focusInputHanlder()}
        onBlur={() => focusInputHanlder()}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default Textarea;
