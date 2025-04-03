import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Card, Text, Box } from "@mantine/core";
import {
  getDownloadURI,
  getVideoDetails,
} from "@src/services/YoutubeDownloaderApi";
import { BrandYoutubeSolid } from "@mynaui/icons-react";
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

const YouTubeDownloader = () => {
  const { mergeStreams } = useFFmpeg();
  const [selectedOption, setSelectedOption] = useState("auto");
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const handleFetchVideoDetails = async () => {
    if (!youtubeUrl.trim()) return null;

    setLoading(true);
    showToast("loading", "Fetching Video Details", "Just a moment.....");
    try {
      const details = await getVideoDetails(youtubeUrl);
      toast.dismiss("status-toast");
      const formats = details.formats;

      switch (selectedOption) {
        case "auto": {
          const best1080pFormat = formats.find(f => {
            return f.quality.includes("1080p");
          });
          const formatDetails = best1080pFormat ? best1080pFormat : formats[0];
          showToast(
            "loading",
            `Downloading in HD...`,
            `Video Title: ${details.title}`,
          );
          await DownloadVideoAndMerge(
            formatDetails,
            details,
            mergeStreams,
            youtubeUrl,
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
          const bestAudioOnlyFormat = formats.find(f => {
            return isAudioOnlyFormat(f);
          }) as VideoFormat;
          const audioSignedUrl = await getDownloadURI(
            youtubeUrl,
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
            "Your video is ready to use!",
            `Download Complete: ${details.title}`,
          );

          return;
        }
        case "mute": {
          const requestId = crypto.randomUUID();
          const bestFormat = formats.find(f => {
            return isVideoOnlyFormat(f);
          }) as VideoFormat;
          bestFormat.isMuxedFile = true;
          const audioSignedUrl = await getDownloadURI(
            youtubeUrl,
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
        default: {
          break;
        }
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
        <title>Download YouTube Videos in HD | Creator Toolkit</title>
        <meta
          name="description"
          content="Easily download YouTube videos in HD or convert them to MP3 with our free YouTube downloader. Quick, secure, and reliable!"
        />
        <link
          rel="canonical"
          href="https://www.creator-toolkit.com/youtube-downloader"
        />
        <meta property="og:title" content="Download YouTube Videos in HD" />
        <meta
          property="og:description"
          content="Use our Creator Toolkit to download YouTube videos in HD or MP3 quickly and securely."
        />
        <meta
          property="og:image"
          content="https://www.creator-toolkit.com/assets/thumbnail.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.creator-toolkit.com/youtube-downloader"
        />
      </Helmet>

      <div className="mx-auto my-16 flex w-full max-w-4xl flex-col items-center space-y-6 rounded-lg bg-light-app p-0 transition-all duration-300 dark:bg-dark-app-content lg:px-10">
        {/* Header */}
        <div className="w-full text-center">
          <h1 className="flex flex-col items-center justify-center text-xl font-medium text-zinc-800 dark:text-zinc-200 lg:flex-row lg:space-x-2 lg:text-2xl">
            <BrandYoutubeSolid size={32} className="text-red-500" />
            <Text
              component="h1"
              className="mt-2 text-lg font-bold text-zinc-800 dark:text-zinc-100 lg:mt-0 lg:text-3xl"
            >
              Download Youtube Videos
            </Text>
          </h1>
          <Text className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 lg:text-base">
            Paste your YouTube video link below to fetch video details and
            download formats.
          </Text>
        </div>

        {/* Input Section */}
        <div className="!mt-6 flex w-full max-w-2xl flex-col items-center gap-4 lg:space-x-3 lg:space-y-0">
          <div className="w-full">
            <CTInput
              value={youtubeUrl}
              placeholder="Paste YouTube link here"
              onChange={value => setYoutubeUrl(value)}
              onSubmit={handleFetchVideoDetails}
              loading={loading}
              disabled={loading}
            />
          </div>
          <QuickDownloadToggles
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            disabled={loading}
          />
        </div>

        {/* Video Details Section */}
        {videoDetails && videoDetails.formats && (
          <div className="w-full dark:bg-dark-app-content dark:text-zinc-200">
            <Card className="dark:bg-dark-card w-full max-w-4xl rounded-lg bg-inherit p-0 dark:text-zinc-200">
              <Box className="aspect-w-5 aspect-h-4 relative mx-auto flex w-full max-w-[640px] items-center justify-center rounded-[24px] border border-[--main-yellow] bg-transparent p-5 dark:border-2 dark:border-black dark:bg-inherit">
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
                <Text className="poppins-bold mb-4 text-center text-lg font-bold lg:text-2xl">
                  Download options
                </Text>
                <div className="grid grid-cols-1 gap-4">
                  <DownloadOptions
                    videoDetails={videoDetails}
                    videoUrl={youtubeUrl}
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

export default YouTubeDownloader;
