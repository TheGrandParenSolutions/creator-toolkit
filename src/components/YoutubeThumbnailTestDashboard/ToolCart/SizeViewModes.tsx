import CTToggleTabs from "@src/shared/SegmentedToggle/CTToggleTabs";
import { useState } from "react";

const SizeViewModes = () => {
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

  const [activeView, setActiveView] = useState<string>(views[0].label); // Default active view

  return (
    <CTToggleTabs
      tabs={views}
      activeTab={activeView}
      onToggle={event => setActiveView(event)}
    />
  );
};

export default SizeViewModes;
