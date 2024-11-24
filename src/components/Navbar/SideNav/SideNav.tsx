import { useState } from "react";
import {
  Home,
  BrandYoutube,
  LogoutSolid,
  ImageRectangleSolid,
  BrandYoutubeSolid,
  ImageRectangle,
  PanelLeftOpenSolid,
  PanelLeftCloseSolid,
  HomeSmileSolid,
  DollarHexagon,
  DollarHexagonSolid,
} from "@mynaui/icons-react";
import { Box, Center, Tooltip, UnstyledButton } from "@mantine/core";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface NavbarLinkProps {
  icon: React.ComponentType<any>;
  activeIcon: React.ComponentType<any>;
  label: string;
  active?: boolean;
  onClick?: () => void;
  isExpanded: boolean;
  to?: string; // Add a route path
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
  const navigate = useNavigate(); // Hook to handle navigation

  const handleNavigation = () => {
    if (to) navigate(to); // Navigate to the specified route
    if (onClick) onClick(); // Call the onClick callback if provided
  };

  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 20 }}>
      <UnstyledButton
        onClick={handleNavigation} // Use the navigation handler
        className={`flex items-center rounded-lg p-3 transition-all hover:bg-gray-100 ${
          active ? "bg-gray-200 font-semibold" : ""
        }`}
        data-active={active || undefined}
      >
        <div className="flex items-center justify-center">
          {active ? (
            <ActiveIcon className="text-xl" />
          ) : (
            <Icon className="text-xl" />
          )}
        </div>
        <span
          className={`ml-3 overflow-hidden truncate whitespace-nowrap transition-all duration-300 ${
            isExpanded ? "max-w-xs opacity-100" : "hidden max-w-0 opacity-0"
          }`}
        >
          {label}
        </span>
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
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
    icon: DollarHexagon,
    activeIcon: DollarHexagonSolid,
    label: "Pricing",
    to: "/pricing",
  },
];

export function SideNav() {
  const [active, setActive] = useState(0);
  const [panelOpen, setIsPanelOpen] = useState<boolean>(false);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      isExpanded={panelOpen}
    />
  ));

  return (
    <nav
      className={`flex h-screen flex-col shadow-md transition-all duration-300 ${
        panelOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Header */}
      <Box
        className={`flex items-center p-4 ${
          panelOpen ? "justify-between" : "justify-start"
        }`}
      >
        <Center className="cursor-pointer">
          <Tooltip label={panelOpen ? "Close sidebar" : "Open sidebar"}>
            {panelOpen ? (
              <PanelLeftCloseSolid
                className="text-lg"
                onClick={() => setIsPanelOpen(false)}
              />
            ) : (
              <PanelLeftOpenSolid
                className="text-lg"
                onClick={() => setIsPanelOpen(true)}
              />
            )}
          </Tooltip>
        </Center>
      </Box>

      {/* Main Links */}
      <div className="flex flex-grow flex-col space-y-1 px-2 pt-4">{links}</div>

      {/* Footer */}
      <div className="mb-4 px-2">
        <NavbarLink
          icon={LogoutSolid}
          activeIcon={LogoutSolid}
          label="Logout"
          isExpanded={panelOpen}
          to="/logout"
        />
      </div>
    </nav>
  );
}
