import { useState, useEffect } from "react";
import { Sun, Moon } from "@mynaui/icons-react"; 

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
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out"
    >
      {darkMode ? (
        <Sun size={24} className="text-yellow-400" />
      ) : (
        <Moon size={24} className="text-blue-400" />
      )}
    </button>
  );
};

export default DarkModeToggle;
