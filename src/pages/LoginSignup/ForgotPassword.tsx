import { useState } from "react";
import { Text, Box, Paper } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Logo from "@src/components/AppLogo/Logo";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { sendForgotPasswordRequest } from "@src/Api/Modules/Authentication/AuthenticationService";
import { CTCheckIcon } from "@src/utils/HtmlUtil";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailSent, setIEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { status, message } = await sendForgotPasswordRequest(email);
      if (status === 200) {
        setIEmailSent(true);
      }
      alert(message);
    } catch (error) {
      alert(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log({ isEmailSent });

  return (
    <div className="mt-16 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <Box
        className="mb-6 flex cursor-pointer items-center"
        onClick={() => navigate("/")}
      >
        <Logo />
      </Box>
      {isEmailSent && (
        <Paper
          radius="lg"
          className="flex w-full max-w-md flex-col items-center gap-y-3 border border-[--main-yellow] bg-transparent p-6 text-center shadow-md dark:border-2 dark:border-black dark:bg-dark-app-content"
        >
          {/* Success Icon */}

          {/* Heading */}
          <Text
            size="lg"
            component="h1"
            className="flex items-center justify-center gap-2 text-center font-bold text-gray-900 dark:text-white md:text-xl"
          >
            <CTCheckIcon />
            Password Reset Email Sent!
          </Text>

          {/* Description */}
          <Text
            size="md"
            className="leading-relaxed text-gray-700 dark:text-gray-300"
          >
            We've sent a password reset link to <b>{email}</b>. <br /> Please
            check your inbox and follow the instructions to reset your password.
          </Text>

          {/* Additional Info */}
          <Text size="xs" className="leading-relaxed text-gray-500">
            If you don’t see the email, check your spam folder or try again.
          </Text>

          {/* Back to Login */}
          <Text
            size="sm"
            className="mt-4 cursor-pointer font-semibold underline hover:text-orange-500"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </Text>
        </Paper>
      )}
      {/* Forgot Password Card */}
      {!isEmailSent && (
        <Paper
          radius="lg"
          className="w-full max-w-md border border-[--main-yellow] bg-transparent p-6 dark:border-2 dark:border-black dark:bg-gray-800"
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
              Forgot Your Password?
            </Text>
            <Text size="xs" className="text-gray-300">
              Enter your email to receive password reset instructions.
            </Text>
          </Box>

          {/* Form */}
          <form className="space-y-4" onSubmit={e => handleSubmit(e)}>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address*"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="w-full rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <CTAnimatedButton
              label="Continue"
              hoverLabel="Let's go"
              size="md"
              radius={"lg"}
              w={"100%"}
              onClick={e => handleSubmit(e)}
              loading={isSubmitting}
            />
          </form>

          {/* Back to Login */}
          <Text size="xs" className="mt-4 text-center text-sm">
            <span
              className="cursor-pointer font-semibold underline hover:text-orange-500"
              onClick={() => navigate("/login")}
            >
              Back to Login/Signup
            </span>
          </Text>
        </Paper>
      )}
    </div>
  );
};

export default ForgotPassword;
