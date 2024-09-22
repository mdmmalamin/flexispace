import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/form/Input";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  // const defaultValues = {
  //   admin: {
  //     email: "test@fs.com",
  //     password: "12345678",
  //   },
  // };

  return (
    <Container>
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-secondary before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-primary after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <Title>Please Login</Title>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="email"
            >
              Email Address
            </label>
            <Input id="email" type="email" register={register("email")} />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              register={register("password")}
            />
          </div>

          <div className="flex justify-end">
            <Button className="px-8">Log In</Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
