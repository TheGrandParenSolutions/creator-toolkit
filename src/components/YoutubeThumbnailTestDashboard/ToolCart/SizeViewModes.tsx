import CTToggleTabs from "@src/shared/SegmentedToggle/CTToggleTabs";
import { Dispatch } from "react";

const SizeViewModes = ({
  activeSizeViewMode,
  setActiveSizeViewMode,
}: {
  activeSizeViewMode: string;
  setActiveSizeViewMode: Dispatch<string>;
}) => {
  const views = [
    {
      label: "Youtube view",
      component: "Youtube view",
    },
    {
      label: "Size view",
      component: "Size view",
    },
  ];

  return (
    <CTToggleTabs
      tabs={views}
      activeTab={activeSizeViewMode}
      onToggle={event => setActiveSizeViewMode(event)}
    />
  );
};

export default SizeViewModes;
