import { FC, useState } from "react";
import YoutubeThumbnail from "@src/shared/Youtube/YoutubeThumbnail";
import { ViewModes } from "@src/PropTypes.ts/PropTypes";
import { deviceSizeModes } from "@src/utils/HelperUtils";
import CTToggleTabs from "@src/shared/SegmentedToggle/CTToggleTabs";

interface SizeViewProps {
  thumbnails: string[];
  title: string;
}

const SizeView: FC<SizeViewProps> = ({ thumbnails, title }) => {
  const [activeDeviceType, setActiveDeviceType] = useState<string>(
    Object.keys(deviceSizeModes)[0],
  );

  const handleDeviceTypeChange = (selectedTab: string) => {
    setActiveDeviceType(selectedTab);
  };

  const tabs = Object.keys(deviceSizeModes).map(deviceType => ({
    label: deviceType,
    component: deviceType,
    tooltip: `Youtube ${deviceType.toLowerCase()} layout preview.`,
  }));

  return (
    <div className="mx-auto flex w-full flex-col items-start space-y-5 overflow-x-hidden rounded-[24px] px-2 pb-16">
      {/* Device Type Toggle Tabs */}
      <div className="mt-2 flex w-full items-center justify-center">
        <CTToggleTabs
          tabs={tabs}
          activeTab={activeDeviceType}
          onToggle={handleDeviceTypeChange}
        />
      </div>

      {/* Render Active Device Type */}
      {Object.keys(deviceSizeModes).map(deviceType => {
        if (deviceType !== activeDeviceType) return null; // Show only the active device type
        const sizeModes =
          deviceSizeModes[deviceType as keyof typeof deviceSizeModes];
        return (
          <div key={deviceType}>
            <h1 className="mb-4 w-full items-start text-3xl font-bold text-zinc-900 dark:text-white">
              {deviceType}
            </h1>
            {sizeModes.map(mode => (
              <div key={mode.label}>
                <h2 className="my-4 text-xl font-semibold text-zinc-900 dark:text-white">
                  {mode.label}
                </h2>
                <div className="flex flex-wrap gap-8">
                  {thumbnails.map((thumbnail, index) => {
                    const [width, height] = mode.dimensions.split("x");
                    return (
                      <div
                        key={index}
                        className="shadow-xs rounded-3xl border-2 border-gray-50 bg-transparent p-6 dark:border-black dark:bg-gray-800"
                      >
                        <YoutubeThumbnail
                          thumbnail={thumbnail}
                          viewMode={mode.deviceType as ViewModes}
                          title={title ? title : undefined}
                          showDescription={!!mode.showDescription}
                          dimensionClasses={`w-[${width}px] h-[${height}px]`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SizeView;
