import { YoutubeThumbnailProps } from "@src/PropTypes.ts/PropTypes";
import { FC } from "react";

const YoutubeThumbnail: FC<YoutubeThumbnailProps> = ({
  thumbnail,
  title = "Add a title in the sidebar",
  channelName = "Channel name",
  channelLogo = "https://yt3.ggpht.com/H08TJ4P1GOuFNEsv4w6b892ictaUQSASqPlVhbvmZE6-jSY4mS_EnCkuPo2sqJh6MudK6GbC=s240-c-k-c0x00ffffff-no-rj",
  views = "200M",
  uploadedTime = "2 hour ago",
  viewMode = "desktop",
}) => {
  viewMode = viewMode === "tablet" ? "desktop" : viewMode;
  return (
    <div
      className={`m-auto flex flex-col  ${
        viewMode === "search" && "!flex-row gap-4"
      }`}
    >
      {/* Thumbnail */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={thumbnail}
          alt={title}
          className="w-full min-w-[360px] max-w-sm rounded-2xl object-cover"
          style={{
            aspectRatio: "16 / 9",
          }}
        />
      </div>
      {viewMode !== "search" ? (
        <div className="flex">
          {/* Channel Logo */}
          <img
            className="mr-3 mt-3 h-9 w-9 flex-none rounded-full"
            src={channelLogo}
            alt={`${channelName} logo`}
          />

          <div>
            {/* Title */}
            <div
              style={{
                fontSize: "0.9rem",
                marginBottom: 4,
                marginTop: 8,
                minWidth: 265,
                maxWidth: 277,
                minHeight: 22,
                fontWeight: 600,
                maxHeight: "4.4rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "start",
              }}
            >
              <h1>{title}</h1>
            </div>

            {/* Channel Name and Views */}
            <div
              style={{
                width: 265,
                height: 40,
                fontSize: 14,
                textAlign: "start",
              }}
            >
              <p>{channelName}</p>
              <p>
                {views} • {uploadedTime}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div>
            <div
              className=""
              style={{
                fontSize: 18,
                marginTop: 8,
                marginBottom: 4,
                minHeight: 22,
                fontWeight: 400,
                maxHeight: "4.4rem",
              }}
            >
              <p>{title}</p>
            </div>
            <div className="mb-[12px]" style={{ fontSize: 14 }}>
              <p>
                {views} • {uploadedTime}
              </p>
            </div>
            <div className="flex flex-row items-center gap-x-[8px]">
              <img
                className="mr-3 mt-3 h-9 w-9 flex-none rounded-full"
                src={channelLogo}
                alt={`${channelName} logo`}
              />
              <p className="">{channelName}</p>
            </div>
            <p className="mt-[12px] w-96 text-[13px] leading-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae justo vitae libero pharetra scelerisque. Mauris id massa
              magna....
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeThumbnail;
