import React, { useState, useRef, useEffect } from "react";
import {
  dropdownStyle,
  inputBoxStyle,
  inputStyle,
  optionStyle,
  removeTagStyle,
  tagStyle,
} from "../../styles/fsselect";

// Define types for props
export type TOption = {
  label: string;
  value: string;
};

type TFSSelectProps = {
  options: TOption[];
  selectedValues: string[];
  onChange: (value: string[]) => void;
  onAddOption: (option: TOption) => void; // Function to add a new option
  inputValue: string;
  setInputValue: (value: string) => void;
};

const FSSelect = ({
  options,
  selectedValues,
  onChange,
  onAddOption,
  inputValue,
  setInputValue,
}: TFSSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Handle clicks outside the component to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle option selection
  const handleSelect = (value: string) => {
    if (!selectedValues.includes(value)) {
      onChange([...selectedValues, value]);
    }
    setInputValue("");
    setIsOpen(false);
  };

  // Remove selected item
  const handleRemove = (value: string) => {
    onChange(selectedValues.filter((v) => v !== value));
  };

  // Handle adding a new option when "Enter" is pressed
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newOption = { label: inputValue, value: inputValue };
      onAddOption(newOption);
      handleSelect(inputValue);
    }
  };

  return (
    <div
      className="custom-select-container"
      ref={dropdownRef}
      style={{ position: "relative" }}
    >
      <div
        className="custom-select-input"
        onClick={handleToggleDropdown}
        style={inputStyle}
      >
        {selectedValues.map((value) => (
          <div key={value} className="custom-select-tag" style={tagStyle}>
            {options.find((option) => option.value === value)?.label}
            <span
              className="remove-tag"
              onClick={() => handleRemove(value)}
              style={removeTagStyle}
            >
              x
            </span>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown} // Add this line to listen to Enter key
          style={inputBoxStyle}
          placeholder={selectedValues.length === 0 ? "Select..." : ""}
        />
      </div>

      {isOpen && (
        <div className="custom-select-dropdown" style={dropdownStyle}>
          {options
            ?.filter((option) =>
              option.label.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((option) => (
              <div
                key={option.value}
                className="custom-select-option flex items-center justify-between"
                style={optionStyle}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}

                <span
                  className="remove-tag"
                  onClick={() => handleRemove(option.value)}
                  style={removeTagStyle}
                >
                  x
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FSSelect;
