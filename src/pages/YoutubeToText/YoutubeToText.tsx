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
import { Copy, ChevronDown, Download, InfoCircle } from "@mynaui/icons-react";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { CTCheckIcon } from "@src/utils/HtmlUtil";
import { VideoDetails } from "@src/types/YoutubeDownloaderTypes";
import { generateTranscript } from "@src/services/YoutubeTranscriptApi";
import { languages, transcriptFileFormats } from "@src/constants/constants";
import {
  formatTranscript,
  generateAndDownloadFile,
} from "@src/utils/HelperUtils";

const YoutubeToText: FC = () => {
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>(languages[0].label);
  const [downloadLoading, setDownloadLoading] = useState<boolean>(false);
  const transcriptRef = useRef<HTMLDivElement | null>(null);

  const handleFetchTranscript = async () => {
    if (!youtubeUrl.trim()) {
      console.error("Please provide a valid YouTube URL.");
      return;
    }
    const languageCode = languages.find(lng => lng.label === language)?.value;
    setLoading(true);
    const videoDetails = await generateTranscript({
      url: youtubeUrl,
      lng: languageCode as string,
    });

    if (!videoDetails || !videoDetails?.transcript) {
      console.error("Unable to find  transcript");
      return;
    }
    setVideoDetails(videoDetails);
    const transcript = formatTranscript(
      videoDetails.transcript,
      videoDetails.title,
      language,
      youtubeUrl,
    );
    setTranscript(transcript);
    setLoading(false);
  };

  const handleDownloadFile = async (format: string) => {
    if (!transcript) return null;
    setDownloadLoading(true);

    try {
      generateAndDownloadFile(transcript, format, videoDetails?.title || "");
    } catch (error) {
      console.error("Error generating file:", error);
    }

    setDownloadLoading(false);
  };

  useEffect(() => {
    if (transcript && transcriptRef.current) {
      transcriptRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [transcript]);

  return (
    <>
      <Helmet>
        <title>Youtube to Text | Creator Toolkit</title>
        <meta
          name="description"
          content="Welcome to Youtube to Text online converter, where you can easily convert any video from popular platforms like Youtube to text. Whether it's a regular video, a live stream, or a short, our tool can handle it all in Creator Toolkit."
        />
      </Helmet>

      <div className="mx-auto mb-4 mt-14 flex w-full max-w-4xl flex-col items-center space-y-6 rounded-lg ">
        {/* Header */}
        <div className="w-full text-center">
          <h1 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 lg:text-2xl ">
            Youtube to Text Converter
          </h1>
          <Text className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 lg:text-base">
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
                  "bg-[--brand-main-bg] border-[--main-yellow] dark:border-black dark:bg-zinc-800",
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
                      className="text-zinc-700 dark:text-zinc-300"
                    />
                  }
                  className="flex min-w-[100px] items-center justify-between border-[1.5px] border-zinc-500 bg-transparent px-4 text-sm font-medium text-black shadow-sm transition hover:bg-zinc-100 dark:border-black dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 md:min-w-[150px] md:text-base"
                >
                  <span className="mr-2 font-medium text-black dark:text-white">
                    {language.charAt(0).toUpperCase() + language.slice(1)}
                  </span>
                </Button>
              </Menu.Target>
              <Menu.Dropdown className="p-2">
                {languages.map(item => (
                  <Menu.Item
                    value={item.label}
                    key={item.label}
                    onClick={() => setLanguage(item.label)}
                    className={`mb-1 font-semibold ${
                      language === item.label
                        ? "bg-[--main-yellow] text-black"
                        : "text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
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
                  <Text className="font-primary text-base font-bold font-semibold text-zinc-800 dark:text-zinc-100 md:text-2xl">
                    {language === "english"
                      ? "English (auto-generated)"
                      : language.charAt(0).toUpperCase() + language.slice(1)}
                  </Text>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-1">
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
                        "bg-[--brand-main-bg] border-[--main-yellow] dark:border-black dark:bg-zinc-800",
                    }}
                  >
                    <Menu.Target>
                      <Button
                        size="sm"
                        radius={"lg"}
                        className="flex items-center gap-2 border-2 border-none bg-main-gradient text-sm font-medium text-black transition hover:bg-[--brand-dark-yellow] dark:border-black dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                        disabled={downloadLoading}
                      >
                        {downloadLoading ? (
                          <Loader size="xs" color="black" className="mr-2" />
                        ) : (
                          <Download size={20} className="mr-1 text-zinc-900" />
                        )}
                        <span className="mr-2 font-medium text-black">
                          {downloadLoading ? "Generating..." : "Download As"}
                        </span>
                        <ChevronDown size={20} className="text-zinc-700" />
                      </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      {transcriptFileFormats.map(item => (
                        <Menu.Item
                          key={item.value}
                          onClick={() => handleDownloadFile(item.value)}
                          className="text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
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
                      className="hidden text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100 md:block"
                    >
                      <InfoCircle color="teal" size={20} />
                    </ActionIcon>
                  </Tooltip>
                  <p className="text-extralight font-wix text-xs text-zinc-400 md:hidden">{`Character Count: ${transcript.length}`}</p>
                </div>
              </div>
              {/* Transcript Content */}
              <div className="mt-4 rounded-lg border border-none bg-zinc-100 p-4 text-sm font-medium text-black dark:border-black dark:bg-zinc-800 dark:text-white">
                <ScrollArea h={300} type="always">
                  <pre className="whitespace-pre-wrap">
                    <p className="font-DM">{transcript}</p>
                  </pre>
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
