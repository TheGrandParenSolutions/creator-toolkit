import { Menu, Divider } from "@mantine/core";
import { Rocket } from "@mynaui/icons-react";
import Logo from "@src/components/AppLogo/Logo";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton.tsx/CTAnimatedButton.tsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DarkModeToggle from "@src/Utility/DarkModeToggle/DarkModeToggle";

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Add shadow when scrolled
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed bg-white dark:!bg-dark-app left-12 right-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-opacity-85 dark:!bg-opacity-85 backdrop-blur-sm border border-solid border-gray-50 dark:border-gray-800 shadow-sm"
          : ""
      }`}
    >
      <div className="max-w-A7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Logo />
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            to="/youtube-downloader"
            className="text-sm font-medium text-gray-800 dark:text-gray-300 transition hover:text-gray-600 dark:hover:text-gray-400 hover:underline"
          >
            YouTube Downloader
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium text-gray-800 dark:text-gray-300 transition hover:text-gray-600 dark:hover:text-gray-400 hover:underline"
          >
            Pricing
          </Link>
          {/* Dropdown using Mantine Menu */}
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <button className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-300 transition hover:text-gray-600 dark:hover:text-gray-400 hover:underline">
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 011.414 0L10 11.293l3.293-3.586a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Menu.Target>

            <Menu.Dropdown className="dark:bg-dark-app">
              <Menu.Item className="dark:text-gray-200 dark:bg-dark-app-content">Blog</Menu.Item>
              <Menu.Item className="dark:text-gray-200 dark:bg-dark-app-content">Case Studies</Menu.Item>
              <Divider className="dark:bg-gray-600" />
              <Menu.Item className="dark:text-gray-200 dark:bg-dark-app-content">Help Center</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </nav>

        {/* Login and CTA Button */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <Link
            to="/login"
            className="text-sm font-medium text-gray-800 dark:text-gray-300 transition hover:text-gray-600 dark:hover:text-gray-400 hover:underline"
          >
            Log in
          </Link>

          <CTAnimatedButton
            w={140}
            radius={"xl"}
            label="Go pro"
            hoverLabel="You will love it"
            to="/pricing"
            buttonStyles="w-60"
            icon={<Rocket />}
          />
        </div>
      </div>
    </header>
  );
}
