import { YoutubeThumbnailProps } from "@src/PropTypes.ts/PropTypes";
import { FC } from "react";

const YoutubeThumbnail: FC<YoutubeThumbnailProps> = ({
  thumbnail,
  title = "Add a title in the sidebar",
  channelName = "Channel name",
  channelLogo = "https://yt3.googleusercontent.com/ytc/AOPolaRZ9DHwcU8O9Z7p5yH6KvKHKwpU7ZHlWCXLkKN62A=s176-c-k-c0x00ffffff-no-rj-mo",
  views = "200M",
  uploadedTime = "2 hours ago",
  viewMode = "desktop",
  dimensionClasses,
  showDescription = true,
  portrait = false,
}) => {
  const mode = viewMode === "tablet" ? "desktop" : viewMode;

  return (
    <div
      className={`flex ${
        mode === "search" ? "flex-col lg:flex-row lg:gap-4" : "flex-col"
      }`}
    >
      {/* Thumbnail Section */}
      <div
        className={`w-full max-w-[360px] ${
          dimensionClasses ? dimensionClasses + " !h-auto" : ""
        } overflow-hidden rounded-xl`}
      >
        <img
          src={thumbnail}
          alt={title}
          className={`w-full rounded-xl object-cover ${
            dimensionClasses ? dimensionClasses : ""
          }`}
          style={{ aspectRatio: portrait ? "9 / 16" : "16 / 9" }}
        />
      </div>

      {/* Content Section */}
      <div
        className={`max-w-[360px] 
          ${dimensionClasses ? dimensionClasses + " !h-auto" : ""} ${
          mode === "search"
            ? "flex flex-col  lg:w-2/3"
            : "mt-2 flex flex-row space-y-0"
        }`}
      >
        {mode !== "search" && (
          <img
            className="mr-3 mt-1 h-8 w-8 rounded-full "
            src={channelLogo}
            alt={`${channelName} logo`}
          />
        )}

        <div className="flex flex-col items-start justify-start">
          <h1
            className={`whitespace-pre-line text-sm font-medium text-gray-800 dark:text-gray-100 lg:text-lg ${
              mode === "search" ? "truncate" : ""
            }`}
          >
            {title}
          </h1>
          <div>
            {mode === "search" ? (
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {views} • {uploadedTime}
                </p>
                <div className="my-2 flex items-center gap-2">
                  <img
                    className=" h-6 w-6 rounded-full "
                    src={channelLogo}
                    alt={`${channelName} logo`}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-200 ">
                    {channelName}
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-200 ">
                  {channelName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {views} • {uploadedTime}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Description (Only for search mode) */}
        {mode === "search" && showDescription && (
          <p className="line-clamp-3 text-sm text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.......
          </p>
        )}
      </div>
    </div>
  );
};

export default YoutubeThumbnail;
