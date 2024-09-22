import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/form/Input";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

type FormValues = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};

const SignUp = () => {
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
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-secondary before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-primary after:rounded-full after:-z-10 after:blur-xl after:top-40 after:-right-12">
        <Title>Please Login</Title>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="name"
            >
              Full Name
            </label>
            <Input id="name" type="name" register={register("name")} />
          </div>

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

          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <Input id="phone" type="phone" register={register("phone")} />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="address"
            >
              Address
            </label>
            <Input id="address" type="address" register={register("address")} />
          </div>

          <Button className="px-8">Sign Up</Button>
        </form>

        <p className="text-center my-6">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-blue-600">
            Log In
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default SignUp;
