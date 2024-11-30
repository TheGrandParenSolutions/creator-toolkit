import { Dispatch, SetStateAction } from "react";
import { Desktop, Search, Tablet, Mobile } from "@mynaui/icons-react"; // Mynaui Icons
import { ViewModes } from "@src/PropTypes.ts/PropTypes";

const views = [
  { id: "desktop", icon: <Desktop className="h-6 w-6" />, label: "Desktop" },
  { id: "search", icon: <Search className="h-6 w-6" />, label: "Search" },
  { id: "tablet", icon: <Tablet className="h-6 w-6" />, label: "Tablet" },
  { id: "mobile", icon: <Mobile className="h-6 w-6" />, label: "Mobile" },
];

const DeviceViewToggles = ({
  setActiveView,
  activeView,
}: {
  setActiveView: Dispatch<SetStateAction<ViewModes>>;
  activeView: ViewModes;
}) => {
  return (
    <div className="relative flex w-full max-w-md justify-between rounded-full border-[1px] border-solid border-[var(--brand-dark-orange)] bg-gray-50 dark:bg-gray-800 px-1 py-1">
      {/* Active Background */}
      <div
        className={`absolute left-0 top-0 h-full w-1/4 rounded-full bg-[var(--brand-mid-yellow)] transition-transform duration-300`}
        style={{
          transform: `translateX(${
            views.findIndex((view) => view.id === activeView) * 100
          }%)`,
        }}
      ></div>

      {/* Buttons */}
      {views.map((view) => (
        <button
          key={view.id}
          onClick={() => setActiveView(view.id as ViewModes)}
          className={`relative z-10 flex w-1/4 items-center justify-center p-2 text-center text-sm font-medium transition-all ${
            activeView === view.id
              ? "text-black dark:text-gray-900"
              : "text-[var(--brand-gray)] dark:text-gray-400"
          }`}
        >
          {view.icon}
        </button>
      ))}
    </div>
  );
};

export default DeviceViewToggles;
