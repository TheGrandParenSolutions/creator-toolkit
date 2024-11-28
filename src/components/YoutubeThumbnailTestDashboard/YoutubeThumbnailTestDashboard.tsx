import { useState } from "react";
import YoutubeThumbnail from "@src/shared/Youtube/YoutubeThumbnail";
import ViewModes from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/ViewModes";
import DeviceViewToggles from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/DeviceViewToggles";
import ThumbnailCollector from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/ThumbnailCollector";
import PlayWithThumbnails from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/PlayWithThumbnails";
import AddTitles from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/AddTitles";
import AdCard from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/AdCard";
import CTDivider from "@src/shared/Divider/CTDivider";

const YoutubeThumbnailTestDashboard = () => {
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  return (
    <div className="flex">
      <div className="w-1/4 space-y-6 border-r-[1.5px] border-gray-200 pr-4">
        <ViewModes />
        <CTDivider />
        <DeviceViewToggles />
        <CTDivider />
        <ThumbnailCollector
          setThumbnails={setThumbnails}
          thumbnails={thumbnails}
        />
        <CTDivider />
        <PlayWithThumbnails />
        <CTDivider />
        <AddTitles />
        <CTDivider />
        <AdCard />
      </div>

      <div className="flex-grow overflow-y-auto bg-white p-6">
        <div className="grid grid-cols-2 gap-6">
          {thumbnails.map((thumbnail, index) => (
            <YoutubeThumbnail key={index} thumbnail={thumbnail} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeThumbnailTestDashboard;
