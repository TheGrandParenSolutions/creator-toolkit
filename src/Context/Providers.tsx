import AuthProvider from "@src/Context/Auth/AuthProvider";
import { CreditProvider } from "@src/Context/Credits/CreditProvider";
import { FFmpegProvider } from "@src/Context/FFmpeg/FFmpegProvider";
import { ThemeProvider } from "@src/Context/Theme/ThemeProvider";
import { FC, PropsWithChildren } from "react";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <CreditProvider>
        <AuthProvider>
          <FFmpegProvider>{children}</FFmpegProvider>
        </AuthProvider>
      </CreditProvider>
    </ThemeProvider>
  );
};

export default Providers;
