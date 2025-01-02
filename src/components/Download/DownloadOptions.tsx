import React, { useState } from "react";
import {
  Badge,
  Button,
  Progress,
  Paper,
  Text,
  Box,
  Tooltip,
  Select,
  Loader,
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
import CTToggleTabs from "@src/shared/SegmentedToggle/CTToggleTabs";

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

        const contentDisposition = response.headers["content-disposition"];
        let fileName = "video.mp4";
        if (contentDisposition) {
          const fileNameMatch = contentDisposition.match(/filename="(.+?)"/);
          if (fileNameMatch?.[1]) {
            fileName = fileNameMatch[1];
          }
        }

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
      } catch (error) {
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
    <div className="flex flex-col items-center space-y-8 p-2 md:px-4">
      {/* Filter Section */}
      <div className="relative w-full max-w-md sm:max-w-xl">
        {/* Dropdown for Small Screens */}
        <Select
          className="sm:hidden"
          value={selectedFilter}
          onChange={value => setSelectedFilter(value || "All Formats")}
          data={filters.map(filter => ({ value: filter, label: filter }))}
          placeholder="Select Format"
          classNames={{
            input:
              "border border-[--main-yellow] dark:border-2 dark:border-black text-black bg-[--brand-main-bg] dark:!bg-gray-800",
            dropdown: "dark:bg-gray-800 dark:border-2 bg-[--brand-main-bg] dark:border-transparent",
          }}
          styles={{
            input: {
              backgroundColor: "var(--dark-app-content)", // Input field background
              color: "var(--brand-gray)", // Text color for the input field
            },
          }}
        />

        {/* Filter Bar for Larger Screens */}
        <div className="hidden sm:flex justify-center items-center">
          <CTToggleTabs
            tabs={filters.map(filter => ({
              label: filter,
              component: filter, // Render filter text as the component
            }))}
            activeTab={selectedFilter}
            onToggle={selectedTab => setSelectedFilter(selectedTab)}
          />
        </div>
      </div>

      {/* Download Cards */}
      <div className="grid w-full max-w-md grid-cols-2 gap-4 sm:max-w-3xl">
        {filteredFormats.map(format => (
          <Paper
            key={format.formatId}
            radius="lg"
            className="flex flex-col items-center justify-center space-y-4 border border-[--main-yellow] bg-[--brand-main-bg] p-4 shadow-sm transition-all hover:shadow-lg  dark:border-2 dark:border-black dark:bg-gray-800  sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
          >
            {/* Badge and Format Info */}
            <div className="flex w-full flex-col items-center space-y-2 text-center sm:w-auto sm:items-start sm:text-left md:!flex-row md:items-center md:space-x-4">
              <Badge
                radius="sm"
                variant="filled"
                className="rounded-full bg-main-gradient px-4 py-2 text-xs font-semibold text-black sm:text-sm md:text-base"
              >
                {format.quality.toUpperCase()}
              </Badge>
              <div>
                <Text
                  size="sm"
                  className="font-medium text-gray-800 dark:text-gray-300 sm:text-base"
                >
                  {format.mimeType.toUpperCase()}
                </Text>
                <Text size="sm" className="text-gray-600 dark:text-gray-400">
                  {(format.sizeInBytes / (1024 * 1024)).toFixed(2)} MB
                </Text>
              </div>
            </div>

            {/* Download Button and Progress */}
            <div className="flex w-full flex-col items-center space-y-2 sm:w-auto sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              {downloadProgress[format.formatId] !== undefined ? (
                downloadProgress[format.formatId] === 100 ? (
                  <Box className="flex items-center space-x-2">
                    <CTCheckIcon />
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
                ) : (
                  <Box className="flex w-full flex-col items-center space-x-2 md:w-auto md:flex-row">
                    {!downloadProgress[format.formatId] ? (
                      <>
                        <Loader size={"sm"} color="teal" />
                        <Text size="sm" className="font-semibold">
                          Preparing your download
                        </Text>
                      </>
                    ) : (
                      <>
                        <Progress
                          value={downloadProgress[format.formatId]}
                          size="xl"
                          radius="sm"
                          color="teal"
                          className="w-full sm:w-32"
                          animated
                        />
                        <Text size="md" className="font-semibold">
                          {downloadProgress[format.formatId]}%
                        </Text>
                      </>
                    )}
                  </Box>
                )
              ) : (
                <CTAnimatedButton
                  label="Download"
                  icon={<CTDownloadIcon />}
                  hoverLabel="Start"
                  buttonStyles={"w-[110px] sm:w-[140px]"}
                  radius={"xl"}
                  onClick={() => downloadVideo(format)}
                  disabled={isDownloading}
                />
              )}
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default DownloadOptions;
