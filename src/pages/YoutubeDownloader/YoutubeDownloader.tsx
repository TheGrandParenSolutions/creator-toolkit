import React, { useState, useRef, useEffect } from "react";
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
  const [youtubeUrl, setYoutubeUrl] = useState<string>(
    "https://www.youtube.com/watch?v=mNkzw9bh0V8",
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(
    MockVideoDetails,
  );
  const [error, setError] = useState<string>("");
  const [dynamicPlaceholder, setDynamicPlaceholder] = useState<string>(
    "Paste YouTube link here...",
  );

  const detailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loading) return;

    const placeholders = [
      "Fetching details...",
      "Almost there...",
      "Just a moment...",
    ];
    let index = 0;
    const interval = setInterval(() => {
      setDynamicPlaceholder(placeholders[index]);
      index = (index + 1) % placeholders.length;
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, [loading]);

  const handleFetchVideoDetails = async () => {
    if (!youtubeUrl.trim()) return;

    setLoading(true);
    setError("");

    try {
      const details = await getVideoDetails(youtubeUrl);
      setVideoDetails(details);

      // Smooth scroll to the video details section
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } catch {
      setError("Failed to fetch video details. Please check the link.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleFetchVideoDetails();
    }
  };

  const handlePaste = async (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = event.clipboardData.getData("Text");
    setYoutubeUrl(pastedData);

    setTimeout(() => {
      handleFetchVideoDetails();
    }, 300);
  };

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>Download YouTube Videos in HD | Creator Toolkit</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Easily download YouTube videos in HD or convert them to MP3 with our free YouTube downloader. Quick, secure, and reliable!"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.creator-toolkit.com/youtube-downloader"
        />

        {/* Open Graph Meta Tags */}
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

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Download YouTube Videos in HD | Creator Toolkit",
      "description": "Easily download YouTube videos in HD or convert them to MP3 with our free YouTube downloader. Quick, secure, and reliable!",
      "url": "https://www.creator-toolkit.com/youtube-downloader",
      "image": "https://www.creator-toolkit.com/assets/thumbnail.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Creator Toolkit",
        "logo": "https://www.creator-toolkit.com/assets/logo.png"
      }
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center space-y-6 rounded-lg bg-light-app p-6 transition-all duration-300 dark:bg-dark-app-content">
        {/* Header */}
        <div className="w-full text-center">
          <h1 className="flex items-center justify-center space-x-2 text-xl font-medium text-gray-800 dark:text-gray-200">
            <BrandYoutubeSolid className="text-3xl text-red-500" />
            <Text
              component="h1"
              className="text-2xl font-bold text-gray-800 dark:text-gray-100"
            >
              Download YouTube Videos Instantly
            </Text>
          </h1>
          <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Paste your YouTube link below to fetch video details and download
            formats.
          </Text>
        </div>

        {/* Input Section */}
        <div className="flex w-full max-w-3xl items-center space-x-3">
          {/* Input Field with Icons */}
          <div
            className={`relative flex-grow ${
              loading ? "animate-pulse-border" : ""
            }`}
          >
            <input
              value={!loading ? youtubeUrl : ""}
              onChange={e => setYoutubeUrl(e.target.value)}
              onKeyDown={handleInputKeyDown}
              onPaste={handlePaste}
              placeholder={
                loading ? dynamicPlaceholder : "Paste YouTube link here..."
              }
              aria-label="YouTube URL"
              className={`text-md w-full rounded-xl  border py-2 pl-4 pr-20 shadow-sm transition hover:shadow-lg focus:shadow-xl focus:outline-none ${
                loading
                  ? "border-orange-500 text-gray-400"
                  : "border-gray-300 text-gray-800 dark:border-gray-600 dark:text-gray-200"
              } bg-white dark:bg-gray-800`}
              disabled={loading}
            />
            {!loading ? (
              <>
                <button
                  className="absolute right-12 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-600 hover:bg-gray-200 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() =>
                    navigator.clipboard.readText().then(setYoutubeUrl)
                  }
                  aria-label="Paste YouTube URL"
                >
                  <ClipboardSolid className="h-4 w-4" />
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-600 hover:bg-gray-200 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => setYoutubeUrl("")}
                  aria-label="Clear Input"
                >
                  <XCircleSolid className="h-4 w-4" />
                </button>
              </>
            ) : (
              <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-orange-50">
                <Loader
                  type="bars"
                  size={"xs"}
                  color="var(--brand-dark-orange)"
                />
              </div>
            )}
          </div>
        </div>

        {/* Error Notification */}
        {error && (
          <Notification
            className="mt-4 w-full max-w-3xl dark:bg-dark-app-content dark:text-gray-200"
            color="red"
            title="Error"
            radius="md"
          >
            {error}
          </Notification>
        )}
        {/* Video Details Section */}
        {videoDetails && videoDetails.formats && (
          <div
            ref={detailsRef}
            className="w-full dark:bg-dark-app-content dark:text-gray-200"
          >
            <Card className="dark:bg-dark-card w-full max-w-4xl rounded-lg bg-inherit dark:text-gray-200">
              <Box className="aspect-w-5 aspect-h-4 bg-dark-navigation relative mx-auto flex w-full flex-1 items-center justify-center rounded-[24px] border-2 border-gray-200 bg-gray-50 p-5 dark:border-black dark:bg-inherit">
                <YoutubeThumbnail
                  thumbnail={videoDetails.thumbnailUrl}
                  title={videoDetails.title}
                  channelLogo={videoDetails.channelLogoUrl}
                  channelName={videoDetails.channelName}
                  uploadedTime={videoDetails.youtubeVideoAge}
                  views={videoDetails.totalViews}
                />
              </Box>

              <CTDivider />
              <div className="mx-5 rounded-md dark:bg-dark-app-content">
                <Text className="font-grifter mb-4 text-center text-3xl font-bold">
                  Download options
                </Text>
                <div className="grid">
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
