import React, { useState, useRef, useEffect } from "react";
import { Card, Text, Divider, Notification } from "@mantine/core";
import {
  getVideoDetails,
  VideoDetails,
} from "@src/services/YoutubeDownloaderApi";
import {
  ClipboardSolid,
  XCircleSolid,
  BrandYoutubeSolid,
} from "@mynaui/icons-react";
import CTDownloadButton from "@src/shared/Buttons/DownloadButton/CTDownloadButton";
import InternalLoader from "assets/loader.svg";
import YoutubeThumbnail from "@src/shared/Youtube/YoutubeThumbnail";

const YouTubeDownloader = () => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [error, setError] = useState<string>("");
  const [dynamicPlaceholder, setDynamicPlaceholder] = useState<string>(
    "Paste YouTube link here...",
  );

  const detailsRef = useRef<HTMLDivElement | null>(null);

  // Cycle Placeholder Texts during Loading
  useEffect(() => {
    if (!loading) return;

    const placeholders = [
      "Fetching details...",
      "Almost there...",
      "Just a moment...",
    ];
    let index = 0;
    if (!placeholders.includes(dynamicPlaceholder)) {
      setDynamicPlaceholder(placeholders[index]);
      index = (index + 1) % placeholders.length;
    }

    const interval = setInterval(() => {
      setDynamicPlaceholder(placeholders[index]);
      index = (index + 1) % placeholders.length;
    }, 1200);

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

    // Trigger fetch if URL is pasted
    setTimeout(() => {
      handleFetchVideoDetails();
    }, 300);
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center space-y-6 rounded-lg p-6">
      {/* Header */}
      <div className="w-full text-center">
        <h1 className="flex items-center justify-center space-x-2 text-xl font-medium text-gray-800">
          <BrandYoutubeSolid className="text-3xl text-red-500" />
          <Text component="h1" className="text-2xl font-bold">
            Download YouTube Videos Instantly
          </Text>
        </h1>
        <Text className="mt-1 text-sm text-gray-500">
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
            className={`text-md w-full rounded-full border py-2 pl-4 pr-20 shadow-sm focus:outline-none ${
              loading
                ? "border-orange-500 text-gray-400"
                : "border-gray-300 text-gray-800"
            }`}
            disabled={loading} // Disable input during loading
          />
          {!loading ? (
            <>
              <button
                className="absolute right-12 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-600 hover:bg-gray-200 focus:outline-none"
                onClick={() =>
                  navigator.clipboard.readText().then(setYoutubeUrl)
                }
                aria-label="Paste YouTube URL"
              >
                <ClipboardSolid className="h-4 w-4" />
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-600 hover:bg-gray-200 focus:outline-none"
                onClick={() => setYoutubeUrl("")}
                aria-label="Clear Input"
              >
                <XCircleSolid className="h-4 w-4" />
              </button>
            </>
          ) : (
            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-orange-50">
              <InternalLoader />
            </div>
          )}
        </div>
      </div>

      {/* Error Notification */}
      {error && (
        <Notification
          className="mt-4 w-full max-w-3xl"
          color="red"
          title="Error"
          radius="md"
        >
          {error}
        </Notification>
      )}

      {/* Video Details Section */}
      {videoDetails && (
        <div ref={detailsRef} className="w-full">
          <Card className="w-full  max-w-4xl rounded-lg bg-inherit">
            <YoutubeThumbnail
              thumbnail={videoDetails.thumbnail}
              title={videoDetails.title}
            />

            <Divider className="my-6" />

            {/* Download Options */}
            <div className="rounded-md  p-5 ">
              <Text
                component="h1"
                className="font-grifter mb-4 text-2xl font-semibold "
              >
                Download Options:
              </Text>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {videoDetails.formats.map((format, index) => (
                  <CTDownloadButton
                    key={index}
                    quality={format.quality}
                    size={format.size}
                    url={format.url}
                    label={format.quality}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default YouTubeDownloader;
