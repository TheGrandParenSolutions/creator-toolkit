import { ChevronDown, CircleSolid } from "@mynaui/icons-react";
import Logo from "@src/components/AppLogo/Logo";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, useMemo } from "react";
import DarkModeToggle from "@src/Utility/DarkModeToggle";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import UserProfile from "@src/shared/User/UserProfile";
import { Group, Text, ActionIcon, Menu } from "@mantine/core";
import {
  CrownIconSolid,
  ThumbnailDownloaderIcon,
  ThumbnailPreviewIcon,
  YoutubeToTextIcon,
} from "@src/shared/Icons/IconLib";
import { YTLogo } from "@src/shared/Icons/Logos";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { useCreditContext } from "@src/Context/Credits/CreditContext";
import Credits from "@src/components/Credits/Credits";
import { isNil } from "@src/utils/CommonUtils";

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
  const { credits } = useCreditContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isPremium = user?.type === "premium";
  const navigate = useNavigate();
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
        className="block rounded-xl text-black  transition hover:bg-[--brand--light-yellow] dark:text-white dark:hover:text-black"
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

  const getTotalCredits = (): number => {
    if (user?.id && isPremium) {
      return 500;
    } else if (user?.id && !isPremium) {
      return 50;
    } else {
      return 25;
    }
  };

  const TOTAL_CREDITS = useMemo(() => {
    return getTotalCredits();
  }, [user]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 bg-light-app  transition-all duration-300 dark:!bg-dark-app md:left-16 ${
        isScrolled
          ? "border border-solid border-zinc-50  shadow-sm  dark:border-black "
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-2 pl-4 pr-2">
        {/* Desktop Layout */}
        <div className="ml-8 flex w-auto justify-center md:mx-0 lg:justify-start">
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
                className="font-primary flex items-center text-base font-medium text-zinc-900 transition hover:text-yellow-500 dark:text-zinc-50 dark:hover:text-yellow-400"
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
            className={` font-primary text-base font-medium transition hover:text-yellow-500 hover:underline ${
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
          {!isNil(credits) && (
            <Credits credits={credits} totalCredits={TOTAL_CREDITS} />
          )}

          {isAuthenticated && user ? (
            <>
              {!isPremium && (
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

              <UserProfile />
            </>
          ) : (
            <CTBasicButton
              label="Log in"
              onClick={() => {
                navigate("/login");
              }}
            />
          )}
        </div>

        {/* Mobile Layout */}
        <div className="flex items-center justify-end lg:hidden">
          <div>
            {isAuthenticated && user ? (
              <UserProfile />
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
