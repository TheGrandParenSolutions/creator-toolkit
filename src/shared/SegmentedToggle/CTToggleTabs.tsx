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
    <div className="relative flex w-full max-w-5xl items-center justify-center gap-2 whitespace-nowrap rounded-[2.5rem] border border-solid border-[var(--main-yellow)] bg-transparent px-6 py-2 dark:border-2 dark:border-black dark:bg-zinc-800">
      {tabs.map(({ label, component, tooltip }, index) => {
        const tabButton = (
          <button
            key={index}
            onClick={() => handleToggle(label)}
            className={`flex items-center justify-center  rounded-[2.5rem]
              px-2 py-2 text-[10px] font-semibold  transition-all duration-300 md:px-2 md:text-sm ${
                activeTab === label
                  ? "bg-main-gradient text-zinc-900 shadow-[inset_3px_3px_5px_rgba(0,0,0,0.25),inset_-3px_-3px_5px_rgba(255,255,255,0.1)]"
                  : "bg-zinc-50 text-zinc-400 shadow-[inset_3px_3px_5px_rgba(0,0,0,0.15),inset_-3px_-3px_5px_rgba(255,255,255,0.8)] hover:text-zinc-900 dark:bg-zinc-700 dark:hover:text-white"
              }`}
            style={{
              minWidth: `calc(100% / ${tabs.length})`,
              maxWidth: "25%",
            }}
          >
            <Text
              component="h1"
              className="flex w-full items-center justify-center whitespace-pre-line text-center text-[8px] font-semibold md:text-base"
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
