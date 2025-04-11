import { Box } from "@mantine/core";
import Footer from "@src/components/Footer/Footer";
import { MainNav } from "@src/components/Navbar/MainNav/MainNav";
import { SideNav } from "@src/components/Navbar/SideNav/SideNav";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import { useCreditContext } from "@src/Context/Credits/CreditContext";
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
    <Box className="flex min-h-screen flex-col justify-between scroll-smooth bg-light-app text-zinc-800 transition-all duration-500 dark:!bg-dark-app-content dark:text-zinc-100">
      <MainNav />
      <SideNav />

      <Box className="flex flex-1 overflow-hidden">
        <Box className="flex-grow overflow-y-auto px-6 pt-16">{children}</Box>
      </Box>

      <Box className="mt-40 flex w-full items-end justify-center">
        <Footer />
      </Box>
    </Box>
  );
};

export default MainSection;
