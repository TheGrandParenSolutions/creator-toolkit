import { Box, Text, Tooltip } from "@mantine/core";
import BrandIcon from "@src/components/AppLogo/BrandIcon";

const Logo = () => {
  return (
    <Tooltip label="Toolkit home">
      <Box className="flex cursor-pointer items-center">
        <BrandIcon />
        <Text className="font-grifter text-wrap text-2xl">Creator Toolkit</Text>
      </Box>
    </Tooltip>
  );
};

export default Logo;
