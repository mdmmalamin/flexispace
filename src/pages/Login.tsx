import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/form/Input";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "../utils/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  const [login, { data, error }] = useLoginMutation();
  console.log({ data, error });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);

    const userInfo = {
      email: "web@programming-hero.com",
      password: "ph-password",
    };

    const toastId = toast.loading("Logging in");

    try {
      const res = await login(userInfo).unwrap();
      console.log(res);

      const user = verifyToken(res.token) as TUser;
      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  // const defaultValues = {
  //   admin: {
  //     email: "test@fs.com",
  //     password: "12345678",
  //   },
  // };

  return (
    <Container className="my-16">
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

          <Button className="px-8">Log In</Button>
        </form>

        <p className="text-center my-6">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
