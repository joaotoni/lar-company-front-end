interface ComboBoxProps {
    label: string;
    name: string;
    options: { value: string | number; label: string }[];
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    className?: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
  export default function ComboBoxForm(props: ComboBoxProps) {
    const {
      label,
      name,
      options,
      required,
      disabled,
      error,
      errorMessage,
      className,
      onChange,
    } = props;
  
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={name} className="text-sm text-gray-600">
          {label}
        </label>
        <select
          name={name}
          required={required}
          disabled={disabled}
          onChange={onChange}
          className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="text-sm text-red-500">{errorMessage}</span>}
      </div>
    );
  }