import { Text, Tooltip } from "@mantine/core";
import { ReactNode } from "react";

export interface TabsProps {
  label: string;
  component: ReactNode;
  tooltip?: string;
}

export interface CTToggleTabsProps {
  tabs: TabsProps[];
  activeTab: string;
  onToggle?: (selectedTab: string) => void;
}

const CTToggleTabs: React.FC<CTToggleTabsProps> = ({
  tabs,
  onToggle,
  activeTab,
}) => {
  const handleToggle = (tab: string) => {
    if (onToggle) {
      onToggle(tab);
    }
  };

  return (
    <div className="relative flex w-full max-w-5xl items-center justify-center gap-2 whitespace-nowrap rounded-3xl border border-solid border-zinc-200 bg-zinc-50 px-6  py-2 shadow-sm dark:border-2 dark:border-black dark:bg-zinc-800">
      {tabs.map(({ label, component, tooltip }, index) => {
        const tabButton = (
          <button
            key={index}
            onClick={() => handleToggle(label)}
            className={`flex items-center justify-center rounded-3xl
         border border-solid  bg-size-200 bg-pos-0 px-4 py-4 text-[10px] font-extrabold transition-all  duration-300 hover:bg-pos-100 md:text-sm ${
           activeTab === label
             ? " border-none bg-main-gradient text-zinc-900 "
             : " border-zinc-200 bg-zinc-100 text-zinc-500 hover:text-zinc-900 dark:border-zinc-700  dark:bg-zinc-800   dark:hover:text-zinc-100"
         }`}
            style={{
              minWidth: `calc(100% / ${tabs.length})`,
              maxWidth: "25%",
            }}
          >
            <Text
              component="h1"
              className="flex w-full items-center justify-center whitespace-pre-line text-center text-xs font-medium md:text-base"
            >
              {component}
            </Text>
          </button>
        );

        return tooltip ? (
          <Tooltip key={index} label={tooltip} className="hidden sm:block">
            {tabButton}
          </Tooltip>
        ) : (
          tabButton
        );
      })}
    </div>
  );
};

export default CTToggleTabs;
