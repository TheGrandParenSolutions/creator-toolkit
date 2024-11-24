import { Box } from "@mantine/core";
import  Footer  from "@src/components/Footer/Footer";
import { MainNav } from "@src/components/Navbar/MainNav/MainNav";
import { SideNav } from "@src/components/Navbar/SideNav/SideNav";
import { FC, PropsWithChildren } from "react";

const MainSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Box className="flex">
        <SideNav />
        <Box className="flex-grow overflow-y-auto">
          <MainNav />
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default MainSection;
