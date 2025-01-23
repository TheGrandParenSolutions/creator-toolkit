import {
  Rocket,
  ChevronDown,
  Image,
  BrandYoutube,
  FileText,
  CircleSolid,
} from "@mynaui/icons-react";
import Logo from "@src/components/AppLogo/Logo";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import DarkModeToggle from "@src/Utility/DarkModeToggle";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import UserProfile from "@src/shared/User/UserProfile";
import { Group, Text, ActionIcon, Menu } from "@mantine/core";
import { ThumbnailDownloaderIcon } from "@src/shared/Icons/IconLib";

const youtubeFeatures = [
  {
    icon: BrandYoutube,
    title: "Youtube Downloader",
    description: "Download videos easily.",
    link: "/video-download-gear",
  },
  {
    icon: Image,
    title: "Thumbnail Tester",
    description: "Test your thumbnails.",
    link: "/thumbnail-test",
  },
  {
    icon: FileText,
    title: "Youtube To Text",
    description: "Convert videos to text.",
    link: "/YoutubeToText",
  },
  {
    icon: ThumbnailDownloaderIcon,
    title: "Youtube Thumbnail Downloader",
    description: "Download youtube thumbnails.",
    link: "/thumbnail-downloader"
  }
];

export function MainNav() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  // Generate links dynamically for the Menu with Active State
  const featureLinks = youtubeFeatures.map(feature => (
    <Menu.Item
      key={feature.title}
      className={`block rounded-xl text-black transition hover:bg-[--brand--light-yellow] dark:text-white dark:hover:text-black`}
    >
      <Link
        to={feature.link}
        className="block rounded-xl text-black transition hover:bg-[--brand--light-yellow] dark:text-white dark:hover:text-black"
      >
        <Group className="flex-nowrap gap-2" align="center">
          <ActionIcon size={24} variant="filled" radius={"xl"} color="#ffd580">
            <feature.icon className="text-slate-800" size={18} />
          </ActionIcon>
          <Text size="sm" fw={600}>
            {feature.title}
          </Text>
          {/* Active Icon */}
          {location.pathname === feature.link && (
            <ActionIcon size={18} variant="transparent" color="green">
              <CircleSolid className="text-teal-500" size={8} />
            </ActionIcon>
          )}
        </Group>
      </Link>
    </Menu.Item>
  ));

  return (
    <header
      className={`fixed left-14 right-0 top-0 z-40 bg-white transition-all duration-300 dark:!bg-dark-app ${
        isScrolled
          ? "border border-solid border-gray-50 bg-opacity-85 shadow-sm backdrop-blur-sm dark:border-black dark:!bg-opacity-85"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        {/* Desktop Layout */}
        <div className="mx-0 flex w-auto justify-center lg:justify-start">
          {/* Logo */}
          <Logo />
        </div>

        <nav className="hidden items-center space-x-6 lg:flex">
          {/* Menu for YouTube Features */}
          <Menu
            trigger="click-hover"
            width={250}
            position="bottom"
            radius="lg"
            shadow="md"
            openDelay={100}
            closeDelay={100}
            transitionProps={{ transition: "pop", duration: 150 }}
          >
            <Menu.Target>
              <a
                href="#"
                className="flex items-center text-sm font-medium text-gray-900 transition hover:text-yellow-500 dark:text-gray-50 dark:hover:text-yellow-400"
              >
                <span>Youtube</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </Menu.Target>
            <Menu.Dropdown className="border border-[--main-yellow] bg-slate-50 p-1 dark:border-black dark:bg-slate-700">
              {featureLinks}
            </Menu.Dropdown>
          </Menu>

          {/* Navigation Links */}
          <Link
            to="/pricing"
            className={`text-sm font-medium transition hover:text-yellow-500 hover:underline ${
              location.pathname === "/pricing"
                ? "text-yellow-500 underline"
                : "text-gray-900 dark:text-gray-50"
            }`}
          >
            Pricing
          </Link>
        </nav>

        {/* Login and CTA Button */}
        <div className="hidden items-center space-x-4 lg:flex">
          <DarkModeToggle />
          <CTAnimatedButton
            w={120}
            radius={"xl"}
            label="Go pro"
            hoverLabel="You will love it"
            to="/pricing"
            buttonStyles="w-60"
            icon={<Rocket />}
          />
          {isAuthenticated && user ? (
            <UserProfile user={user} />
          ) : (
            <Link
              to="/login"
              className="flex h-9 w-28 items-center justify-center rounded-full border-2 border-gray-800 text-sm font-semibold hover:bg-slate-800 hover:text-[--brand-dark-orange] hover:underline hover:shadow-inner hover:shadow-slate-400 dark:border-gray-200 dark:text-white dark:hover:bg-slate-50 dark:hover:text-[--brand-dark-orange] dark:hover:shadow-inner dark:hover:shadow-slate-600"
            >
              Log In
            </Link>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="flex items-center justify-end lg:hidden">
          <div>
            {isAuthenticated && user ? (
              <UserProfile user={user} />
            ) : (
              <Link
                to="/login"
                className="flex items-center justify-center rounded-3xl border-2 border-gray-800 px-3 py-1 text-xs font-semibold hover:bg-slate-800 hover:text-[--brand-dark-orange] hover:underline hover:shadow-inner hover:shadow-slate-400 dark:border-gray-200 dark:text-white dark:hover:bg-slate-50 dark:hover:text-[--brand-dark-orange] dark:hover:shadow-inner dark:hover:shadow-slate-600"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
