import { Menu, Divider } from "@mantine/core";
import { Rocket } from "@mynaui/icons-react";
import Logo from "@src/components/AppLogo/Logo";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton.tsx/CTAnimatedButton.tsx";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import DarkModeToggle from "@src/Utility/DarkModeToggle/DarkModeToggle";
import { AuthContext } from "@src/Context/AuthContext";
import UserProfile from "@src/shared/User/UserProfile";

export function MainNav() {
  const { isAuthenticated, user } = useContext(AuthContext);

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
      className={`fixed left-12 right-0 top-0 z-40 bg-white transition-all duration-300 dark:!bg-dark-app ${
        isScrolled
          ? "border border-solid border-gray-50 bg-opacity-85 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:!bg-opacity-85"
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
            className="text-sm font-medium text-gray-800 transition hover:text-gray-600 hover:underline dark:text-gray-300 dark:hover:text-gray-400"
          >
            YouTube Downloader
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium text-gray-800 transition hover:text-gray-600 hover:underline dark:text-gray-300 dark:hover:text-gray-400"
          >
            Pricing
          </Link>
          {/* Dropdown using Mantine Menu */}
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <button className="flex items-center text-sm font-medium text-gray-800 transition hover:text-gray-600 hover:underline dark:text-gray-300 dark:hover:text-gray-400">
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
              <Menu.Item className="dark:bg-dark-app-content dark:text-gray-200">
                Blog
              </Menu.Item>
              <Menu.Item className="dark:bg-dark-app-content dark:text-gray-200">
                Case Studies
              </Menu.Item>
              <Divider className="dark:bg-gray-600" />
              <Menu.Item className="dark:bg-dark-app-content dark:text-gray-200">
                Help Center
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </nav>

        {/* Login and CTA Button */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <CTAnimatedButton
            w={120}
            radius={"xl"}
            label="Go pro"
            hoverLabel="You will love it"
            to="/pricing"
            buttonStyles="w-60 font-bold"
            icon={<Rocket />}
          />
          {isAuthenticated && user ? (
            <UserProfile user={user} />
          ) : (
            <Link
              to="/login"
              className="flex h-9 w-32 items-center justify-center rounded-full border-2 border-gray-800 text-sm font-bold hover:bg-slate-800 hover:text-[--brand-dark-orange]  hover:underline hover:shadow-inner hover:shadow-slate-400 dark:border-gray-200 dark:text-white dark:hover:bg-slate-50
            dark:hover:text-[--brand-dark-orange] dark:hover:shadow-inner dark:hover:shadow-slate-600"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
