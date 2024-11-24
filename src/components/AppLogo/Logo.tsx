import { Box, Text, Tooltip } from "@mantine/core";
import CTIcon from "@src/components/AppLogo/CTIcon";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Tooltip label="Toolkit home">
      <Box className="flex cursor-pointer items-center" onClick={() => navigate("/")}>
        <CTIcon />
        <Text className="font-grifter text-wrap text-2xl">Creator Toolkit</Text>
      </Box>
    </Tooltip>
  );
};

export default Logo;
