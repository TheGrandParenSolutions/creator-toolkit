import { useContext } from "react";
import { SunSolid, MoonSolid } from "@mynaui/icons-react";
import { ThemeContext } from "@src/Context/Theme/ThemeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleDarkMode}
      className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent transition-all duration-500"
    >
      {/* Sun Icon */}
      <div
        className={`absolute flex h-7 w-7 items-center justify-center rounded-full shadow-2xl transition-all duration-500 ${
          darkMode
            ? "animate-disappear"
            : "animate-appear bg-yellow-300 shadow-yellow-500"
        }`}
      >
        <SunSolid className="h-6 w-6 text-yellow-600" />
      </div>

      {/* Moon Icon */}
      <div
        className={`absolute flex h-7 w-7 items-center justify-center rounded-full shadow-2xl transition-all duration-500 ${
          darkMode
            ? "animate-appear bg-slate-700 shadow-slate-300"
            : "animate-disappear"
        }`}
      >
        <MoonSolid className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default DarkModeToggle;
