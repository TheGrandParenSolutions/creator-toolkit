import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Card, Text, Box } from "@mantine/core";
import {
  getDownloadURI,
  getVideoDetails,
} from "@src/services/YoutubeDownloaderApi";
import YoutubeThumbnail from "@src/shared/Youtube/YoutubeThumbnail";
import CTDivider from "@src/shared/Divider/CTDivider";
import { VideoDetails, VideoFormat } from "@src/types/YoutubeDownloaderTypes";
import DownloadOptions from "@src/components/Download/DownloadOptions";
import CTInput from "@src/shared/Input/CTInput";
import QuickDownloadToggles from "@src/shared/QuickDownloadToggles/QuickDownloadToggles";
import {
  downloadBlob,
  DownloadVideoAndMerge,
  getUrlBlob,
} from "@src/utils/DownloadUtil";
import {
  isAudioOnlyFormat,
  isVideoOnlyFormat,
  sanitizeFileName,
} from "@src/utils/HelperUtils";
import { useFFmpeg } from "@src/Context/FFmpeg/FFmpegContext";
import toast from "react-hot-toast";
import { showToast } from "@src/utils/Theme";
import SupportedFormats from "@src/components/SupportedFormats/SupportedFormats";
import { VideoDownloadIconSolid } from "@src/shared/Icons/IconLib";

