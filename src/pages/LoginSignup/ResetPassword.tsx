import { useState } from "react";
import Logo from "@src/components/AppLogo/Logo";
import { Text, Box, Paper } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import { resetPassword } from "@src/Api/Modules/Authentication/AuthenticationService";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { showToast } from "@src/utils/Theme";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hash = location.hash.substring(1); // Remove the "#" at the start
    const params = new URLSearchParams(hash); // Parse the hash fragment

    // Extract the access_token
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (!accessToken || !refreshToken) {
      setIsSubmitting(false);
      showToast("error", "Missing access token", "Please login again");
      navigate("/login"); // Redirect to login page after success
      return;
    }
    setIsSubmitting(true);

    try {
      const message = await resetPassword(
        accessToken,
        newPassword,
        refreshToken,
      );
      showToast("success", "Password reset successfully", message);
      navigate("/"); // Redirect to home page after success
    } catch (error) {
      throw new Error("An error occurred" + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center px-4">
      <Box
        className="mb-6 flex cursor-pointer items-center"
        onClick={() => navigate("/")}
      >
        <Logo />
      </Box>

      <Paper
        radius="lg"
        className="w-full max-w-md border border-[--main-yellow] bg-transparent p-6 dark:border-2 dark:border-black dark:bg-gray-800"
        style={{
          borderRadius: "16px",
        }}
      >
        <Box className="mb-4 text-center">
          <Text
            size="lg"
            component="h1"
            className="font-grifter font-bold text-gray-800 dark:text-white md:text-xl"
          >
            Reset Your Password
          </Text>
          <Text size="xs" className="text-gray-300">
            Enter your new password below to reset your account password.
          </Text>
        </Box>

        <form className="space-y-4" onSubmit={e => handleSubmit(e)}>
          <div className="relative">
            <input
              type="password"
              placeholder="New Password*"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <CTAnimatedButton
            label="Reset Password"
            hoverLabel="Let's go"
            size="md"
            radius={"lg"}
            w={"100%"}
            onClick={e => {
              handleSubmit(e);
            }}
            loading={isSubmitting}
          />
        </form>
      </Paper>
    </div>
  );
};

export default ResetPassword;
