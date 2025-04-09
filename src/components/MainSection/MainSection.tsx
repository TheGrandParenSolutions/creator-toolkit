import { Box } from "@mantine/core";
import Footer from "@src/components/Footer/Footer";
import { MainNav } from "@src/components/Navbar/MainNav/MainNav";
import { SideNav } from "@src/components/Navbar/SideNav/SideNav";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import { useCreditContext } from "@src/Context/Credits/CreditContext";
import DarkModeToggle from "@src/Utility/DarkModeToggle";
import { isUserPremium } from "@src/utils/CommonUtils";
import { FC, PropsWithChildren, useContext, useEffect } from "react";

const MainSection: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { refreshCredits, resetUserCredits, unlockUserCredits } =
    useCreditContext();

  useEffect(() => {
    if (user && user.id && isUserPremium(user)) {
      refreshCredits(user);
    } else if (user && user.id) {
      unlockUserCredits(user.id);
    }
    resetUserCredits(user?.id);
  }, [user]);
  return (
    <Box className="flex h-screen flex-col justify-between">
      <Box className="flex gap-0 scroll-smooth bg-light-app  text-zinc-800 transition-all duration-300 dark:!bg-dark-app-content dark:text-zinc-100 md:gap-16">
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
      <Box
        className={`fixed bottom-6 right-6 rounded-full bg-zinc-100 p-[2px] 
              shadow-[inset_4px_4px_6px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_rgba(255,255,255,0.1)] dark:bg-zinc-800 
              dark:shadow-[inset_4px_4px_6px_rgba(0,0,0,0.4),inset_-4px_-4px_6px_rgba(255,255,255,0.05)] 
              lg:hidden`}
      >
        <DarkModeToggle />
      </Box>

      <Footer />
    </Box>
  );
};

export default MainSection;
