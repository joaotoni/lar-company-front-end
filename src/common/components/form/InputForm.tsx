import React from "react";

interface InputProps {
  label: string;
  type: 'text' | 'password' | 'email' | 'number' | 'date';
  name: string;
  mask?: (input: string) => string;
  value?: string | number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputForm(props: InputProps) {
  const {
    label,
    type,
    name,
    value,
    placeholder,
    required,
    disabled,
    error,
    errorMessage,
    className,
    onChange,
    mask,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = mask ? mask(event.target.value) : event.target.value;
    if (onChange) {
      const customEvent = {
        ...event,
        target: {
          ...event.target,
          name: event.target.name,
          value: maskedValue
        }
      };
      onChange(customEvent as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="text-sm text-gray-600">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
      {error && <span className="text-sm text-red-500">{errorMessage}</span>}
    </div>
  );
}
