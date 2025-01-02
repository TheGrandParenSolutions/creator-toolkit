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
      className={`flex ${
        mode === "search" ? "flex-col lg:flex-row lg:gap-6" : "flex-col"
      }`}
    >
      {/* Thumbnail Section */}
      <div className={`w-full  max-w-[360px] overflow-hidden rounded-xl`}>
        <img
          src={thumbnail}
          alt={title}
          className={`w-full rounded-xl object-cover`}
          style={{ aspectRatio: "16 / 9" }}
        />
      </div>

      {/* Content Section */}
      <div
        className={`${
          mode === "search"
            ? "flex flex-col space-y-1 lg:mt-0  lg:w-2/3"
            : "flex flex-row space-y-1"
        }`}
      >
        {/* Title */}

        {mode !== "search" && (
          <img
            className="mr-3 mt-3 h-8 w-8 rounded-full "
            src={channelLogo}
            alt={`${channelName} logo`}
          />
        )}

        {/* Channel Details */}
        <div className="flex flex-col items-start justify-start">
          <h1
            className={`text-xs font-semibold text-gray-800 dark:text-gray-100 lg:text-lg ${
              mode === "search" ? "truncate" : ""
            }`}
          >
            {title}
          </h1>
          <div>
            {mode === "search" ? (
              <div className="flex my-2 items-end gap-2">
                <img
                  className=" h-6 w-6 rounded-full "
                  src={channelLogo}
                  alt={`${channelName} logo`}
                />
                <p className="text-xs text-gray-800 dark:text-gray-200 lg:text-base">
                  {channelName}
                </p>
              </div>
            ) : (
              <p className="text-xs text-gray-800 dark:text-gray-200 lg:text-base">
                {channelName}
              </p>
            )}

            <p className="text-xs text-gray-600 dark:text-gray-400 lg:text-sm">
              {views} • {uploadedTime}
            </p>
          </div>
        </div>

        {/* Additional Description (Only for search mode) */}
        {mode === "search" && (
          <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
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
