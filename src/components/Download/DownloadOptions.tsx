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
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { CTCheckIcon, CTDownloadIcon } from "@src/utils/HtmlUtil";
import CTToggleTabs from "@src/shared/SegmentedToggle/CTToggleTabs";
import {
  downloadBlob,
  DownloadVideoAndMerge,
  getUrlBlob,
} from "@src/utils/DownloadUtil";
import { getDownloadURI } from "@src/services/YoutubeDownloaderApi";
import { isAudioOnlyFormat, sanitizeFileName } from "@src/utils/HelperUtils";
import { useFFmpeg } from "@src/Context/FFmpeg/FFmpegContext";
import { showToast } from "@src/utils/Theme";

const DownloadOptions: React.FC<DownloadOptionsProps> = ({
  videoDetails,
  videoUrl,
}) => {
  const { mergeStreams } = useFFmpeg();
  const [selectedFilter, setSelectedFilter] = useState("Full HD");
  const [downloadProgress, setDownloadProgress] = useState<{
    [key: string]: number | undefined;
  }>({});
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const filters = [
    "8K",
    "4K",
    "1440p",
    "Full HD",
    "HD",
    "Medium",
    "Audio only",
  ];

  const filterFormats = (formats: VideoFormat[], filter: string) => {
    switch (filter) {
      case "8K":
        return formats.filter(f => f.quality.includes("4320p"));
      case "4K":
        return formats.filter(f => f.quality.includes("2160p"));
      case "1440p":
        return formats.filter(f => f.quality.includes("1440p"));
      case "Full HD":
        return formats.filter(f => f.quality.includes("1080p"));
      case "HD":
        return formats.filter(f => f.quality.includes("720p"));
      case "Medium":
        return formats.filter(f =>
          ["480p", "360p", "240p"].some(res => f.quality.includes(res)),
        );
      case "Audio only":
        return formats.filter(f => isAudioOnlyFormat(f));
      default:
        return formats;
    }
  };

  const downloadVideo = async (formatDetails: VideoFormat) => {
    setIsDownloading(true);
    const fakeProgressInterval = startFakeProgress(formatDetails.formatId);
    showToast(
      "loading",
      "Download is in progress...",
      `Download quality: ${formatDetails.quality}`,
    );

    try {
      if (isAudioOnlyFormat(formatDetails)) {
        const requestId = crypto.randomUUID();
        const audioSignedUrl = await getDownloadURI(
          videoUrl,
          formatDetails,
          videoDetails,
          requestId,
          formatDetails?.url || "",
        );
        const fileName = sanitizeFileName(
          `${videoDetails.title}-${formatDetails.quality}`,
        );
        const blob = await getUrlBlob(audioSignedUrl);
        downloadBlob(blob, fileName, "mp3");
      } else {
        await DownloadVideoAndMerge(
          formatDetails,
          videoDetails,
          mergeStreams,
          videoUrl,
        );
      }
      showToast(
        "success",
        "Download completed successfully!",
        `Downloaded: ${formatDetails.quality}`,
      );
      clearInterval(fakeProgressInterval);
      setDownloadProgress(prev => ({ ...prev, [formatDetails.formatId]: 100 }));

    } catch (error: any) {
      setDownloadProgress(prev => ({
        ...prev,
        [formatDetails.formatId]: undefined,
      }));
      clearInterval(fakeProgressInterval);
      console.log(error);
      showToast(
        "error",
        "Failed to download. Please try again.",
        "Download Error",
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const startFakeProgress = (formatId: string) => {
    setDownloadProgress(prev => ({ ...prev, [formatId]: 0 }));
    let progress = 0;

    const interval = setInterval(() => {
      if (progress < 50) {
        progress += Math.floor(Math.random() * 10) + 5; // Faster increase initially
      } else {
        progress += Math.floor(Math.random() * 3) + 1; // Slower increase after 90%
      }

      if (progress >= 99) {
        clearInterval(interval);
      } else {
        setDownloadProgress(prev => ({ ...prev, [formatId]: progress }));
      }
    }, 1000);

    return interval;
  };

  const filteredFormats = filterFormats(videoDetails.formats, selectedFilter);

  return (
    <div className="flex flex-col items-center space-y-8 p-2 md:px-4">
      <div className="relative w-full max-w-md sm:max-w-xl">
        <Select
          className="sm:hidden"
          value={selectedFilter}
          onChange={value => setSelectedFilter(value || "All Formats")}
          data={filters.map(filter => ({ value: filter, label: filter }))}
          placeholder="Select Format"
          classNames={{
            input:
              "border border-[--main-yellow] dark:border-2 dark:border-black text-black bg-transparent dark:!bg-gray-800",
            dropdown:
              "dark:bg-gray-800 dark:border-2 dark:border-transparent bg-zinc-50",
          }}
          styles={{
            input: {
              backgroundColor: "var(--dark-app-content)", // Input field background
              color: "var(--brand-gray)", // Text color for the input field
            },
          }}
        />

        <div className="hidden items-center justify-center sm:flex">
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

      <div className="grid w-full max-w-md grid-cols-2 gap-4 sm:max-w-3xl">
        {filteredFormats.map(format => (
          <Paper
            key={format.formatId}
            radius="lg"
            className="flex flex-col items-center justify-center space-y-4 border border-[--main-yellow] bg-transparent p-4 shadow-sm transition-all hover:shadow-lg  dark:border-2 dark:border-black dark:bg-gray-800  sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
          >
            <div className="flex w-full flex-col items-center space-y-2 text-center sm:w-auto sm:items-start sm:text-left md:!flex-row md:items-center md:space-x-4">
              <Badge
                radius="sm"
                variant="outline"
                className="rounded-full border-none bg-main-gradient px-4 py-4 text-xs font-medium text-black sm:text-sm md:text-base"
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
                          value={downloadProgress[format.formatId] || 0}
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
