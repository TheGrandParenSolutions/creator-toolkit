import { Box } from "@mantine/core";
import Footer from "@src/components/Footer/Footer";
import { MainNav } from "@src/components/Navbar/MainNav/MainNav";
import { SideNav } from "@src/components/Navbar/SideNav/SideNav";
import { FC, PropsWithChildren } from "react";

const MainSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Box className="flex  gap-16 scroll-smooth transition-all duration-300">
        <Box>
          <MainNav />
          <SideNav />
        </Box>

        <Box className="flex w-full overflow-hidden transition-all duration-300 ">
          {/* Add padding to account for fixed navbar height */}
          <Box className="min-h-[800px] flex-grow overflow-y-auto scroll-smooth pt-16 transition-all duration-300">
            {children}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default MainSection;
