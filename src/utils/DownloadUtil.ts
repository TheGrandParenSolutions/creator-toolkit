import { getDownloadURI } from "@src/services/YoutubeDownloaderApi";
import { VideoFormat } from "@src/types/YoutubeDownloaderTypes";
import { VideoDetails } from "../types/YoutubeDownloaderTypes";
import { isAudioOnlyFormat, sanitizeFileName } from "@src/utils/HelperUtils";
import { showToast } from "@src/utils/Theme";

export const DownloadVideoAndMerge = async (
  formatDetails: VideoFormat,
  videoDetails: VideoDetails,
  mergeStreams: (
    videoUrl: string,
    audioUrl: string,
    audioContainer: string,
    videoContainer: string,
    fileName: string,
  ) => Promise<void>,
  videoUrl: string,
) => {
  if (!formatDetails || !videoDetails) {
    throw new Error();
  }
  const requestId = crypto.randomUUID();

  const audioFormats = videoDetails.formats.filter(format => {
    return isAudioOnlyFormat(format);
  });

  const originalAudio = audioFormats.filter(format =>
    format.quality.toLowerCase().includes("original"),
  );

  const audioFormat = originalAudio.length ? originalAudio[0] : audioFormats[0];

  try {
    formatDetails.isMuxedFile = true;

    const videoSignedUrl = await getDownloadURI(
      videoUrl,
      formatDetails,
      videoDetails,
      requestId,
      audioFormat?.url || "",
    );

    const audioSignedUrl = await getDownloadURI(
      videoUrl,
      audioFormat,
      videoDetails,
      requestId,
      audioFormat?.url || "",
    );

    const fileName = sanitizeFileName(
      `${videoDetails.title}-${formatDetails.quality}-${audioFormat.quality}`,
    );
    await mergeStreams(
      videoSignedUrl,
      audioSignedUrl,
      audioFormat.mimeType,
      formatDetails.mimeType,
      fileName,
    );
  } catch (error) {
    showToast(
      "error",
      "Error downloading video:" + error,
      "Failed to download video. Check console for details.",
    );
  }
};

export const getUrlBlob = async (url: string): Promise<Blob> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch URL: ${url}`);
  }

  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("ReadableStream not supported in the response.");
  }

  const chunks: Uint8Array[] = [];
  let receivedLength = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    receivedLength += value.length;
  }

  const completeArray = new Uint8Array(receivedLength);
  let position = 0;
  for (const chunk of chunks) {
    completeArray.set(chunk, position);
    position += chunk.length;
  }

  return new Blob([completeArray]);
};

export const downloadBlob = (
  blob: Blob,
  fileName: string,
  extension: string,
) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}.${extension.toLowerCase()}`;
  link.click();
};
