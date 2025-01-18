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
import { InstagramLogo } from "@src/shared/Icons/IconLib";

const InstagramReelsDownloader = () => {
  const { mergeStreams } = useFFmpeg();
  const [selectedOption, setSelectedOption] = useState("auto");
  const [reelUrl, setReelUrl] = useState<string>(""); // Updated variable name
  const [loading, setLoading] = useState<boolean>(false);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const handleFetchVideoDetails = async () => {
    if (!reelUrl.trim()) return null; // Updated variable name

    setLoading(true);
    showToast("loading", "Fetching Reel Details", "Just a moment...");
    try {
      const details = await getVideoDetails(reelUrl); // Updated variable name
      toast.dismiss("status-toast");
      const formats = details.formats;

      switch (selectedOption) {
        case "auto": {
          const best1080pFormat = formats.find(f => f.quality.includes("DASH video"));
          const formatDetails = best1080pFormat ? best1080pFormat : formats[0];
          showToast(
            "loading",
            `Downloading in HD...`,
            `Reel Title: ${details.title}`,
          );
          
          await DownloadVideoAndMerge(formatDetails, details, mergeStreams, reelUrl);
          toast.dismiss("status-toast");
          showToast(
            "success",
            "Your reel is ready to use!",
            `Download Complete: ${details.title}`,
          );
          return;
        }
        case "audio": {
          const requestId = crypto.randomUUID();
          const bestAudioOnlyFormat = formats.find(f => isAudioOnlyFormat(f)) as VideoFormat;
          const audioSignedUrl = await getDownloadURI(
            reelUrl,
            bestAudioOnlyFormat,
            videoDetails,
            requestId,
            bestAudioOnlyFormat?.url || "",
          );
          const fileName = sanitizeFileName(`${details.title}-${bestAudioOnlyFormat.quality}`);
          showToast("loading", "Extracting audio, please wait...", `Reel Title: ${details.title}`);
          const blob = await getUrlBlob(audioSignedUrl);
          downloadBlob(blob, fileName, "mp3");
          toast.dismiss("status-toast");
          showToast("success", "Your audio is ready!", `Download Complete: ${details.title}`);
          return;
        }
        case "mute": {
          const requestId = crypto.randomUUID();
          const bestFormat = formats.find(f => isVideoOnlyFormat(f)) as VideoFormat;
          bestFormat.isMuxedFile = true;
          const audioSignedUrl = await getDownloadURI(
            reelUrl,
            bestFormat,
            videoDetails,
            requestId,
            bestFormat?.url || "",
          );
          const fileName = sanitizeFileName(`${details.title}-${bestFormat.quality}`);
          showToast("loading", "Processing muted reel, please wait...", `Reel Title: ${details.title}`);
          const blob = await getUrlBlob(audioSignedUrl);
          downloadBlob(blob, fileName, "mp4");
          toast.dismiss("status-toast");
          showToast("success", "Your muted reel is ready!", `Download Complete: ${details.title}`);
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
        <title>Download Instagram Reels in HD | Creator Toolkit</title>
        <meta
          name="description"
          content="Easily download Instagram Reels in HD or convert them to MP3 with our free Instagram Reel downloader. Quick, secure, and reliable!"
        />
        <link
          rel="canonical"
          href="https://www.creator-toolkit.com/instagram-reels-downloader"
        />
        <meta property="og:title" content="Download Instagram Reels in HD" />
        <meta
          property="og:description"
          content="Use our Creator Toolkit to download Instagram Reels in HD or MP3 quickly and securely."
        />
        <meta
          property="og:image"
          content="https://www.creator-toolkit.com/assets/instagram-reels-thumbnail.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.creator-toolkit.com/instagram-reels-downloader"
        />
      </Helmet>

      <div className="mx-auto my-16 flex w-full max-w-4xl flex-col items-center space-y-6 rounded-lg bg-light-app p-0 transition-all duration-300 dark:bg-dark-app-content lg:px-10">
        {/* Header */}
        <div className="w-full text-center">
          <h1 className="flex flex-col items-center justify-center text-xl font-medium text-gray-800 dark:text-gray-200 lg:flex-row lg:space-x-2 lg:text-2xl">
            <InstagramLogo/>
            <Text
              component="h1"
              className="mt-2 text-lg font-bold text-gray-800 dark:text-gray-100 lg:mt-0 lg:text-3xl"
            >
              Download Instagram Reels
            </Text>
          </h1>
          <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
            Paste your Instagram Reel link below to fetch video details and download formats.
          </Text>
        </div>

        {/* Input Section */}
        <div className="!mt-6 flex w-full max-w-2xl flex-col items-center gap-4 lg:space-x-3 lg:space-y-0">
          <div className="w-full">
            <CTInput
              value={reelUrl}
              placeholder="Paste Instagram Reel link here"
              onChange={value => setReelUrl(value)}
              onSubmit={handleFetchVideoDetails}
              loading={loading}
              disabled={loading}
            />
          </div>
          <QuickDownloadToggles
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            disabled={loading}
            hideChooseFormat={true}
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
                    portrait={true}
                  />
                </div>

                <Box ref={detailsRef}></Box>
              </Box>
              <CTDivider />
              <DownloadOptions videoDetails={videoDetails} videoUrl={reelUrl} />
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default InstagramReelsDownloader;
