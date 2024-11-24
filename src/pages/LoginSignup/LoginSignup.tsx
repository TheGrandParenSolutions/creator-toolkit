import React, { useState } from "react";
import { Button, Group, Paper, Text, Divider, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { BrandGoogleSolid, Envelope, Lock } from "@mynaui/icons-react"; // Your Icon Library
import Logo from "@src/components/AppLogo/Logo";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton.tsx/CTAnimatedButton.tsx";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isLogin) {
      console.log("Logging in with", formValues);
      navigate("/"); // Redirect to dashboard
    } else {
      console.log("Signing up with", formValues);
      navigate("/"); // Redirect to welcome page
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 px-4">
      {/* Logo */}
      <Box
        className="absolute left-6 top-6 flex cursor-pointer items-center"
        onClick={() => navigate("/")}
      >
        <Logo />
      </Box>

      <Paper
        radius="lg"
        className="w-full max-w-md bg-[var(--brand-main-bg)] p-6"
        style={{
          borderRadius: "16px",
          border: "1px solid var(--brand-dark-orange)",
        }}
      >
        {/* Heading */}
        <Box className="mb-4 text-center">
          <Text
            size="lg"
            component="h1"
            className="font-grifter font-bold text-gray-800 md:text-xl"
          >
            {isLogin ? "Welcome Back!" : "Create Your Account"}
          </Text>
          <Text size="xs" className="text-gray-500">
            {isLogin
              ? "Log in to access your account."
              : "Sign up to get started with our platform."}
          </Text>
        </Box>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Field for Signup */}
          {!isLogin && (
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                value={formValues.name}
                onChange={e =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-orange-400"
              />
            </div>
          )}

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
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm text-gray-700 focus:ring-2 focus:ring-orange-400"
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
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm text-gray-700 focus:ring-2 focus:ring-orange-400"
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

          {/* Submit Button */}
          {/* <Button
            type="submit"
            size="md"
            radius="lg"
            className="w-full text-white  bg-[var(--brand-bg-theme)] hover:from-orange-600 hover:to-orange-700"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </Button> */}
          <CTAnimatedButton
            label={isLogin ? "Log In" : "Sign Up"}
            hoverLabel="Let's go"
            size="md"
            radius={"lg"}
            w={"100%"}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          />
        </form>

        {/* Divider */}
        <Divider
          label="Or continue with"
          labelPosition="center"
          className="my-4 text-black"
          classNames={{
            label: "text-black",
          }}
        />

        {/* Social Buttons */}
        <Group grow>
          <Button
            variant="outline"
            className="hover: border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black"
          >
            <BrandGoogleSolid className="mr-2" />
            Google
          </Button>
        </Group>

        {/* Toggle Login/Signup */}
        <Text size="xs" className="mt-4 text-center  text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="cursor-pointer font-bold underline hover:text-orange-500"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </span>
        </Text>
      </Paper>
    </div>
  );
};

export default LoginSignup;
