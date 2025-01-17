import AuthProvider from "@src/Context/Auth/AuthProvider";
import { FFmpegProvider } from "@src/Context/FFmpeg/FFmpegProvider";
import { ThemeProvider } from "@src/Context/Theme/ThemeProvider";
import { FC, PropsWithChildren } from "react";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FFmpegProvider>{children}</FFmpegProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;
