import { useState, useEffect } from "react";
import { SunSolid, MoonSolid } from "@mynaui/icons-react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem("theme") === "dark");
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      onClick={toggleDarkMode}
      className={`relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-1000`}
      style={{
        background: darkMode
          ? "linear-gradient(to right, #1e3a8a, #111827)"
          : "linear-gradient(to right, #87CEEB, #B0E0E6)",
        boxShadow: darkMode
          ? "0px 4px 12px rgba(0, 0, 0, 0.5)"
          : "0px 4px 12px rgba(135, 206, 250, 0.5)",
      }}
    >
      <div
        style={{
          boxShadow: "0px 0px 5px 0px yellow",
        }}
        className={`absolute flex h-6 w-6 items-center justify-center rounded-full shadow-2xl transition-all duration-1000 ${
          darkMode
            ? "translate-y-full opacity-0"
            : "translate-y-0 bg-yellow-300 opacity-100"
        }`}
      >
        <SunSolid className="h-5 w-5 text-yellow-600" />
      </div>

      <div
        style={{
          background: "linear-gradient(to right, #1e3a8a, #111827)",
          boxShadow: "0px 0px 5px 0px var(--custom-gray)",
        }}
        className={`absolute flex h-6 w-6 items-center justify-center rounded-full shadow-2xl transition-all duration-1000 ${
          darkMode
            ? "translate-y-0 bg-zinc-700 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <MoonSolid className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};

export default DarkModeToggle;
