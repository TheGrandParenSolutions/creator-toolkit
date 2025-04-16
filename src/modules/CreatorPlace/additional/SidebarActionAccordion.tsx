import { Accordion } from "@mantine/core";
import { ReactNode, useContext } from "react";
import { ThemeContext } from "@src/Context/Theme/ThemeContext";
import {
  ArrowDiagonalOne,
  ChevronUpSolid,
  CreditCard,
  Gift,
  Logout,
  Question,
  User,
} from "@mynaui/icons-react";
import ShinyText from "@src/shared/Animated/Text/ShinyText";
import { GearIcon, SettingIcon } from "@src/shared/Icons/IconLib";

type SidebarAction = {
  label: string;
  icon: ReactNode;
  href?: string;
};

const sidebarActions: SidebarAction[] = [
  { label: "Get free tokens", icon: <Gift size={24} /> },
  { label: "Settings", icon: <GearIcon size={24} /> },
  {
    label: "Help Center",
    icon: <Question size={24} />,
    href: "https://support.bolt.new",
  },
  { label: "My Subscription", icon: <CreditCard size={24} /> },
  { label: "Select Account", icon: <User size={24} /> },
  { label: "Sign Out", icon: <Logout size={24} /> },
];

const hoverColorMap: Record<string, string> = {
  "Get free tokens":
    "text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-400/10",
  Settings:
    "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white",
  "Help Center":
    "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white",
  "My Subscription":
    "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white",
  "Select Account":
    "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white",
  "Sign Out":
    "text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-400/10 hover:text-red-700 dark:hover:text-red-500",
};

const SidebarActionAccordion = () => {
  const { darkMode } = useContext(ThemeContext);
  const isDark = darkMode === true;

  const handleAction = (label: string) => {
    switch (label) {
      case "Get free tokens":
        console.log("Getting tokens");
        break;
      case "Settings":
        console.log("Open settings");
        break;
      case "My Subscription":
        console.log("View subscription");
        break;
      case "Select Account":
        console.log("Selecting account");
        break;
      case "Sign Out":
        console.log("Signing out");
        break;
      default:
        break;
    }
  };

  return (
    <Accordion
      variant="contained"
      defaultValue="" // closed by default
      className="w-full"
      styles={{
        item: { background: "transparent", border: "none" },
      }}
    >
      <Accordion.Item value="user-actions">
        <Accordion.Control
          classNames={{ control: "!px-4 !py-2" }}
          chevron={<ChevronUpSolid />}
          icon={<SettingIcon />}
          className={` text-sm font-semibold transition ${
            isDark
              ? "bg-zinc-800/60 text-white hover:bg-zinc-700"
              : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
          }`}
        >
          <div className="flex w-full items-center justify-between">
            <span className="text-base font-medium tracking-wide">More</span>
          </div>
        </Accordion.Control>

        <Accordion.Panel>
          <div className="flex flex-col gap-1 py-2">
            {sidebarActions.map(({ label, icon, href }) => {
              const classes = `
                flex items-center gap-3 px-3 py-2 rounded-md text-sm transition
                ${hoverColorMap[label] || ""}
              `;

              return href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${classes}`}
                >
                  {icon}
                  <span className="flex-1">{label}</span>
                  <ArrowDiagonalOne className="text-xs opacity-70 group-hover:opacity-100" />
                </a>
              ) : (
                <button
                  key={label}
                  onClick={() => handleAction(label)}
                  className={`group ${classes}`}
                >
                  {icon}
                  {label === "Get free tokens" ? (
                    <ShinyText text={label} />
                  ) : (
                    <span>{label}</span>
                  )}
                </button>
              );
            })}
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default SidebarActionAccordion;
