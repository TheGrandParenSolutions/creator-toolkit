import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Card, Text, Notification, Loader, Box } from "@mantine/core";
import { getVideoDetails } from "@src/services/YoutubeDownloaderApi";
import {
  ClipboardSolid,
  XCircleSolid,
  BrandYoutubeSolid,
} from "@mynaui/icons-react";
import YoutubeThumbnail from "@src/shared/Youtube/YoutubeThumbnail";
import CTDivider from "@src/shared/Divider/CTDivider";
import { VideoDetails } from "@src/types/YoutubeDownloaderTypes";
import DownloadOptions from "@src/components/Download/DownloadOptions";
import { MockVideoDetails } from "@src/utils/HelperUtils";

const YouTubeDownloader = () => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(MockVideoDetails);
  const [error, setError] = useState<string>("");
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const handleFetchVideoDetails = async () => {
    if (!youtubeUrl.trim()) return null;

    setLoading(true);
    setError("");

    try {
      const details = await getVideoDetails(youtubeUrl);
      setLoading(false);
      setVideoDetails(details);

      // Smooth scroll to the video details section
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } catch {
      setError("Failed to fetch video details. Please check the link.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleFetchVideoDetails();
    }
  };

  useEffect(() => {
    handleFetchVideoDetails();
  }, [youtubeUrl]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (youtubeUrl !== event.target.value) {
      setYoutubeUrl(event.target.value);
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

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center space-y-6 rounded-lg bg-light-app p-0 transition-all duration-300 dark:bg-dark-app-content lg:px-10">
        {/* Header */}
        <div className="w-full text-center">
          <h1 className="flex flex-col items-center justify-center lg:flex-row lg:space-x-2 text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-200">
            <BrandYoutubeSolid className="text-3xl text-red-500" />
            <Text
              component="h1"
              className="mt-2 lg:mt-0 text-lg lg:text-3xl font-bold text-gray-800 dark:text-gray-100"
            >
              Download YouTube Videos Instantly
            </Text>
          </h1>
          <Text className="mt-1 text-sm lg:text-base text-gray-500 dark:text-gray-400">
            Paste your YouTube link below to fetch video details and download
            formats.
          </Text>
        </div>

        {/* Input Section */}
        <div className="flex w-full max-w-3xl flex-row lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-3">
          <div
            className={`relative flex-grow ${
              loading ? "animate-pulse-border" : ""
            }`}
          >
            <input
              value={youtubeUrl}
              onChange={onChangeHandler}
              onKeyDown={handleInputKeyDown}
              placeholder="Paste YouTube link here..."
              aria-label="YouTube URL"
              className={`text-xs lg:text-base w-full rounded-lg border-2 py-2 pl-4 pr-20 shadow-sm transition hover:shadow-lg focus:shadow-xl focus:outline-none ${
                loading
                  ? "border-orange-500 text-gray-400"
                  : "border-gray-300 text-gray-800 dark:border-black dark:text-gray-200"
              } bg-white dark:bg-gray-800`}
              disabled={loading}
            />
            {!loading ? (
              <>
                <button
                  className="absolute right-12 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() =>
                    navigator.clipboard.readText().then(setYoutubeUrl)
                  }
                  aria-label="Paste YouTube URL"
                >
                  <ClipboardSolid className="h-4 w-4" />
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => setYoutubeUrl("")}
                  aria-label="Clear Input"
                >
                  <XCircleSolid className="h-4 w-4" />
                </button>
              </>
            ) : (
              <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-orange-50">
                <Loader type="bars" size="xs" color="var(--brand-dark-orange)" />
              </div>
            )}
          </div>
        </div>

        {/* Error Notification */}
        {error && (
          <Notification
            className="mt-4 w-full max-w-3xl p-4 text-sm lg:text-base dark:bg-dark-app-content dark:text-gray-200"
            color="red"
            title="Error"
            radius="md"
          >
            {error}
          </Notification>
        )}

        {/* Video Details Section */}
        {videoDetails && videoDetails.formats && (
          <div className="w-full dark:bg-dark-app-content dark:text-gray-200">
            <Card className="dark:bg-dark-card w-full max-w-4xl rounded-lg bg-inherit p-0 dark:text-gray-200">
              <Box
                className="aspect-w-5 aspect-h-4 relative mx-auto flex w-full items-center justify-center rounded-[24px] border-2 border-gray-200 bg-gray-50 p-5 dark:border-black dark:bg-inherit"
              >
                <YoutubeThumbnail
                  thumbnail={videoDetails.thumbnailUrl}
                  title={videoDetails.title}
                  channelLogo={videoDetails.channelLogoUrl ?? undefined}
                  channelName={videoDetails.channelName}
                  uploadedTime={videoDetails.youtubeVideoAge}
                  views={videoDetails.totalViews}
                />
                <Box ref={detailsRef}></Box>
              </Box>
              <CTDivider />
              <div className="rounded-md dark:bg-dark-app-content">
                <Text className="font-grifter mb-4 text-center text-lg lg:text-2xl font-bold">
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
