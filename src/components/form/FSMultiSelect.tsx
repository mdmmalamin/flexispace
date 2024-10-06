/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useController, Control } from "react-hook-form";

type TOption = {
  label: string;
  value: string;
};

type FSMultiSelectProps = {
  name: string;
  control: Control<any>;
  options: TOption[] | undefined;
  label?: string;
};

const FSMultiSelect = ({
  name,
  control,
  options,
  label,
}: FSMultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    field: { onChange, value = [] },
    fieldState: { error },
  } = useController({ name, control });

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (selectedValue: string) => {
    const selectedIndex = value?.indexOf(selectedValue);
    if (selectedIndex > -1) {
      // If already selected, remove it
      onChange(value?.filter((item: string) => item !== selectedValue));
    } else {
      // Add the selected value
      onChange([...value, selectedValue]);
    }
  };

  const handleRemove = (removedValue: string) => {
    onChange(value.filter((item: string) => item !== removedValue));
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-gray-700 font-medium mb-2">{label}</label>
      )}
      <div className="relative">
        <div
          onClick={toggleDropdown}
          className="border border-gray-300 p-2 rounded-md flex items-center justify-between cursor-pointer"
        >
          <div className="flex flex-wrap gap-1">
            {value?.length > 0 ? (
              value?.map((val: string) => (
                <span
                  key={val}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md flex items-center space-x-1"
                >
                  <span>
                    {options?.find((opt) => opt.value === val)?.label}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemove(val)}
                    className="ml-2 text-gray-600 hover:text-red-500"
                  >
                    &times;
                  </button>
                </span>
              ))
            ) : (
              <span className="text-gray-400">Select options...</span>
            )}
          </div>
          <span className="text-gray-600">{isOpen ? "▲" : "▼"}</span>
        </div>

        {isOpen && (
          <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
            {options?.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option?.value)}
                className={`cursor-pointer p-2 hover:bg-gray-100 ${
                  value?.includes(option.value) ? "bg-gray-200" : ""
                }`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default FSMultiSelect;
