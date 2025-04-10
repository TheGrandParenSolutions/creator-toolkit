import { ChevronDown, CircleSolid } from "@mynaui/icons-react";
import Logo from "@src/components/AppLogo/Logo";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, useMemo } from "react";
import DarkModeToggle from "@src/Utility/DarkModeToggle";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import UserProfile from "@src/shared/User/UserProfile";
import { Group, Text, ActionIcon, Menu, Box, Tooltip } from "@mantine/core";
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
import { useSidebar } from "@src/Context/Sidebar/SidebarContext";
import Hamburger from "@src/components/Navbar/Hamburger/Hamburger";

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
  const { panelOpen, togglePanel } = useSidebar();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200); // Add shadow when scrolled
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
      className={`block rounded-xl text-black transition hover:bg-main-gradient dark:text-white dark:hover:text-black`}
    >
      <Link
        to={feature.link}
        className="block rounded-xl text-black  transition  dark:text-white dark:hover:text-black"
      >
        <Group className="flex-nowrap gap-2" align="center">
          <Text size="md" fw={600}>
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
      className={`fixed left-2 right-2 top-4 z-40 transition-all duration-700 md:left-0 md:right-0 ${
        isScrolled
          ? "mx-auto max-w-[85%] rounded-3xl border border-white/10 bg-white/10 px-4 py-2 shadow-md backdrop-blur-md dark:bg-zinc-900/30"
          : "mx-auto max-w-[95%] bg-transparent px-4 py-2"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between py-2 pl-4 pr-2">
        {/* Desktop Layout */}
        <div className="flex w-auto justify-center gap-10 md:mx-0 md:gap-20 lg:justify-start">
          <Box className="flex items-center justify-center">
            <Tooltip label={panelOpen ? "Close sidebar" : "Open sidebar"}>
              <button
                onClick={() => togglePanel()}
                className=" z-[51] rounded-3xl p-2 shadow-ct-light dark:shadow-ct-dark "
              >
                <Hamburger menuOpen={panelOpen} />
              </button>
            </Tooltip>
          </Box>
          <div className="hidden lg:flex">
            <Logo />
          </div>
        </div>
        <div className="flex lg:!hidden">
          <Logo />
        </div>
        <div className="lg:hidden"></div>

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
                className="font-primary group flex items-center text-xs font-medium  text-zinc-900 transition hover:text-yellow-500 dark:text-zinc-50 dark:hover:text-yellow-400 md:text-base lg:text-xl"
              >
                <span>Features</span>
                <ChevronDown className="ml-1 h-4 w-4 rotate-0 transform transition-transform duration-500 group-hover:rotate-180" />
              </a>
            </Menu.Target>
            <Menu.Dropdown
              classNames={{
                dropdown:
                  "bg-zinc-50 dark:bg-zinc-800 shadow-ct-light dark:shadow-ct-dark rounded-[2.5rem] border-none  dark:shadow-zinc-700 px-3 py-4",
              }}
            >
              {featureLinks}
            </Menu.Dropdown>
          </Menu>

          {/* Navigation Links */}
          <Link
            to="/pricing"
            className={` font-primary text-xs font-medium  transition hover:text-yellow-500 hover:underline md:text-base lg:text-xl ${
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
        <div className=" hidden items-center justify-end">
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
