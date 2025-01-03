import { FC, useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Text,
  Box,
  Paper,
  CopyButton,
  Button,
  Menu,
  Loader,
  ScrollArea,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import YoutubeThumbnail from "@src/shared/Youtube/YoutubeThumbnail";
import CTInput from "@src/shared/Input/CTInput";
import { mockTranscript, MockVideoDetails } from "@src/utils/HelperUtils";
import { Copy, ChevronDown, Download, InfoCircle } from "@mynaui/icons-react";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton.tsx/CTAnimatedButton.tsx";
import { CTCheckIcon } from "@src/utils/HtmlUtil";
import { VideoDetails } from "@src/types/YoutubeDownloaderTypes";

const YoutubeToText: FC = () => {
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(
    MockVideoDetails,
  );
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>("english");
  const [downloadLoading, setDownloadLoading] = useState<boolean>(false);
  const transcriptRef = useRef<HTMLDivElement | null>(null);

  const handleFetchTranscript = () => {
    if (!youtubeUrl.trim()) {
      console.error("Please provide a valid YouTube URL.");
      return;
    }
    setVideoDetails(MockVideoDetails);
    setLoading(true);

    // Simulating API call
    setTimeout(() => {
      setTranscript(mockTranscript);
      setLoading(false);
    }, 2000);
  };

  const handleDownload = (format: string) => {
    setDownloadLoading(true);

    // Simulate file generation
    setTimeout(() => {
      setDownloadLoading(false);
      console.log(`Downloaded as ${format}`);
    }, 2000);
  };

  useEffect(() => {
    if (transcript && transcriptRef.current) {
      transcriptRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [transcript]);

  return (
    <>
      <Helmet>
        <title>YouTube to Text | Creator Toolkit</title>
        <meta
          name="description"
          content="Welcome to Youtube to Text online converter, where you can easily convert any video from popular platforms like Youtube to text. Whether it's a regular video, a live stream, or a short, our tool can handle it all in Creator Toolkit."
        />
      </Helmet>

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center space-y-6 rounded-lg bg-light-app dark:bg-dark-app-content">
        {/* Header */}
        <div className="w-full text-center">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 lg:text-2xl">
            YouTube to Text Converter
          </h1>
          <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
            Paste a YouTube link below to transcribe video audio into text.
          </Text>
        </div>

        <div className="flex w-full max-w-2xl flex-col items-center gap-6 space-y-3 lg:space-x-3 lg:space-y-0">
          {/* Input Field using CTInput */}
          <CTInput
            value={youtubeUrl}
            placeholder="Paste YouTube link here"
            onChange={value => setYoutubeUrl(value)}
            onSubmit={handleFetchTranscript}
            loading={loading}
            disabled={loading}
          />

          <div className="flex gap-2">
            <Menu
              trigger="click-hover"
              openDelay={100}
              closeDelay={10000}
              shadow="md"
              width={150}
              radius="md"
              classNames={{
                dropdown:
                  "bg-[--brand-main-bg] border-[--main-yellow] dark:border-black dark:bg-gray-800",
              }}
            >
              <Menu.Target>
                <Button
                  size="md"
                  radius={"md"}
                  classNames={{
                    inner: "w-full",
                  }}
                  rightSection={
                    <ChevronDown
                      size={24}
                      className="text-slate-700 dark:text-slate-300"
                    />
                  }
                  className="flex min-w-[100px] md:min-w-[150px] items-center justify-between border-[1.5px] border-gray-500 bg-transparent px-4 text-sm md:text-base font-medium text-black shadow-sm transition hover:bg-gray-100 dark:border-black dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  <span className="mr-2 font-medium text-black dark:text-white">
                    {language.charAt(0).toUpperCase() + language.slice(1)}
                  </span>
                </Button>
              </Menu.Target>
              <Menu.Dropdown className="p-2">
                {[
                  { value: "english", label: "English" },
                  { value: "spanish", label: "Spanish" },
                  { value: "french", label: "French" },
                ].map(item => (
                  <Menu.Item
                    key={item.value}
                    onClick={() => setLanguage(item.value)}
                    className={`mb-1 font-semibold ${
                      language === item.value
                        ? "bg-[--main-yellow] text-black"
                        : "text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    }`}
                  >
                    {item.label}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>

            <CTAnimatedButton
              onClick={handleFetchTranscript}
              loading={loading}
              label={"Convert"}
              hoverLabel={"Let's do it"}
              buttonStyles={"w-[110px] sm:w-[140px]"}
              radius={"xl"}
              size="md"
            />
          </div>
        </div>

        {transcript && videoDetails && (
          <Paper
            radius="lg"
            className="w-full max-w-3xl bg-light-app dark:bg-dark-app-content"
          >
            {/* Video Thumbnail */}
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
            </Box>
            <div ref={transcriptRef}></div>

            <div className="mt-14 w-full rounded-lg border border-[--main-yellow] bg-transparent p-4 dark:border-black dark:bg-zinc-800">
              {/* Header with Language and Buttons */}
              <div className="mb-4 flex flex-col items-center justify-between gap-4 md:flex-row">
                {/* Language Selector */}
                <div className="flex items-center space-x-2">
                  <Text className="text-base font-bold text-gray-800 dark:text-gray-100 md:text-xl">
                    {language === "english"
                      ? "English (auto-generated)"
                      : language.charAt(0).toUpperCase() + language.slice(1)}
                  </Text>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-1">
                  {/* Download As Dropdown */}
                  <Menu
                    trigger="click-hover"
                    openDelay={100}
                    closeDelay={10000}
                    shadow="md"
                    width={200}
                    radius="md"
                    position="bottom-start"
                    classNames={{
                      dropdown:
                        "bg-[--brand-main-bg] border-[--main-yellow] dark:border-black dark:bg-gray-800",
                    }}
                  >
                    <Menu.Target>
                      <Button
                        size="sm"
                        radius={"lg"}
                        className="flex items-center gap-2 border-2 border-none bg-main-gradient text-sm font-medium text-black transition hover:bg-[--brand-dark-yellow] dark:border-black dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                        disabled={downloadLoading}
                      >
                        {downloadLoading ? (
                          <Loader size="xs" color="black" className="mr-2" />
                        ) : (
                          <Download size={20} className="mr-1 text-slate-900" />
                        )}
                        <span className="mr-2 font-medium text-black">
                          {downloadLoading ? "Generating..." : "Download As"}
                        </span>
                        <ChevronDown size={20} className="text-slate-700" />
                      </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      {[
                        { label: "PDF File", value: "pdf" },
                        { label: "TXT File", value: "txt" },
                        { label: "DOC File", value: "doc" },
                      ].map(item => (
                        <Menu.Item
                          key={item.value}
                          onClick={() => handleDownload(item.label)}
                          className="text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                        >
                          {item.label}
                        </Menu.Item>
                      ))}
                    </Menu.Dropdown>
                  </Menu>

                  {/* Copy Button */}
                  <CopyButton value={transcript} timeout={3000}>
                    {({ copied, copy }) => (
                      <Button
                        radius={"xl"}
                        size="sm"
                        color={copied ? "teal" : "gray"}
                        variant="subtle"
                        onClick={copy}
                      >
                        {copied ? (
                          <div className="flex items-center justify-center gap-1">
                            <CTCheckIcon style={{ width: 20 }} />
                            {"Copied!"}
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-1">
                            <Copy size={20} />
                            {"Copy text"}
                          </div>
                        )}
                      </Button>
                    )}
                  </CopyButton>
                  <Tooltip label={`Character Count: ${transcript.length}`}>
                    <ActionIcon
                      size="sm"
                      variant="subtle"
                      color="teal"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                    >
                      <InfoCircle color="teal" size={20} />
                    </ActionIcon>
                  </Tooltip>
                </div>
              </div>
              {/* Transcript Content */}
              <div className="mt-4 rounded-lg border border-none bg-gray-100 p-4 text-sm text-gray-800 dark:border-black dark:bg-gray-800 dark:text-gray-200">
                <ScrollArea h={400} type="always">
                  <pre className="whitespace-pre-wrap">{transcript}</pre>
                </ScrollArea>
              </div>
            </div>
          </Paper>
        )}
      </div>
    </>
  );
};

export default YoutubeToText;
