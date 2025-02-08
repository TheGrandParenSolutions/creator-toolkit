import { Box, Button, Divider, Group, Paper, Text } from "@mantine/core";
import { BrandGoogleSolid, Envelope, Lock } from "@mynaui/icons-react";
import {
  login,
  createUser,
} from "@src/Api/Modules/Authentication/AuthenticationService";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { showToast } from "@src/utils/Theme";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const LoginSignUpComponent = () => {
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
          showToast(
            "success",
            "Login successfull!",
            "Welcome to creator toolkit!",
          ); // Handle login failure
          await updateAuth(user);
          navigate("/"); // Redirect on successful login
        } else {
          showToast(
            "error",
            "Authentication failed",
            "Invalid login credentials.",
          ); // Handle login failure
        }
      } else {
        const user = await createUser(formValues);
        setSigningInUser(false);
        if (user) {
          await updateAuth(user);
          navigate("/"); // Redirect on successful signup
        } else {
          showToast(
            "error",
            "Authentication failed",
            "Signup failed. Please check your details.",
          ); // Handle login failure
        }
      }
    } catch (error) {
      setSigningInUser(false);
      console.error("Error during authentication:", error);
      showToast("error", "Authentication failed", "Please try again!"); // Handle login failure
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
    <Paper
      radius="lg"
      className="w-full max-w-md border border-[--main-yellow] bg-[#f9f8f5] p-6 dark:border-2  dark:border-black dark:bg-zinc-800"
      style={{
        borderRadius: "16px",
      }}
    >
      {/* Heading */}
      <Box className="mb-4 text-center">
        <Text
          size="lg"
          component="h1"
          className="font-grifter font-bold text-gray-800 dark:text-white md:text-xl"
        >
          {isLogin ? "Welcome Back!" : "Create Your Account"}
        </Text>
        <Text size="xs" className="text-gray-300">
          {isLogin
            ? "Log in to access your account."
            : "Sign up to get started with our platform."}
        </Text>
      </Box>

      {/* Form */}
      <form className="space-y-4">
        {/* Email Field */}
        <div className="relative">
          <Envelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Your Email"
            value={formValues.email}
            onChange={e =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            required
            className="w-full rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm text-gray-700 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Password Field */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            placeholder="Your Password"
            value={formValues.password}
            onChange={e =>
              setFormValues({ ...formValues, password: e.target.value })
            }
            required
            className="w-full rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm text-gray-700 focus:ring-2 focus:ring-orange-400"
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
          label={isLogin ? "Log In" : "Sign Up"}
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
          label: "text-black dark:text-gray-300",
        }}
      />

      {/* Social Buttons */}
      <Group grow>
        <Button
          variant="outline"
          className="hover: border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:text-black"
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
          {isLogin ? "Sign Up" : "Log In"}
        </Link>
      </Text>
    </Paper>
  );
};
