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
import { getDownloadURI } from "@src/services/YoutubeDownloaderApi";
import CTToggleTabs from "@src/shared/SegmentedToggle/CTToggleTabs";
import FFmpegService from "@src/service/ffmpeg/FFmpegService";
import { sanitizeFileName } from "@src/utils/HelperUtils";

const DownloadOptions: React.FC<DownloadOptionsProps> = ({
  videoDetails,
  videoUrl,
}) => {
  const { mergeStreams } = FFmpegService();
  const [selectedFilter, setSelectedFilter] = useState("Full HD");
  const [downloadProgress, setDownloadProgress] = useState<{
    [key: string]: number;
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
        return formats.filter(
          f => f.isAudioFile && !f.isVideoFile && !f.isMuxedFile,
        );
      default:
        return formats;
    }
  };

  const downloadVideo = async (formatDetails: VideoFormat) => {
    const requestId = crypto.randomUUID();
    setIsDownloading(true);

    const audioFormats = videoDetails.formats.filter(format => {
      const isAudio =
        format.isAudioFile && !format.isVideoFile && !format.isMuxedFile;
      return isAudio;
    });

    const originalAudio = audioFormats.filter(format =>
      format.quality.toLowerCase().includes("original"),
    );

    const audioFormat = originalAudio.length
      ? originalAudio[0]
      : audioFormats[0];

    try {
      formatDetails.isMuxedFile = true;

      const videoSignedUrl = await getDownloadURI(
        videoUrl,
        formatDetails,
        videoDetails,
        requestId,
        audioFormat?.url || "",
      );

      const audioSignedUrl = await getDownloadURI(
        videoUrl,
        audioFormat,
        videoDetails,
        requestId,
        audioFormat?.url || "",
      );

      const fileName = sanitizeFileName(`${videoDetails.title}-${formatDetails.quality}-${audioFormat.quality}`);
      await mergeStreams(
        videoSignedUrl,
        audioSignedUrl,
        audioFormat.mimeType,
        formatDetails.mimeType,
        fileName,
      );
    } catch (error) {
      console.error("Error downloading video:", error);
      setIsDownloading(false);
      alert("Failed to download video. Check console for details.");
    } finally {
      setIsDownloading(false);
    }
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
              "dark:bg-gray-800 dark:border-2 bg-transparent dark:border-transparent",
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
                className="rounded-full bg-main-gradient px-4 py-4 border-none text-xs font-medium text-black sm:text-sm md:text-base"
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
