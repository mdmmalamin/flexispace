/* eslint-disable @typescript-eslint/no-explicit-any */

import { useController, Control } from "react-hook-form";

type FSTimePickerProps = {
  name: string;
  control: Control<any>;
  label?: string;
  defaultValue?: string;
};

const FSTimePicker = ({
  name,
  control,
  label,
  defaultValue,
}: FSTimePickerProps) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type="time"
        value={value || defaultValue}
        onChange={onChange}
        className={`border p-2 ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default FSTimePicker;
