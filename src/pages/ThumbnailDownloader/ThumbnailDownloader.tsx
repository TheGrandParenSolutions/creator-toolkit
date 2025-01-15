import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, Text, Notification, Box } from "@mantine/core";
import CTInput from "@src/shared/Input/CTInput";
import CTToggleTabs, {
  TabsProps,
} from "@src/shared/SegmentedToggle/CTToggleTabs";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import {
  fetchDownloadUrl,
  fetchYoutubeThumbnails,
} from "@src/Api/Modules/YoutubeThumbnailDownloader/YoutubeThumbnailDownloaderService";

const downloadThumbnail = async (url: string, resoltuion: string) => {
  try {
    //fetch download url to download thumbnail
    const downloadUrl = await fetchDownloadUrl(url);

    //download thumbnail
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `thumbnail-${resoltuion}.jpg`; // Default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl); // Clean up the URL
  } catch (error) {
    console.error("Error fetching thumbnail:", error);
    alert("Failed to download the thumbnail. Please try again.");
  }
};

const scrollToSection = () => {
  const target = document.getElementById("#thumbnail"); // Use the ID of the initial section
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const YouTubeThumbnailDownloader = () => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>(
    "https://www.youtube.com/watch?v=jmpUP1MaQ9Q&list=RDFMJCjRU1W_s&index=4",
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [thumbnails, setThumbnails] = useState<
    {
      resolution: string;
      resolutionText: string;
      url: string;
      height?: string;
      width?: string;
    }[]
  >([]);
  const [activeTab, setActiveTab] = useState<string>("All Formats");

  const fetchThumbnails = async () => {
    if (!youtubeUrl.trim()) {
      setError("Please enter a valid YouTube URL.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const thumbnailsWithResolutions = fetchYoutubeThumbnails(youtubeUrl);
      setThumbnails(thumbnailsWithResolutions);
      scrollToSection();
    } catch (err) {
      setError("Failed to fetch thumbnails. Please check the link."+ err);
    } finally {
      setLoading(false);
    }
  };

  const tabs: TabsProps[] = [
    { label: "All Formats", component: "All Formats" },
    ...thumbnails.map(thumbnail => ({
      label: thumbnail.resolution,
      component: thumbnail.resolution,
    })),
  ];

  const filteredThumbnails = thumbnails.filter(thumbnail =>
    activeTab === "All Formats" ? true : thumbnail.resolution === activeTab,
  );

  return (
    <>
      <Helmet>
        <title>YouTube Thumbnail Downloader</title>
        <meta
          name="description"
          content="Effortlessly download YouTube thumbnails in various resolutions. Simply paste the video URL to grab high-quality thumbnails instantly!"
        />
      </Helmet>

      <div className="mx-auto flex w-full flex-col items-center space-y-6 bg-light-app p-6 dark:bg-dark-app-content">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200 lg:text-3xl">
            YouTube Thumbnail Downloader
          </h1>
          <Text className="mx-auto mt-3 max-w-4xl text-sm text-gray-600 dark:text-gray-400 lg:text-base">
            Paste your YouTube video URL below to fetch thumbnails in all
            available resolutions. Easily download stunning 4K HD YouTube
            thumbnails with our free Thumbnail Downloader. Just enter the
            YouTube video URL, and in moments, get high-quality thumbnails ready
            to use.
          </Text>
        </div>

        {/* Input Section */}
        <div className="flex w-full max-w-2xl flex-col items-center gap-4 lg:flex-row">
          <CTInput
            value={youtubeUrl}
            placeholder="Enter YouTube Video URL"
            onChange={value => setYoutubeUrl(value)}
            onSubmit={fetchThumbnails}
            loading={loading}
            disabled={loading}
          />
        </div>

        {/* Error Notification */}
        {error && (
          <Notification color="red" title="Error" onClose={() => setError("")}>
            {error}
          </Notification>
        )}

        {/* Tabs for Resolutions */}
        {thumbnails.length > 0 && (
          <CTToggleTabs
            tabs={tabs}
            activeTab={activeTab}
            onToggle={selectedTab => setActiveTab(selectedTab)}
          />
        )}
        <div id="#thumbnail"></div>
        {/* Thumbnail Display */}
        {filteredThumbnails.length > 0 && (
          <div className="w-full">
            <Card className="w-full rounded-lg text-center dark:bg-dark-app-content">
              <Box className="flex w-full flex-col gap-4">
                {filteredThumbnails.map((thumbnail, index) => (
                  <div key={index} className="mb-4 flex flex-col items-center">
                    <div
                      className={`mb-4 flex w-full max-w-[720px] items-center justify-between`}
                    >
                      <Text
                        component="h1"
                        className="self-start text-3xl font-bold dark:text-white"
                      >
                        {thumbnail.resolution} ({thumbnail.resolutionText})
                      </Text>
                      <CTAnimatedButton
                        onClick={() =>
                          downloadThumbnail(
                            thumbnail.url,
                            thumbnail.resolutionText,
                          )
                        }
                        label={"Download"}
                        hoverLabel={"Let's do it"}
                        buttonStyles={"w-[110px] sm:w-[140px]"}
                        radius={"xl"}
                        size="md"
                      />
                    </div>
                    <img
                      src={thumbnail.url}
                      alt={`Thumbnail ${thumbnail.resolution}`}
                      className="my-2 rounded-md shadow-md"
                      style={{
                        height: thumbnail.height,
                        width: thumbnail.width,
                      }}
                    />
                  </div>
                ))}
              </Box>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default YouTubeThumbnailDownloader;
