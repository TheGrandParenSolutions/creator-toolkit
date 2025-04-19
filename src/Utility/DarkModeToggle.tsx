import { useContext } from "react";
import { ThemeContext } from "@src/Context/Theme/ThemeContext";
import { AnimatedMoonIcon,  SunIcon } from "@src/shared/Icons/IconLib";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleDarkMode}
      className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent transition-all duration-300"
    >
      {/* Sun Icon */}
      <div
        className={`absolute flex h-7 w-7 items-center justify-center rounded-full shadow-2xl transition-all ${
          darkMode
            ? "animate-disappear"
            : "animate-appear bg-amber-50 shadow-amber-300"
        }`}
      >
        <SunIcon className="h-6 w-6" />
      </div>

      {/* Moon Icon */}
      <div
        className={`absolute flex h-7 w-7 items-center justify-center rounded-full shadow-2xl transition-all  ${
          darkMode
            ? "animate-appear bg-zinc-700 shadow-zinc-300"
            : "animate-disappear"
        }`}
      >
        <AnimatedMoonIcon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default DarkModeToggle;
