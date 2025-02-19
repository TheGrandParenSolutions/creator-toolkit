import { useEffect, useState } from "react";
import { Box, Tooltip, UnstyledButton } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import DarkModeToggle from "@src/Utility/DarkModeToggle";
import {
  HomeIcon,
  HomeIconSolid,
  MoneyIcon,
  MoneyIconSolid,
  PanelLeftIcon,
  PanelRightIcon,
  RemoveBGIcon,
  RemoveBGIconSolid,
  ThumbnailDownloaderIcon,
  ThumbnailDownloaderIconSolid,
  ThumbnailPreviewIcon,
  ThumbnailPreviewIconSolid,
  VideoDownloadIcon,
  VideoDownloadIconSolid,
  YoutubeToTextIcon,
  YoutubeToTextIconSolid,
} from "@src/shared/Icons/IconLib";
import Hamburger from "@src/components/Navbar/Hamburger/Hamburger";

interface NavbarLinkProps {
  icon: React.ComponentType<any>;
  activeIcon: React.ComponentType<any>;
  label: string;
  active?: boolean;
  onClick?: () => void;
  isExpanded: boolean;
  to?: string;
}

function NavbarLink({
  icon: Icon,
  activeIcon: ActiveIcon,
  label,
  active,
  onClick,
  isExpanded,
  to,
}: NavbarLinkProps) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (to) navigate(to);
    if (onClick) onClick();
  };

  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 20 }}>
      <UnstyledButton
        onClick={handleNavigation}
        className={`flex items-center rounded-lg p-3 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-700 ${
          active ? "bg-zinc-200 font-semibold dark:!bg-zinc-700" : ""
        }`}
        data-active={active || undefined}
      >
        <div className="flex items-center justify-center">
          {active ? (
            <ActiveIcon className="text-xl text-zinc-900 dark:text-zinc-300" />
          ) : (
            <Icon className="text-xl text-zinc-700 dark:text-zinc-400" />
          )}
        </div>
        <span
          className={`ml-3 overflow-hidden truncate whitespace-nowrap transition-all duration-300 ${
            isExpanded
              ? "max-w-xs opacity-100 dark:text-zinc-200"
              : "hidden max-w-0 opacity-0"
          }`}
        >
          {label}
        </span>
      </UnstyledButton>
    </Tooltip>
  );
}

const linkContent = [
  { icon: HomeIcon, activeIcon: HomeIconSolid, label: "Home", to: "/" },
  {
    icon: VideoDownloadIcon,
    activeIcon: VideoDownloadIconSolid,
    label: "Video Download Gear",
    to: "/video-download-gear",
  },
  {
    icon: ThumbnailPreviewIcon,
    activeIcon: ThumbnailPreviewIconSolid,
    label: "Thumbnail test & preview",
    to: "/thumbnail-test",
  },
  {
    icon: YoutubeToTextIcon,
    activeIcon: YoutubeToTextIconSolid,
    label: "Youtube to text",
    to: "/YoutubeToText",
  },
  {
    icon: MoneyIcon,
    activeIcon: MoneyIconSolid,
    label: "Pricing",
    to: "/pricing",
  },
  {
    icon: ThumbnailDownloaderIcon,
    activeIcon: ThumbnailDownloaderIconSolid,
    label: "Thumbnail downloader",
    to: "/thumbnail-downloader",
  },
  {
    icon: RemoveBGIcon,
    activeIcon: RemoveBGIconSolid,
    label: "Remove background",
    to: "/remove-background",
  },
];

export function SideNav() {
  const location = useLocation();
  const { pathname } = location;
  const [active, setActive] = useState<number | null>(null);
  const [panelOpen, setIsPanelOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const links = linkContent.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        setIsPanelOpen(false);
      }}
      isExpanded={panelOpen}
    />
  ));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsPanelOpen(false); // Close side panel when switching to larger screens
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const activeIndex = linkContent.findIndex(link => link.to === pathname);
    setActive(activeIndex ? activeIndex : 0);
  }, [pathname]);

  return (
    <>
      {isMobile && (
        <button
          onClick={() => {
            setIsPanelOpen(!panelOpen);
          }}
          className="fixed left-2 top-[12px] z-[51]"
        >
          <Hamburger menuOpen={panelOpen} />
        </button>
      )}
      {/* Overlay */}
      {panelOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity dark:bg-opacity-75"
          onClick={() => setIsPanelOpen(false)} // Close SideNav when clicking outside
        />
      )}

      {/* SideNav */}
      <nav
        className={`fixed left-0 top-0 z-50 h-screen border border-none bg-white shadow-none transition-all duration-300 dark:border-black dark:bg-dark-app ${
          panelOpen ? "w-80" : isMobile ? "w-0" : "w-16"
        } overflow-hidden`}
      >
        <div>
          <Box
            className={`flex min-h-[48px] items-start justify-start px-4 py-2 ${
              panelOpen ? "justify-start font-semibold" : ""
            }`}
          >
            {!isMobile && (
              <Box className="cursor-pointer">
                <Tooltip label={panelOpen ? "Close sidebar" : "Open sidebar"}>
                  <UnstyledButton
                    onClick={() => setIsPanelOpen(!panelOpen)}
                    className={`flex items-center rounded-lg p-1 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-700`}
                    data-active={panelOpen || undefined}
                  >
                    <div className="flex items-center justify-center">
                      {panelOpen ? (
                        <PanelRightIcon className="text-xl dark:text-zinc-200" />
                      ) : (
                        <PanelLeftIcon className="text-xl dark:text-zinc-400" />
                      )}
                    </div>
                  </UnstyledButton>
                </Tooltip>
              </Box>
            )}
          </Box>

          <div className="flex flex-grow flex-col space-y-1 px-2 pt-4">
            {links}
          </div>
        </div>
        <div>
          <Box className={`flex items-center px-3 py-1 lg:hidden`}>
            <DarkModeToggle />
          </Box>
        </div>
      </nav>
    </>
  );
}
