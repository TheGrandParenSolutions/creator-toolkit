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
    <div className="relative flex w-full max-w-5xl items-center justify-center gap-2 whitespace-nowrap rounded-full border border-solid border-[var(--main-yellow)] bg-transparent py-2 dark:border-2 dark:border-black dark:bg-zinc-800 px-6">
      {tabs.map(({ label, component, tooltip }, index) => {
        const tabButton = (
          <button
            key={index}
            onClick={() => handleToggle(label)}
            className={`flex items-center justify-center rounded-full px-2 md:px-2 py-2 text-[10px] md:text-sm font-medium transition-all duration-300 ${
              activeTab === label
                ? "bg-main-gradient text-black shadow-md"
                : "bg-zinc-200 text-zinc-500 hover:text-zinc-900 dark:bg-zinc-700 dark:hover:text-white"
            }`}
            style={{
              minWidth: `calc(100% / ${tabs.length})`,
              maxWidth: "25%",
            }}
          >
            <Text
              component="h1"
              className="flex items-center justify-center text-[8px] md:text-sm font-medium text-center whitespace-pre-line w-full"
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
