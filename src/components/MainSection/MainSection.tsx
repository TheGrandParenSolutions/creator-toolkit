import { Box } from "@mantine/core";
import Footer from "@src/components/Footer/Footer";
import { MainNav } from "@src/components/Navbar/MainNav/MainNav";
import { SideNav } from "@src/components/Navbar/SideNav/SideNav";
import { FC, PropsWithChildren } from "react";

const MainSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box className="flex flex-col h-screen justify-between">
      <Box className="flex bg-light-app dark:bg-dark-app-content text-black dark:text-white gap-0 md:gap-16 scroll-smooth transition-all duration-300">
        <Box>
          <MainNav />
          <SideNav />
        </Box>

        <Box className="flex w-full overflow-hidden transition-all duration-300">
          {/* Add padding to account for fixed navbar height */}
          <Box className="flex-grow overflow-y-auto scroll-smooth pt-16 transition-all duration-300">
            {children}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default MainSection;
