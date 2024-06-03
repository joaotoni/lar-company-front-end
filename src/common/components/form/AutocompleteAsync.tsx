import React from "react";
import Select from "react-select";

interface OptionType {
  value: string;
  label: string;
}

interface AutocompleteAsyncProps {
  label: string;
  name: string;
  valueProperty: keyof OptionType;
  options: OptionType[];
  isLoading: boolean;
  onChange: (selectedOption: OptionType) => void;
  required?: boolean;
}

const AutocompleteAsync: React.FC<AutocompleteAsyncProps> = ({
  label,
  name,
  valueProperty,
  options,
  isLoading,
  onChange,
  required,
}) => {
  const handleChange = (selectedOption: OptionType | null) => {
    if (selectedOption) {
      onChange(selectedOption);
    }
  };

  const getOptionValue = (option: OptionType) => option[valueProperty];

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="text-sm text-gray-600">{label}</label>
      <Select
        name={name}
        options={options}
        isLoading={isLoading}
        onChange={handleChange}
        getOptionLabel={(option) => option.label}
        getOptionValue={getOptionValue}
        required={required}
      />
    </div>
  );
};

export default AutocompleteAsync;
