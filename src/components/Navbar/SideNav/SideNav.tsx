import { useContext, useEffect, useState } from "react";
import { Box, Tooltip, UnstyledButton } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  HomeIconSolid,
  MoneyIcon,
  MoneyIconSolid,
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
import UserProfile from "@src/shared/User/UserProfile";
import DarkModeToggle from "@src/Utility/DarkModeToggle";
import { useSidebar } from "@src/Context/Sidebar/SidebarContext";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { AuthContext } from "@src/Context/Auth/AuthContext";

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
        className={`my-1 flex transform items-center rounded-2xl p-3 transition-all duration-200 ease-in-out
          hover:scale-[1.01] hover:bg-zinc-100 dark:hover:bg-zinc-800            
          ${
            active
              ? "bg-zinc-100  shadow-ct-light ring-1 ring-zinc-200   dark:bg-zinc-800 dark:shadow-ct-dark dark:ring-zinc-700"
              : ""
          }

        `}
        data-active={active || undefined}
      >
        <div className="flex items-center justify-center">
          {active ? (
            <ActiveIcon className="text-xl text-zinc-900 dark:text-zinc-100" />
          ) : (
            <Icon className="text-xl text-zinc-700 dark:text-zinc-400" />
          )}
        </div>
        <span
          className={`ml-3 overflow-hidden truncate whitespace-nowrap transition-all duration-300 
            ${
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

const linkGroups = [
  {
    label: "Main",
    links: [
      { icon: HomeIcon, activeIcon: HomeIconSolid, label: "Home", to: "/" },
      {
        icon: MoneyIcon,
        activeIcon: MoneyIconSolid,
        label: "Pricing",
        to: "/pricing",
      },
    ],
  },
  {
    label: "Tools",
    links: [
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
    ],
  },
];

export function SideNav() {
  const location = useLocation();
  const { pathname } = location;
  const [active, setActive] = useState<number | null>(null);
  const { isAuthenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const { panelOpen, setPanelOpen } = useSidebar();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setPanelOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const activeIndex = linkGroups
      .flatMap(g => g.links)
      .findIndex(link => link.to === pathname);
    setActive(activeIndex !== -1 ? activeIndex : 0);
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem("panelOpen", String(panelOpen));
  }, [panelOpen]);

  let flatIndex = 0;

  return (
    <>
      {isMobile && panelOpen && (
        <button
          onClick={() => setPanelOpen(!panelOpen)}
          className="fixed left-1 top-[10px] z-[51]"
        >
          <Hamburger menuOpen={panelOpen} />
        </button>
      )}

      {panelOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity dark:bg-opacity-75"
          onClick={() => setPanelOpen(false)}
        />
      )}

      <nav
        className={`fixed left-0 top-0 z-50 h-full overflow-hidden rounded-none border-none bg-light-app shadow-sm  transition-[width] duration-500 ease-in-out dark:border-black dark:bg-dark-app-content
        ${panelOpen ? "w-80" : isMobile ? "w-0" : "w-0"}`}
      >
        <Box className="min-h-12 cursor-pointer px-4 pb-2 pt-2">
          {!isMobile && panelOpen && (
            <Tooltip label={panelOpen ? "Close sidebar" : "Open sidebar"}>
              <button
                onClick={() => setPanelOpen(!panelOpen)}
                className="fixed left-1 top-[10px] z-[51]"
              >
                <Hamburger menuOpen={panelOpen} />
              </button>
            </Tooltip>
          )}
        </Box>
        <div className="mt-12 flex h-[calc(100%-90px)] flex-col justify-between">
          {/* Links */}
          <div className="flex-grow space-y-4 overflow-y-auto">
            {linkGroups.map(group => (
              <div key={group.label}>
                {panelOpen && (
                  <div className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    <h1>{group.label}</h1>
                  </div>
                )}
                <div className="flex flex-col space-y-1 px-2">
                  {group.links.map(link => {
                    const isActive = flatIndex === active;
                    const linkComponent = (
                      <NavbarLink
                        {...link}
                        key={link.label}
                        active={isActive}
                        isExpanded={panelOpen}
                        onClick={() => {
                          setActive(flatIndex);
                          setPanelOpen(false);
                        }}
                      />
                    );
                    flatIndex++;
                    return linkComponent;
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between px-4 py-4 shadow-2xl">
            <div className="flex items-center space-x-3">
              {isAuthenticated && user ? (
                <UserProfile />
              ) : (
                <CTBasicButton
                  label="Log in"
                  onClick={() => {
                    setPanelOpen(false);
                    navigate("/login");
                  }}
                />
              )}
            </div>
            {panelOpen && <DarkModeToggle />}
          </div>
        </div>
      </nav>
    </>
  );
}
