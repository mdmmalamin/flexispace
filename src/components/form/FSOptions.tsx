/* eslint-disable @typescript-eslint/no-explicit-any */

import { useController, Control } from "react-hook-form";

type TOption = {
  label: string;
  value: string;
};

type TFSOptionsProps = {
  name: string;
  control: Control<any>;
  options: TOption[] | undefined;
  label?: string;
};

const FSOptions = ({ name, control, options, label }: TFSOptionsProps) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-gray-700 font-medium">{label}</label>}
      <select
        value={value || ""}
        onChange={onChange}
        className={`border p-2 rounded-md bg-white focus:ring focus:ring-blue-300 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default FSOptions;