const VideoDownloader = () => {
  const { mergeStreams } = useFFmpeg();
  const [selectedOption, setSelectedOption] = useState("auto");
  const [platformUrl, setPlatformUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const getPlatformFromUrl = (url: string) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return "youtube";
    } else if (url.includes("instagram.com")) {
      if (selectedOption !== "auto" && selectedOption === "format")
        setSelectedOption("auto");
      return "instagram";
    }
    return "unknown";
  };

  const handleFetchVideoDetails = async () => {
    if (!platformUrl.trim()) return null;

    const platform = getPlatformFromUrl(platformUrl);
    if (platform === "unknown") {
      showToast(
        "error",
        "Invalid URL",
        "Please enter a valid YouTube or Instagram URL.",
      );
      return;
    }
    if (platform === "instagram" && selectedOption === "audio") {
      showToast(
        "error",
        "Not Supported",
        "Audio-only download is not available for Instagram Reels.",
      );
      return;
    }
    setLoading(true);
    showToast("loading", `Fetching video details`, "Just a moment...");
    try {
      const details = await getVideoDetails(platformUrl);
      toast.dismiss("status-toast");
      const formats = details.formats;

      switch (selectedOption) {
        case "auto": {
          const bestFormat = formats.find(f =>
            platform === "youtube"
              ? f.quality.includes("1080p")
              : f.quality.includes("DASH video"),
          );
          const formatDetails = bestFormat ? bestFormat : formats[0];
          showToast(
            "loading",
            `Downloading in HD...`,
            `Video Title: ${details.title}`,
          );
          await DownloadVideoAndMerge(
            formatDetails,
            details,
            mergeStreams,
            platformUrl,
          );
          toast.dismiss("status-toast");
          showToast(
            "success",
            "Your video is ready to use!",
            `Download Complete: ${details.title}`,
          );
          return;
        }
        case "audio": {
          const requestId = crypto.randomUUID();
          const bestAudioOnlyFormat = formats.find(f =>
            isAudioOnlyFormat(f),
          ) as VideoFormat;
          const audioSignedUrl = await getDownloadURI(
            platformUrl,
            bestAudioOnlyFormat,
            videoDetails,
            requestId,
            bestAudioOnlyFormat?.url || "",
          );
          const fileName = sanitizeFileName(
            `${details.title}-${bestAudioOnlyFormat.quality}`,
          );
          showToast(
            "loading",
            "Extracting audio, please wait...",
            `Video Title: ${details.title}`,
          );
          const blob = await getUrlBlob(audioSignedUrl);
          downloadBlob(blob, fileName, "mp3");
          toast.dismiss("status-toast");
          showToast(
            "success",
            "Your audio is ready to use!",
            `Download Complete: ${details.title}`,
          );
          return;
        }
        case "mute": {
          const requestId = crypto.randomUUID();
          const bestFormat = formats.find(f =>
            isVideoOnlyFormat(f),
          ) as VideoFormat;
          bestFormat.isMuxedFile = true;
          const audioSignedUrl = await getDownloadURI(
            platformUrl,
            bestFormat,
            videoDetails,
            requestId,
            bestFormat?.url || "",
          );
          const fileName = sanitizeFileName(
            `${details.title}-${bestFormat.quality}`,
          );
          showToast(
            "loading",
            "Processing muted video, please wait...",
            `Video Title: ${details.title}`,
          );
          const blob = await getUrlBlob(audioSignedUrl);
          downloadBlob(blob, fileName, "mp4");
          toast.dismiss("status-toast");
          showToast(
            "success",
            "Your muted video is ready!",
            `Download Complete: ${details.title}`,
          );
          return;
        }
        default:
          break;
      }

      setLoading(false);
      setVideoDetails(details);

      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } catch {
      toast.dismiss("status-toast");
      showToast(
        "error",
        "Something went wrong. Please check the link and try again.",
        "Download Failed",
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Video Download Gear | Download YouTube Videos & Instagram Reels
        </title>
        <meta
          name="description"
          content="Video Download Gear: The ultimate tool for downloading YouTube videos, Instagram reels, and more. Fast, secure, and reliable video downloader for creators."
        />
        <meta
          name="keywords"
          content="YouTube downloader, YouTube video downloader, Instagram reel downloader, Reels downloader, video downloader, multi-platform downloader, download YouTube videos, download Instagram reels"
        />
        <link
          rel="canonical"
          href="https://www.creator-toolkit.com/video-download-gear"
        />
        <meta
          property="og:title"
          content="Video Download Gear | Download YouTube Videos & Instagram Reels"
        />
        <meta
          property="og:description"
          content="Download videos from YouTube and Instagram Reels with Video Download Gear. Easy-to-use, fast, and reliable downloader for creators."
        />
        <meta
          property="og:image"
          content="https://www.creator-toolkit.com/assets/video-download-gear-thumbnail.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.creator-toolkit.com/video-download-gear"
        />
      </Helmet>
      <div className="m-auto w-full ">
        <SupportedFormats />
      </div>
      <div className="mx-auto my-16 flex w-full max-w-4xl flex-col items-center space-y-6 rounded-lg bg-light-app p-0 transition-all duration-300 dark:bg-dark-app-content lg:px-10">
        {/* Header */}
        <div className="w-full text-center">
          <h1 className="flex flex-col items-center justify-center text-xl font-medium text-gray-800 dark:text-gray-200 lg:flex-row lg:space-x-2 lg:text-2xl">
            <VideoDownloadIconSolid className="h-11  w-11 text-red-500" />
            <Text
              component="h1"
              className="mt-2 text-lg font-bold text-gray-800 dark:text-gray-100 lg:mt-0 lg:text-3xl"
            >
              Paste the video link below
            </Text>
          </h1>
        </div>

        {/* Input Section */}
        <div className="!mt-6 flex w-full max-w-2xl flex-col items-center gap-4 lg:space-x-3 lg:space-y-0">
          <div className="w-full">
            <CTInput
              value={platformUrl}
              placeholder="Paste video link here"
              onChange={value => setPlatformUrl(value)}
              onSubmit={handleFetchVideoDetails}
              loading={loading}
              disabled={loading}
            />
          </div>
          <QuickDownloadToggles
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            disabled={loading}
            hideChooseFormat={getPlatformFromUrl(platformUrl) === "instagram"}
          />
        </div>

        {/* Video Details Section */}
        {videoDetails && videoDetails.formats && (
          <div className="w-full dark:bg-dark-app-content dark:text-gray-200">
            <Card className="dark:bg-dark-card w-full max-w-4xl rounded-lg bg-inherit p-0 dark:text-gray-200">
              <Box className="relative mx-auto flex w-full max-w-[640px] items-center justify-center rounded-[24px] border border-[--main-yellow] bg-transparent p-5 dark:border-2 dark:border-black dark:bg-inherit">
                <div className="max-w-[360px]">
                  <YoutubeThumbnail
                    thumbnail={videoDetails.thumbnailUrl}
                    title={videoDetails.title}
                    channelLogo={videoDetails.channelLogoUrl ?? undefined}
                    channelName={videoDetails.channelName}
                    uploadedTime={videoDetails.youtubeVideoAge}
                    views={videoDetails.totalViews}
                  />
                </div>

                <Box ref={detailsRef}></Box>
              </Box>
              <CTDivider />
              <div className="rounded-md dark:bg-dark-app-content">
                <Text className="font-grifter mb-4 text-center text-lg font-bold lg:text-2xl">
                  Download options
                </Text>
                <div className="grid grid-cols-1 gap-4">
                  <DownloadOptions
                    videoDetails={videoDetails}
                    videoUrl={platformUrl}
                  />
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoDownloader;
