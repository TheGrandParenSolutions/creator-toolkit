import { Box, Text, Tooltip } from "@mantine/core";
import CTIcon from "@src/components/AppLogo/CTIcon";

const Logo = () => {
  return (
    <Tooltip label="Toolkit home">
      <Box className="flex cursor-pointer items-center">
        <CTIcon />
        <Text className="font-grifter text-wrap text-2xl">Creator Toolkit</Text>
      </Box>
    </Tooltip>
  );
};

export default Logo;
