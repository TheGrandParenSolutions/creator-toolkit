import { useState } from "react";
import {
  Home,
  BrandYoutube,
  ImageRectangleSolid,
  BrandYoutubeSolid,
  ImageRectangle,
  PanelLeftCloseSolid,
  HomeSmileSolid,
  DollarHexagon,
  DollarHexagonSolid,
  PanelLeftOpen,
  FileText,
  FileTextSolid,
} from "@mynaui/icons-react";
import { Box, Tooltip, UnstyledButton } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "@src/Utility/DarkModeToggle";

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
        className={`flex items-center rounded-lg p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-700 ${
          active ? "bg-gray-200 font-semibold dark:!bg-gray-700" : ""
        }`}
        data-active={active || undefined}
      >
        <div className="flex items-center justify-center">
          {active ? (
            <ActiveIcon className="text-xl dark:text-gray-300" />
          ) : (
            <Icon className="text-xl dark:text-gray-400" />
          )}
        </div>
        <span
          className={`ml-3 overflow-hidden truncate whitespace-nowrap transition-all duration-300 ${
            isExpanded
              ? "max-w-xs opacity-100 dark:text-gray-200"
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
  { icon: Home, activeIcon: HomeSmileSolid, label: "Home", to: "/" },
  {
    icon: BrandYoutube,
    activeIcon: BrandYoutubeSolid,
    label: "Youtube downloader",
    to: "/youtube-downloader",
  },
  {
    icon: ImageRectangle,
    activeIcon: ImageRectangleSolid,
    label: "Thumbnail test & preview",
    to: "/thumbnail-test",
  },
  {
    icon: FileText,
    activeIcon: FileTextSolid,
    label: "Youtube to text",
    to: "/YoutubeToText",
  },
  {
    icon: DollarHexagon,
    activeIcon: DollarHexagonSolid,
    label: "Pricing",
    to: "/pricing",
  },
];

export function SideNav() {
  const [active, setActive] = useState(0);
  const [panelOpen, setIsPanelOpen] = useState<boolean>(false);

  const links = linkContent.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      isExpanded={panelOpen}
    />
  ));

  return (
    <>
      {/* Overlay */}
      {panelOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity dark:bg-opacity-75"
          onClick={() => setIsPanelOpen(false)} // Close SideNav when clicking outside
        />
      )}

      {/* SideNav */}
      <nav
        className={`fixed left-0 top-0 z-50 h-screen border border-solid border-gray-50 bg-white shadow-sm transition-all duration-300 dark:border-black dark:bg-dark-app ${
          panelOpen ? "w-64" : "w-16"
        }`}
      >
        <div>
          <Box
            className={`flex items-start justify-start px-4 py-2 ${
              panelOpen ? "justify-start font-semibold" : ""
            }`}
          >
            <Box className="cursor-pointer">
              <Tooltip label={panelOpen ? "Close sidebar" : "Open sidebar"}>
                <UnstyledButton
                  onClick={() => setIsPanelOpen(!panelOpen)}
                  className={`flex items-center rounded-lg p-1 transition-all hover:bg-gray-100 dark:hover:bg-gray-700`}
                  data-active={panelOpen || undefined}
                >
                  <div className="flex items-center justify-center">
                    {panelOpen ? (
                      <PanelLeftCloseSolid className="text-xl dark:text-gray-200" />
                    ) : (
                      <PanelLeftOpen className="text-xl dark:text-gray-400" />
                    )}
                  </div>
                </UnstyledButton>
              </Tooltip>
            </Box>
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
