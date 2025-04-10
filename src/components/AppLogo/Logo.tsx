import { Box, Text, Tooltip } from "@mantine/core";
import CTIcon from "@src/components/AppLogo/CTIcon";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Tooltip label="Toolkit home" position="bottom">
      <Box
        className="flex cursor-pointer items-center justify-center gap-2 md:gap-4  text-zinc-900 dark:text-zinc-50"
        onClick={() => navigate("/")}
      >
        <CTIcon /> {/* Adjust size of the icon */}
        <Text
          className="font-grifter text-base  lg:text-xl font-bold uppercase"
          style={{ letterSpacing: "0.01em" }}
        >
          Creator Toolkit
        </Text>
      </Box>
    </Tooltip>
  );
};

export default Logo;
