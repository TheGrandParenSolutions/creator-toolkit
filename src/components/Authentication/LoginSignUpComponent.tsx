import {
  Box,
  Button,
  Divider,
  Group,
  Input,
  Paper,
  PasswordInput,
  Text,
} from "@mantine/core";
import {
  login,
  createUser,
} from "@src/Api/Modules/Authentication/AuthenticationService";
import { GoogleAuthService } from "@src/Api/Modules/Authentication/GoogleAuthService";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { GoogleLogo, LockIcon, MailIcon } from "@src/shared/Icons/IconLib";
import { showToast } from "@src/utils/Theme";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const LoginSignUpComponent = (props: {
  modalFlow?: boolean;
  closeModal?: () => void;
  onForgotPassword?: () => void;
}) => {
  const { modalFlow, closeModal, onForgotPassword } = props;
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
      let user;
      if (isLogin) {
        user = await login(formValues);
        if (!user) {
          setSigningInUser(false);

          showToast(
            "error",
            "Account doesn't exist!",
            "Please create a new account, if you don't have one.",
          );
          return;
        }
      } else {
        user = await createUser(formValues);
      }

      setSigningInUser(false);
      if (user) {
        await updateAuth(user);
        showToast(
          "success",
          isLogin ? "Login successful!" : "Signup successful!",
          isLogin
            ? "Welcome to Creator Toolkit!"
            : "Your account has been created.",
        );

        if (modalFlow && closeModal) {
          closeModal();
        } else {
          navigate("/");
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
    if (!modalFlow) {
      setIsLogin(location.pathname === "/signup" ? false : true);
    }
  }, [location.pathname, modalFlow]);

  const handleGoogleLogin = async () => {
    try {
      const googleAuthUrl = await GoogleAuthService.initiateGoogleLogin();
      window.location.href = googleAuthUrl; // Redirect to Google login
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  useEffect(() => {
    const handleGoogleAuthCallback = async () => {
      const hash = location.hash.substring(1); // Remove the "#" at the start
      const params = new URLSearchParams(hash); // Parse the hash fragment

      const token = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (!token || !refreshToken) {
        return;
      }

      try {
        const userData = await GoogleAuthService.handleGoogleCallback(
          token,
          refreshToken,
        );
        await updateAuth(userData); // Store user in context

        showToast(
          "success",
          "Google Login Successful!",
          "Welcome to Creator Toolkit!",
        );

        // Redirect after login
        if (modalFlow && closeModal) {
          closeModal();
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Google Authentication Failed:", error);
        showToast("error", "Authentication failed", "Please try again.");
      }
    };

    handleGoogleAuthCallback();
  }, []);

  return (
    <Paper
      className="w-full max-w-md !rounded-[2.5rem] border border-[--brand-dark-orange] bg-[#f9f8f5] p-6 dark:border-2  dark:border-black dark:bg-zinc-800"
      style={{
        borderRadius: "16px",
      }}
    >
      {/* Heading */}
      <Box className="mb-4 text-center">
        <Text
          size="lg"
          component="h1"
          className="font-primary font-bold font-semibold text-gray-800 dark:text-white md:text-xl"
        >
          {isLogin ? "Welcome Back!" : "Create Your Account"}
        </Text>
        <Text size="xs" className="text-zinc-800 dark:text-zinc-200">
          {isLogin
            ? "Log in to access your account."
            : "Sign up to get started with our platform."}
        </Text>
      </Box>

      {/* Form */}
      <form className="space-y-4">
        {/* Email Field */}
        <Input
          type="email"
          placeholder="Enter your email"
          value={formValues.email}
          leftSection={<MailIcon className="text-zinc-500" />}
          onChange={e =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          required
          classNames={{
            input:
              " w-full rounded-lg border-2 border-zinc-300 bg-zinc-50 text-sm text-zinc-700 focus:border-2 focus:border-[--brand-dark-orange] hover:border-[--brand-dark-orange]",
          }}
        />

        <PasswordInput
          type="password"
          placeholder="Enter your password"
          leftSection={<LockIcon className=" text-zinc-500" />}
          classNames={{
            input:
              " w-full rounded-lg border-2 border-zinc-300 bg-zinc-50 text-sm text-zinc-700 focus:border-2 focus:border-[--brand-dark-orange] hover:border-[--brand-dark-orange]",
          }}
          value={formValues.password}
          onChange={e =>
            setFormValues({ ...formValues, password: e.target.value })
          }
          required
        />

        {/* Forgot Password */}
        {isLogin && (
          <div className="text-right">
            <span
              className="cursor-pointer text-sm font-semibold hover:text-orange-500"
              onClick={() =>
                modalFlow ? onForgotPassword?.() : navigate("/forgot-password")
              }
            >
              Forgot password?
            </span>
          </div>
        )}

        <CTAnimatedButton
          label={isLogin ? "Log In" : "Sign Up"}
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
          leftSection={<GoogleLogo className="h-5 w-5" />}
          onClick={handleGoogleLogin}
          className="hover: rounded-[2.5rem] border-zinc-300 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-black dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-black hover:dark:text-zinc-100"
        >
          Continue with Google
        </Button>
      </Group>

      {/* Toggle Login/Signup */}

      <Text size="xs" className="mt-4 text-center  text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        {modalFlow ? (
          <Button
            className="cursor-pointer !bg-transparent font-bold text-zinc-900 underline hover:bg-transparent hover:!text-orange-500 dark:text-white"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Button>
        ) : (
          <Link
            to={isLogin ? "/signup" : "/login"}
            className="cursor-pointer font-bold underline hover:text-orange-500"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Link>
        )}
      </Text>
    </Paper>
  );
};
