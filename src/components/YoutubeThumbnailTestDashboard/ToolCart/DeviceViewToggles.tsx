import { Dispatch, SetStateAction } from "react";
import { Desktop, Search, Mobile, Sidebar } from "@mynaui/icons-react"; // Mynaui Icons
import { ViewModes } from "@src/PropTypes.ts/PropTypes";
import CTToggleTabs from "@src/shared/SegmentedToggle/CTToggleTabs";

const views = [
  { label: "Desktop", component: <Desktop />, id: "desktop" },
  { label: "Search", component: <Search />, id: "search" },
  { label: "Tablet", component: <Sidebar />, id: "tablet" },
  { label: "Mobile", component: <Mobile />, id: "mobile" },
];

const DeviceViewToggles = ({
  setActiveView,
  activeView,
}: {
  setActiveView: Dispatch<SetStateAction<ViewModes>>;
  activeView: ViewModes;
}) => {
  const handleToggle = (selectedLabel: string) => {
    const selectedView = views.find(view => view.label === selectedLabel);
    if (selectedView) {
      setActiveView(selectedView.id as ViewModes); // Update active view based on label
    }
  };

  return (
    <CTToggleTabs
      tabs={views} // Pass the views array directly as tabs
      activeTab={views.find(view => view.id === activeView)?.label || ""}
      onToggle={handleToggle} // Handle toggling
    />
  );
};

export default DeviceViewToggles;
