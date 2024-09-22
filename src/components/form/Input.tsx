/* eslint-disable @typescript-eslint/no-explicit-any */
export type TInputProps = {
  className?: string;
  name?: string;
  id?: string;
  type?: string;
  // ...props?: any;
  register?: any;
};

const Input = ({
  className = "",
  name = "name",
  id = "id",
  type = "text",
  register,
  ...props
}: TInputProps) => {
  return (
    <input
      className={`${className} mt-1 p-2 w-full border rounded-md`}
      name={name}
      id={id}
      type={type}
      {...register}
      {...props}
    />
  );
};

export default Input;
