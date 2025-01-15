import { useState, useRef } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL, fetchFile } from "@ffmpeg/util";

function FFmpegService() {
  const [loaded, setLoaded] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());

  const load = async () => {
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm";
    const ffmpeg = ffmpegRef.current;

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "FFmpegServicelication/wasm",
      ),
    });
    setLoaded(true);
  };

  async function mergeStreams(
    videoUrl: string,
    audioUrl: string,
    audioContainer: string,
    videoContainer: string,
    fileName: string,
  ) {
    const audioBlob = await getUrlBlob(audioUrl);

    const videoBlob = await getUrlBlob(videoUrl);

    await load();
    const ffmpeg = ffmpegRef.current;
    const videoFilePath = `video.${videoContainer.toLowerCase()}`;
    const audioFilePath = `audio.${audioContainer.toLowerCase()}`;

    await ffmpeg.writeFile(videoFilePath, await fetchFile(videoBlob));
    await ffmpeg.writeFile(audioFilePath, await fetchFile(audioBlob));
    const outputFile = await processMedia(
      ffmpeg,
      videoFilePath,
      audioFilePath,
      videoContainer,
      {},
    );

    const mergedFile: any = await ffmpeg.readFile(outputFile);
    const blob = new Blob([mergedFile.buffer], { type: "video/mp4" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.${videoContainer.toLowerCase()}`;
    link.click();
  }

  const getUrlBlob = async (url: string): Promise<Blob> => {
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

  async function processMedia(
    ffmpeg: FFmpeg,
    inputVideo: string,
    inputAudio: string,
    outputFormat: string,
    options: any = {},
  ) {
    const {
      reencode = false,
      resolution = null,
      audioBitrate = "128k",
    } = options;

    const command = ["-y", "-i", inputVideo, "-i", inputAudio];

    if (reencode) {
      command.push(
        "-c:v",
        "libx264",
        "-preset",
        "ultrafast",
        "-crf",
        "28",
        "-c:a",
        outputFormat === "mp4" ? "aac" : "libopus",
        "-b:a",
        audioBitrate,
      );

      if (resolution) {
        command.push("-vf", `scale=${resolution.width}:${resolution.height}`);
      }
    } else {
      command.push("-c:v", "copy", "-c:a", "copy");
    }

    const outputFile = `output.${outputFormat}`;
    command.push(outputFile);

    await ffmpeg.exec(command);

    return outputFile;
  }

  return {
    loaded,
    mergeStreams,
  };
}

export default FFmpegService;
