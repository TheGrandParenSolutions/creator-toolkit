import { Dispatch, SetStateAction } from "react";
import { Desktop, Search, Mobile, Sidebar } from "@mynaui/icons-react"; // Mynaui Icons
import { ViewModes } from "@src/PropTypes.ts/PropTypes";
import CTToggleTabs from "@src/shared/SegmentedToggle/CTToggleTabs";

const views = [
  {
    label: "Desktop",
    component: <Desktop />,
    id: "desktop",
    tooltip: "Youtube desktop layout preview.",
  },
  {
    label: "Search",
    component: <Search />,
    id: "search",
    tooltip: "Thumbnail in Youtube search results.",
  },
  {
    label: "Tablet",
    component: <Sidebar />,
    id: "tablet",
    tooltip: "Youtube tablet layout preview.",
  },
  {
    label: "Mobile",
    component: <Mobile />,
    id: "mobile",
    tooltip: "Youtube mobile layout preview.",
  },
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
