import { FC } from "react";

interface YoutubeThumbnailProps {
  thumbnail: string; // Thumbnail image URL
  title?: string; // Video title
  channelName?: string; // Channel name
  channelLogo?: string; // Channel logo URL
  views?: string; // Number of views (e.g., "123K views")
  uploadedTime?: string; // Time since uploaded (e.g., "1 hour ago")
}

const YoutubeThumbnail: FC<YoutubeThumbnailProps> = ({
  thumbnail,
  title = "Add a title in the sidebar",
  channelName = "Channel name",
  channelLogo = "https://yt3.ggpht.com/H08TJ4P1GOuFNEsv4w6b892ictaUQSASqPlVhbvmZE6-jSY4mS_EnCkuPo2sqJh6MudK6GbC=s240-c-k-c0x00ffffff-no-rj", // Replace
  views = "200M",
  uploadedTime = "2 hour ago",
}) => {
  return (
    <div className="m-auto flex-none">
      {/* Thumbnail */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={thumbnail}
          alt={title}
          className="w-full max-w-sm rounded-2xl object-cover"
          style={{
            aspectRatio: "16 / 9",
          }}
        />
      </div>

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
              textAlign: "start"
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
              textAlign: "start"
            }}
          >
            <p>{channelName}</p>
            <p>
              {views} • {uploadedTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeThumbnail;
