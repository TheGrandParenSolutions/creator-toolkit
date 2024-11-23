import { Box } from "@mantine/core";
import { SideNav } from "@src/components/Navbar/SideNav/SideNav";

const Navbar = () => {
  return (
    <Box className="flex h-screen">
      {/* Side Navigation */}
      <SideNav />

      {/* Main Navigation */}
    </Box>
  );
};

export default Navbar;
