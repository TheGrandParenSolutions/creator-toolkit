import AuthProvider from "@src/Context/Auth/AuthProvider";
import { ThemeProvider } from "@src/Context/Theme/ThemeProvider";
import { FC, PropsWithChildren } from "react";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;
