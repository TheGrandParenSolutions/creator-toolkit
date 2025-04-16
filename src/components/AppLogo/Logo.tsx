import { Box, Text, Tooltip } from "@mantine/core";
// import CTIcon from "@src/components/AppLogo/CTIcon";
import RoundLogo from "@src/components/AppLogo/RoundLogo";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Tooltip label="Home" position="bottom">
      <Box
        className="flex cursor-pointer items-center justify-center gap-2 text-zinc-900  dark:text-zinc-50 md:gap-3"
        onClick={() => navigate("/")}
      >
        {/* <CTIcon /> Adjust size of the icon */}
        <Box className="relative flex cursor-pointer items-center justify-center gap-2 text-zinc-900  dark:text-zinc-50 md:gap-2">
          <RoundLogo />
          <Text
            className="font-primary whitespace-nowrap bg-main-gradient bg-clip-text text-base font-extrabold text-orange-300 dark:text-transparent  lg:text-4xl"
            style={{ letterSpacing: "-0.05em" }}
          >
            creosea  
          </Text>
        </Box>
      </Box>
    </Tooltip>
  );
};

export default Logo;
