import React, { useState } from "react";
import {
  Badge,
  Button,
  Progress,
  Paper,
  Text,
  Box,
  Tooltip,
} from "@mantine/core";
import { UndoSolid } from "@mynaui/icons-react";
import {
  DownloadOptionsProps,
  VideoFormat,
} from "@src/types/YoutubeDownloaderTypes";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton.tsx/CTAnimatedButton.tsx";
import { CTCheckIcon, CTDownloadIcon } from "@src/utils/HtmlUtil";
import {
  downloadVideoFormat,
  getDownloadProgress,
} from "@src/services/YoutubeDownloaderApi";

const DownloadOptions: React.FC<DownloadOptionsProps> = ({
  videoDetails,
  videoUrl,
}) => {
  const [selectedFilter, setSelectedFilter] = useState("All Formats");
  const [downloadProgress, setDownloadProgress] = useState<{
    [key: string]: number;
  }>({});
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  let progressInterval: NodeJS.Timeout;

  const filters = ["All Formats", "WEBM", "MP4", "M4A"];

  const downloadVideo = async (formatDetails: VideoFormat) => {
    const requestId = crypto.randomUUID();
    trackProgress(requestId, formatDetails);
    setIsDownloading(true);

    try {
      const response = await downloadVideoFormat(
        videoUrl,
        formatDetails,
        videoDetails,
        requestId,
      );

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: "video/mp4" });

        // Generate file name from Content-Disposition
        const contentDisposition = response.headers["content-disposition"];
        let fileName = "video.mp4";
        if (contentDisposition) {
          const fileNameMatch = contentDisposition.match(/filename="(.+?)"/);
          if (fileNameMatch?.[1]) {
            fileName = fileNameMatch[1];
          }
        }

        // Trigger download
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url); // Clean up URL
      } else {
        alert("Failed to download video. Check console for details.");
      }
    } catch (error) {
      console.error("Error downloading video:", error);
      setIsDownloading(false);
      alert("Failed to download video. Check console for details.");
    } finally {
      clearInterval(progressInterval);
      setIsDownloading(false);
    }
  };

  const trackProgress = async (requestId: string, format: VideoFormat) => {
    progressInterval = setInterval(async () => {
      try {
        const progress = await getDownloadProgress(requestId);

        setDownloadProgress(prev => {
          const currentProgress = prev[format.formatId];
          const updatedProgress =
            currentProgress < progress ? progress : currentProgress;
          if (updatedProgress === 100) clearInterval(progressInterval);
          return { ...prev, [format.formatId]: updatedProgress ?? 0 };
        });

        if (progress === 100) {
          clearInterval(progressInterval);
        }
      } catch (error: any) {
        console.log(error);
        clearInterval(progressInterval);
      }
    }, 1000);
  };

  const filteredFormats =
    selectedFilter === "All Formats"
      ? videoDetails.formats
      : videoDetails.formats.filter(f =>
          f.mimeType.includes(selectedFilter.toLowerCase()),
        );

  return (
    <div className="flex flex-col items-center p-4">
      {/* Filter Section */}
      <div className="relative mb-6 flex w-full max-w-xl justify-around rounded-full border border-[var(--brand-dark-orange)] bg-white px-2 py-1 shadow-sm dark:bg-dark-app-content">
        <div
          className={`absolute left-0 top-0 h-full w-1/4 rounded-full bg-main-gradient transition-all duration-300`}
          style={{
            transform: `translateX(${filters.indexOf(selectedFilter) * 100}%)`,
          }}
        ></div>
        {filters.map(filter => (
          <button
            key={filter}
            className={`relative z-10 w-1/4 py-1.5 text-center font-medium ${
              selectedFilter === filter
                ? "text-black"
                : "text-gray-600 dark:text-gray-400"
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Download Cards */}
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4">
        {filteredFormats.map(format => (
          <Paper
            key={format.formatId}
            radius="lg"
            className="flex items-center justify-between bg-white p-4 shadow-sm transition-all hover:shadow-lg dark:bg-dark-app-content"
            style={{
              border: "1px solid var(--brand-dark-orange)",
            }}
          >
            <div className="flex items-center space-x-4">
              <Badge
                radius="sm"
                variant="filled"
                className="rounded-full bg-main-gradient px-3 py-4 text-sm font-bold text-black"
              >
                {format.quality.toUpperCase()}
              </Badge>
              <div>
                <Text
                  size="sm"
                  className="font-medium text-gray-800 dark:text-gray-300"
                >
                  {format.mimeType.toUpperCase()}
                </Text>
                <Text size="md" className="text-gray-600 dark:text-gray-400">
                  {(format.sizeInBytes / (1024 * 1024)).toFixed(2)} MB
                </Text>
              </div>
            </div>

            {/* Download State */}
            {downloadProgress[format.formatId] !== undefined ? (
              downloadProgress[format.formatId] === 100 ? (
                <Box className="relative flex items-center space-x-2">
                  <div className="relative flex items-center">
                    <CTCheckIcon />
                  </div>
                  <Box
                    size="sm"
                    className="flex items-center justify-center font-bold text-[#22918b]"
                  >
                    Completed!
                    <Tooltip label="Click to download again">
                      <Button
                        size="compact-xs"
                        className="bg-transparent hover:bg-transparent"
                        onClick={() => {
                          setDownloadProgress(prev => ({
                            ...prev,
                            [format.formatId]: undefined,
                          }));
                        }}
                      >
                        <UndoSolid className="text-red-600" />
                      </Button>
                    </Tooltip>
                  </Box>
                </Box>
              ) : (
                <Box className="flex items-center space-x-2">
                  <Progress
                    value={downloadProgress[format.formatId]}
                    size="lg"
                    radius="sm"
                    color="yellow"
                    className="w-32"
                    animated
                    classNames={{
                      root: "bg-gray-400",
                    }}
                    transitionDuration={500}
                  />
                  <Text size="md" className="font-semibold">
                    {downloadProgress[format.formatId]}%
                  </Text>
                </Box>
              )
            ) : (
              <CTAnimatedButton
                label="Download"
                icon={<CTDownloadIcon />}
                hoverLabel="Start download"
                w={"120"}
                radius={"xl"}
                onClick={() => downloadVideo(format)}
                disabled={isDownloading}
              />
            )}
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default DownloadOptions;
