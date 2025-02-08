import { Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Logo from "@src/components/AppLogo/Logo";
import { LoginSignUpComponent } from "@src/components/Authentication/LoginSignUpComponent";

const LoginSignup = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-6  px-4 dark:bg-dark-app-content dark:text-white">
      {/* Logo */}
      <Box
        className="flex cursor-pointer items-center"
        onClick={() => navigate("/")}
      >
        <Logo />
      </Box>
      <LoginSignUpComponent />
    </div>
  );
};

export default LoginSignup;
