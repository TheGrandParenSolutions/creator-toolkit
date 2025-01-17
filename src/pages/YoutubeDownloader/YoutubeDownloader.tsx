import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Card, Text, Notification, Box } from "@mantine/core";
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
import FFmpegService from "@src/service/ffmpeg/FFmpegService";
import {
  isAudioOnlyFormat,
  isVideoOnlyFormat,
  sanitizeFileName,
} from "@src/utils/HelperUtils";

const YouTubeDownloader = () => {
  const { mergeStreams } = FFmpegService();
  const [selectedOption, setSelectedOption] = useState("auto");
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [error, setError] = useState<string>("");
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const handleFetchVideoDetails = async () => {
    if (!youtubeUrl.trim()) return null;

    setLoading(true);
    setError("");

    try {
      const details = await getVideoDetails(youtubeUrl);
      const formats = details.formats;

      switch (selectedOption) {
        case "auto": {
          const best1080pFormat = formats.find(f => {
            return f.quality.includes("1080p");
          });
          const formatDetails = best1080pFormat ? best1080pFormat : formats[0];

          await DownloadVideoAndMerge(
            formatDetails,
            details,
            mergeStreams,
            youtubeUrl,
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
          const blob = await getUrlBlob(audioSignedUrl);
          downloadBlob(blob, fileName, "mp3");
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
          const blob = await getUrlBlob(audioSignedUrl);
          downloadBlob(blob, fileName, "mp4");
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
      setError("Failed to fetch video details. Please check the link.");
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
          <h1 className="flex flex-col items-center justify-center text-xl font-medium text-gray-800 dark:text-gray-200 lg:flex-row lg:space-x-2 lg:text-2xl">
            <BrandYoutubeSolid size={32} className="text-red-500" />
            <Text
              component="h1"
              className="mt-2 text-lg font-bold text-gray-800 dark:text-gray-100 lg:mt-0 lg:text-3xl"
            >
              Download Youtube Videos
            </Text>
          </h1>
          <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
            Paste your YouTube video link below to fetch video details and download
            formats.
          </Text>
        </div>

        {/* Input Section */}
        <div className="flex w-full max-w-2xl flex-col items-center gap-4 lg:space-x-3 lg:space-y-0 !mt-6">
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

        {/* Error Notification */}
        {error && (
          <Notification
            className="mt-4 w-full max-w-3xl p-4 text-sm dark:bg-dark-app-content dark:text-gray-200 lg:text-base"
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
                <Text className="font-grifter mb-4 text-center text-lg font-bold lg:text-2xl">
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
