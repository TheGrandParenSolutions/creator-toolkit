import { ChevronDown, CircleSolid } from "@mynaui/icons-react";
import Logo from "@src/components/AppLogo/Logo";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import DarkModeToggle from "@src/Utility/DarkModeToggle";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import UserProfile from "@src/shared/User/UserProfile";
import { Group, Text, ActionIcon, Menu, Tooltip } from "@mantine/core";
import {
  CrownIconSolid,
  ThumbnailDownloaderIcon,
  ThumbnailPreviewIcon,
  YoutubeToTextIcon,
} from "@src/shared/Icons/IconLib";
import { YTLogo } from "@src/shared/Icons/Logos";

const youtubeFeatures = [
  {
    icon: YTLogo,
    title: "Youtube Downloader",
    description: "Download videos easily.",
    link: "/video-download-gear",
  },
  {
    icon: ThumbnailPreviewIcon,
    title: "Thumbnail Tester",
    description: "Test your thumbnails.",
    link: "/thumbnail-test",
  },
  {
    icon: YoutubeToTextIcon,
    title: "Youtube To Text",
    description: "Convert videos to text.",
    link: "/YoutubeToText",
  },
  {
    icon: ThumbnailDownloaderIcon,
    title: "Youtube Thumbnail Downloader",
    description: "Download youtube thumbnails.",
    link: "/thumbnail-downloader",
  },
];

export function MainNav() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isPremium = user?.type === "premium";
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
          <ActionIcon size={32} variant="filled" radius={"xl"} color="#f1f5f9">
            <feature.icon className="text-zinc-800" />
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
      className={`fixed left-0 right-0 top-0 z-40 bg-white transition-all duration-300 dark:!bg-dark-app md:left-14 ${
        isScrolled
          ? "border border-solid border-zinc-50 bg-opacity-85 shadow-sm backdrop-blur-sm dark:border-black dark:!bg-opacity-85"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between pl-4 pr-2 py-2">
        {/* Desktop Layout */}
        <div className="ml-8 md:mx-0 flex w-auto justify-center lg:justify-start">
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
                className="flex items-center text-sm font-medium text-zinc-900 transition hover:text-yellow-500 dark:text-zinc-50 dark:hover:text-yellow-400"
              >
                <span>Youtube</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </Menu.Target>
            <Menu.Dropdown className="border border-[--main-yellow] bg-zinc-50 p-1 dark:border-black dark:bg-zinc-700">
              {featureLinks}
            </Menu.Dropdown>
          </Menu>

          {/* Navigation Links */}
          <Link
            to="/pricing"
            className={`text-sm font-medium transition hover:text-yellow-500 hover:underline ${
              location.pathname === "/pricing"
                ? "text-yellow-500 underline"
                : "text-zinc-900 dark:text-zinc-50"
            }`}
          >
            Pricing
          </Link>
        </nav>

        {/* Login and CTA Button */}
        <div className="hidden items-center space-x-4 lg:flex">
          <DarkModeToggle />

          {isAuthenticated && user ? (
            <>
              {isPremium ? (
                <div className="flex flex-col items-center text-sm">
                  <Tooltip
                    label={
                      <Text className="pointer-events-none text-xs text-zinc-100">
                        Expires in {2} days
                      </Text>
                    }
                  >
                    <div className="flex flex-col items-center text-sm">
                      <CTAnimatedButton
                        w={120}
                        radius={"xl"}
                        label="Premium"
                        hoverLabel="Manage Plan"
                        to="/subscription"
                        buttonStyles="w-60 bg-yellow-500 text-black dark:bg-yellow-400 pointer-events-none"
                        icon={<CrownIconSolid />}
                      />
                    </div>
                  </Tooltip>
                </div>
              ) : (
                <CTAnimatedButton
                  w={120}
                  radius={"xl"}
                  label="Go pro"
                  hoverLabel="You will love it"
                  to="/pricing"
                  buttonStyles="w-60"
                  icon={<CrownIconSolid />}
                />
              )}

              <UserProfile user={user} />
            </>
          ) : (
            <Link
              to="/login"
              className="flex h-9 w-28 items-center justify-center rounded-full border-2 border-zinc-800 text-sm font-semibold hover:bg-zinc-800 hover:text-[--brand-dark-orange] hover:underline hover:shadow-inner hover:shadow-zinc-400 dark:border-zinc-200 dark:text-white dark:hover:bg-zinc-50 dark:hover:text-[--brand-dark-orange] dark:hover:shadow-inner dark:hover:shadow-zinc-600"
            >
              Log in
            </Link>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="flex items-center justify-end lg:hidden">
          <div>
            {isAuthenticated && user ? (
              <UserProfile user={user} />
            ) : (
              <CTAnimatedButton
                radius={"xl"}
                label="Go pro"
                hoverLabel="You will love it"
                to="/pricing"
                buttonStyles="w-24 md:w-60"
                icon={<CrownIconSolid />}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
