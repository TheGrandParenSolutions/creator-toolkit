import { useState } from "react";
import { Text, Box, Paper, Input } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Logo from "@src/components/AppLogo/Logo";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { sendForgotPasswordRequest } from "@src/Api/Modules/Authentication/AuthenticationService";
import { CTCheckIcon } from "@src/utils/HtmlUtil";
import { showToast } from "@src/utils/Theme";
import { MailIcon } from "@src/shared/Icons/IconLib";

const ForgotPassword = ({ onBack }: { onBack?: () => void }) => {
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
      showToast(
        "success",
        message,
        "Email sent successfully!! Check your email!!",
      );
    } catch (error) {
      showToast(
        "error",
        "Reset password failed",
        "Sorry!! failed to reset password" + error,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      {!onBack && (
        <Box
          className="mb-6 flex cursor-pointer items-center"
          onClick={() => navigate("/")}
        >
          <Logo />
        </Box>
      )}

      {isEmailSent && (
        <Paper className="flex w-full  max-w-md flex-col items-center gap-y-3 !rounded-[2.5rem]  border border-[--main-yellow] bg-[#f9f8f5] p-6 text-center shadow-md dark:border-2 dark:border-black dark:bg-dark-app-content">
          {/* Success Icon */}

          {/* Heading */}
          <Text
            size="lg"
            component="h1"
            className="flex items-center justify-center gap-2 text-center font-bold text-zinc-900 dark:text-white md:text-xl"
          >
            <CTCheckIcon />
            Password Reset Email Sent!
          </Text>

          {/* Description */}
          <Text
            size="md"
            className="leading-relaxed text-zinc-700 dark:text-zinc-300"
          >
            We've sent a password reset link to <b>{email}</b>. <br /> Please
            check your inbox and follow the instructions to reset your password.
          </Text>

          {/* Additional Info */}
          <Text size="xs" className="leading-relaxed text-zinc-500">
            If you don’t see the email, check your spam folder or try again.
          </Text>

          {/* Back to Login */}
          <Text
            size="sm"
            className="mt-4 cursor-pointer font-semibold underline hover:text-orange-500"
            onClick={() => (onBack ? onBack() : navigate("/login"))}
          >
            Back to Login
          </Text>
        </Paper>
      )}
      {/* Forgot Password Card */}
      {!isEmailSent && (
        <Paper
          className="w-full max-w-md !rounded-[2.5rem] border border-[--brand-dark-orange] bg-[#f9f8f5] p-6 dark:border-2 dark:border-black dark:bg-zinc-800"
          style={{
            borderRadius: "16px",
          }}
        >
          {/* Heading */}
          <Box className="mb-4 text-center">
            <Text
              size="lg"
              component="h1"
              className="font-primary font-bold font-semibold text-zinc-800 dark:text-white md:text-xl"
            >
              Forgot Your Password?
            </Text>
            <Text size="xs" className="text-zinc-300">
              Enter your email to receive password reset instructions.
            </Text>
          </Box>

          {/* Form */}
          <form className="space-y-4" onSubmit={e => handleSubmit(e)}>
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                leftSection={<MailIcon className="text-zinc-500" />}
                onChange={e => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
                classNames={{
                  input:
                    " w-full rounded-lg border-2 border-zinc-300 bg-zinc-50 text-sm text-zinc-700 focus:border-2 focus:border-[--brand-dark-orange] hover:border-[--brand-dark-orange]",
                }}
              />
            </div>

            <CTAnimatedButton
              label="Continue"
              onClick={e => handleSubmit(e)}
              loading={isSubmitting}
            />
          </form>

          {/* Back to Login */}
          <Text size="xs" className="mt-4 text-center text-sm">
            <span
              className="cursor-pointer font-semibold underline hover:text-orange-500"
              onClick={() => (onBack ? onBack() : navigate("/login"))}
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
