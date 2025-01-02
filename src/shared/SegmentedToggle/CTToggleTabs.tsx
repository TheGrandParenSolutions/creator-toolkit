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
      onToggle(tab); // Trigger callback with the selected view
    }
  };

  return (
    <div className="relative flex w-full max-w-lg items-center justify-between gap-2 rounded-full border border-solid border-[var(--main-yellow)] bg-transparent p-2 dark:border-2 dark:border-black dark:bg-gray-800">
      {tabs.map(({ label, component, tooltip }, index) => {
        const tabButton = (
          <button
            key={index}
            onClick={() => handleToggle(label)}
            className={`flex flex-1 items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === label
                ? "bg-main-gradient text-black shadow-md"
                : "bg-gray-200 text-gray-400 hover:text-gray-900 dark:bg-gray-700 dark:hover:text-white"
            }`}
          >
            <Text component="h1" className="text-sm font-medium">
              {component}
            </Text>
          </button>
        );

        return tooltip ? (
          <Tooltip key={index} label={tooltip}>
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
