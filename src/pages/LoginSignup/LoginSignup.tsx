import { useContext, useEffect, useState } from "react";
import { Button, Group, Paper, Text, Divider, Box } from "@mantine/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BrandGoogleSolid, Envelope, Lock } from "@mynaui/icons-react"; // Your Icon Library
import Logo from "@src/components/AppLogo/Logo";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import {
  createUser,
  login,
} from "@src/Api/Modules/Authentication/AuthenticationService";
import { AuthContext } from "@src/Context/Auth/AuthContext";

const LoginSignup = () => {
  const { updateAuth } = useContext(AuthContext);
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [signingInUser, setSigningInUser] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setSigningInUser(true);
    try {
      if (isLogin) {
        const user = await login(formValues);
        setSigningInUser(false);
        if (user) {
          await updateAuth(user);
          navigate("/"); // Redirect on successful login
        } else {
          alert("Invalid login credentials."); // Handle login failure
        }
      } else {
        const user = await createUser(formValues);
        setSigningInUser(false);
        if (user) {
          await updateAuth(user);
          navigate("/"); // Redirect on successful signup
        } else {
          alert("Signup failed. Please check your details."); // Handle signup failure
        }
      }
    } catch (error) {
      setSigningInUser(false);
      console.error("Error during authentication:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    if (location.pathname === "/signup") {
      setIsLogin(false);
    } else if (location.pathname === "/login") {
      setIsLogin(true);
    }
  }, [location.pathname]);

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-6  px-4 dark:bg-dark-app-content dark:text-white">
      {/* Logo */}
      <Box
        className="flex cursor-pointer items-center"
        onClick={() => navigate("/")}
      >
        <Logo />
      </Box>

      <Paper
        radius="lg"
        className="w-full max-w-md border border-[--main-yellow] bg-transparent p-6 dark:border-2  dark:border-black dark:bg-zinc-800"
        style={{
          borderRadius: "16px",
        }}
      >
        {/* Heading */}
        <Box className="mb-4 text-center">
          <Text
            size="lg"
            component="h1"
            className="font-grifter font-bold text-zinc-800 dark:text-white md:text-xl"
          >
            {isLogin ? "Welcome Back!" : "Create Your Account"}
          </Text>
          <Text size="xs" className="text-zinc-300">
            {isLogin
              ? "Log in to access your account."
              : "Sign up to get started with our platform."}
          </Text>
        </Box>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <Envelope className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="email"
              placeholder="Your Email"
              value={formValues.email}
              onChange={e =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              required
              className="w-full rounded-lg border-2 border-zinc-300 bg-zinc-50 px-4 py-2 pl-10 text-sm text-zinc-700 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="password"
              placeholder="Your Password"
              value={formValues.password}
              onChange={e =>
                setFormValues({ ...formValues, password: e.target.value })
              }
              required
              className="w-full rounded-lg border-2 border-zinc-300 bg-zinc-50 px-4 py-2 pl-10 text-sm text-zinc-700 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Forgot Password */}
          {isLogin && (
            <div className="text-right">
              <span
                className="cursor-pointer text-sm font-semibold hover:text-orange-500"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </span>
            </div>
          )}

          <CTAnimatedButton
            label={isLogin ? "Log in" : "Sign Up"}
            hoverLabel="Let's go"
            size="md"
            radius={"lg"}
            w={"100%"}
            onClick={e => {
              e.preventDefault();
              handleSubmit();
            }}
            loading={signingInUser}
          />
        </form>

        {/* Divider */}
        <Divider
          label="Or continue with"
          labelPosition="center"
          className="my-4 text-black"
          classNames={{
            label: "text-black dark:text-zinc-300",
          }}
        />

        {/* Social Buttons */}
        <Group grow>
          <Button
            variant="outline"
            className="hover: border-zinc-300 text-zinc-600 hover:bg-zinc-100 hover:text-black dark:text-zinc-300 dark:hover:text-black"
          >
            <BrandGoogleSolid className="mr-2" />
            Google
          </Button>
        </Group>

        {/* Toggle Login/Signup */}
        <Text size="xs" className="mt-4 text-center  text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            to={isLogin ? "/signup" : "/login"}
            className="cursor-pointer font-bold underline hover:text-orange-500"
          >
            {isLogin ? "Sign Up" : "Log in"}
          </Link>
        </Text>
      </Paper>
    </div>
  );
};

export default LoginSignup;
