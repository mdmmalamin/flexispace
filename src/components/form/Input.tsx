/* eslint-disable @typescript-eslint/no-explicit-any */
export type TInputProps = {
  className?: string;
  name?: string;
  id?: string;
  type?: string;
  // ...props?: any;
  register?: any;
  defaultValue?: string;
  disabled?: boolean;
};

const Input = ({
  className = "",
  name = "name",
  id = "id",
  type = "text",
  register,
  // ...props,
  defaultValue,
  disabled = false,
}: TInputProps) => {
  return (
    <input
      className={`${className} mt-1 p-2 w-full border rounded-md`}
      name={name}
      id={id}
      type={type}
      {...register}
      // {...props}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
};

export default Input;
