import { Box } from "@mantine/core";
import { MainNav } from "@src/components/Navbar/MainNav/MainNav";
import { SideNav } from "@src/components/Navbar/SideNav/SideNav";
import { FC, PropsWithChildren } from "react";

const MainSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box className="flex">
      <SideNav />
      <Box className="flex-grow overflow-y-auto">
        <MainNav />
        {children}
      </Box>
    </Box>
  );
};

export default MainSection;
