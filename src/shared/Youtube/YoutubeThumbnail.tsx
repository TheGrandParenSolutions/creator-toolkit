import { YoutubeThumbnailProps } from "@src/PropTypes.ts/PropTypes";
import { FC } from "react";

const YoutubeThumbnail: FC<YoutubeThumbnailProps> = ({
  thumbnail,
  title = "Add a title in the sidebar",
  channelName = "Channel name",
  channelLogo = "https://yt3.ggpht.com/H08TJ4P1GOuFNEsv4w6b892ictaUQSASqPlVhbvmZE6-jSY4mS_EnCkuPo2sqJh6MudK6GbC=s240-c-k-c0x00ffffff-no-rj",
  views = "200M",
  uploadedTime = "2 hours ago",
  viewMode = "desktop",
}) => {
  const mode = viewMode === "tablet" ? "desktop" : viewMode;

  return (
    <div
      className={`flex max-w-[360px] ${
        mode === "search" ? "flex-col lg:flex-row lg:gap-6" : "flex-col"
      }`}
    >
      {/* Thumbnail Section */}
      <div
        className={`overflow-hidden rounded-xl w-full`}
      >
        <img
          src={thumbnail}
          alt={title}
          className={`rounded-xl object-cover w-full`}
          style={{ aspectRatio: "16 / 9" }}
        />
      </div>

      {/* Content Section */}
      <div
        className={`${
          mode === "search"
            ? "flex flex-col lg:w-2/3 space-y-3 mt-4 lg:mt-0"
            : "flex flex-col space-y-3 mt-4"
        }`}
      >
        {/* Title */}
        <h1
          className={`text-xs lg:text-lg font-semibold text-gray-800 dark:text-gray-100 ${
            mode === "search" ? "truncate" : ""
          }`}
        >
          {title}
        </h1>

        {/* Channel Details */}
        <div className="flex items-center space-x-3">
          <img
            className="h-8 w-8 rounded-full lg:h-12 lg:w-12"
            src={channelLogo}
            alt={`${channelName} logo`}
          />
          <div>
            <p className="text-xs lg:text-base text-gray-800 dark:text-gray-200">
              {channelName}
            </p>
            <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
              {views} • {uploadedTime}
            </p>
          </div>
        </div>

        {/* Additional Description (Only for search mode) */}
        {mode === "search" && (
          <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae justo vitae libero pharetra scelerisque. Mauris id massa
            magna...
          </p>
        )}
      </div>
    </div>
  );
};

export default YoutubeThumbnail;
