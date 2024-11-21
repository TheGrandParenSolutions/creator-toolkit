import { Box } from "@mantine/core";
import Logo from "@src/components/AppLogo/Logo";
import { SideNav } from "@src/components/Navbar/SideNav/SideNav";

const Navbar = () => {
  return (
    <Box className="transition-[all 1s cubic-bezier(.19,1,.22,1)] fixed bottom-auto left-0 right-0 z-50 pb-3 pt-3 transition-all duration-1000">
      <Box className="pl-2 pr-2">
        <Box className="flex items-start">
          <SideNav />
          <Logo />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
