import { useState } from "react";

import { HomeSolid, DownloadSolid, MenuSolid } from "@mynaui/icons-react";
import { Center, Stack, Tooltip, UnstyledButton } from "@mantine/core";
import classes from "./SideNav.module.css";

interface NavbarLinkProps {
  icon: React.ComponentType<any>;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon className={classes.icon} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: HomeSolid, label: "Home" },
  { icon: DownloadSolid, label: "Youtube downloader" },
];

export function SideNav() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center className="cursor-pointer">
        <Tooltip label="Open menu">
          <MenuSolid fill="black" />
        </Tooltip>
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={HomeSolid} label="Change account" />
        <NavbarLink icon={HomeSolid} label="Logout" />
      </Stack>
    </nav>
  );
}
