import { Box, Text, Tooltip } from "@mantine/core";
import CTIcon from "@src/components/AppLogo/CTIcon";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Tooltip label="Toolkit home">
      <Box className="flex cursor-pointer items-center justify-center gap-2 text-zinc-800 dark:text-zinc-100" onClick={() => navigate("/")}>
        <CTIcon />
        <Text className="font-grifter text-base lg:text-xl">Creator Toolkit</Text>
      </Box>
    </Tooltip>
  );
};

export default Logo;
