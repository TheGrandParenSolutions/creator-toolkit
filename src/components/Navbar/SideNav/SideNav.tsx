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

interface NavbarLinkProps {
  icon: React.ComponentType<any>;
  activeIcon: React.ComponentType<any>;
  label: string;
  active?: boolean;
  onClick?: () => void;
  isExpanded: boolean;
}

function NavbarLink({
  icon: Icon,
  activeIcon: ActiveIcon,
  label,
  active,
  onClick,
  isExpanded,
}: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 20 }}>
      <UnstyledButton
        onClick={onClick}
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
          className={`ml-3 overflow-hidden whitespace-nowrap transition-all duration-300 truncate ${
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
  { icon: Home, activeIcon: HomeSmileSolid, label: "Home" },
  {
    icon: BrandYoutube,
    activeIcon: BrandYoutubeSolid,
    label: "Youtube downloader",
  },
  {
    icon: ImageRectangle,
    activeIcon: ImageRectangleSolid,
    label: "Thumbnail test & preview",
  },
  {
    icon: DollarHexagon,
    activeIcon: DollarHexagonSolid,
    label: "Pricing",
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
      className={`flex flex-col h-screen shadow-md transition-all duration-300 ${
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
        />
      </div>
    </nav>
  );
}
