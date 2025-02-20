import { getUserLocationData } from "@src/Api/Modules/GeoLocation/GeoLocationService";
import { MANDATORY_CT_PROMO_TEXT } from "@src/constants/constants";
import { VideoFormat } from "@src/types/YoutubeDownloaderTypes";
import jsPDF from "jspdf";

export function convertBytesToMB(
  sizeInBytes: number,
  decimals: number = 2,
): string {
  if (sizeInBytes <= 0) {
    return "0 MB";
  }

  const sizeInMB = sizeInBytes / (1024 * 1024); // Convert bytes to MB
  return `${sizeInMB.toFixed(decimals)} MB`; // Format to specified decimals
}

export const deviceSizeModes = {
  "Browser view": [
    {
      label: "Homepage Large (360x205)",
      dimensions: "360x205",
      deviceType: "desktop",
    },
    {
      label: "Homepage Small (240x135)",
      dimensions: "240x135",
      deviceType: "desktop",
    },
    {
      label: "Sidebar Suggested Video (188x94)",
      dimensions: "188x94",
      deviceType: "search",
    },
    {
      label: "Search Result Large (360x202)",
      dimensions: "360x202",
      deviceType: "search",
      showDescription: true,
    },
    {
      label: "Search Result Small (240x135)",
      dimensions: "240x135",
      deviceType: "search",
      showDescription: true,
    },
    { label: "Channel Page (270x150)", dimensions: "270x150" },
    { label: "Channel Page Small (198x112)", dimensions: "198x112" },
    {
      label: "Watch Later (540x106)",
      dimensions: "360x120",
      deviceType: "search",
    },
  ],
  "Mobile view": [
    {
      label: "Mobile Homepage (320x180)",
      dimensions: "320x180",
      deviceType: "desktop",
      showDescription: false,
    },
    {
      label: "Mobile Suggested (168x94)",
      dimensions: "168x94",
      deviceType: "search",
    },
    { label: "Mobile Search (320x180)", dimensions: "320x180" },
  ],
};

export const formatTranscript = (
  transcript: string,
  title: string,
  language: string,
  url: string,
) => {
  // Format and clean the subtitles
  const cleanedSubtitles = transcript
    .replace(/\d{2}:\d{2}:\d{2}[.,]\d{3} --> \d{2}:\d{2}:\d{2}[.,]\d{3}/g, "") // Remove timestamps
    .replace(/align:start.*?position:\d+%/g, "") // Remove alignment metadata
    .replace(/<[^>]*>/g, "") // Remove tags like <c> or <i>
    .replace(/\b(webvtt|kind:.*|language:.*)\b/gi, "") // Remove unwanted lines like "webvtt" or "language"
    .replace(/^\d+$/gm, "") // Remove standalone numbers
    .replace(/\n\s*\n/g, "\n") // Remove extra blank lines
    .trim();
  const goodTranscript = cleanDuplicateLines(cleanedSubtitles);

  // Combine short lines into paragraphs
  const combinedLines = goodTranscript
    .split("\n")
    .reduce((acc: string[], line: string) => {
      if (line.trim()) {
        if (acc.length > 0 && acc[acc.length - 1].length < 100) {
          acc[acc.length - 1] += ` ${line.trim()}`; // Append to the previous line
        } else {
          acc.push(line.trim()); // Start a new line
        }
      }
      return acc;
    }, [])
    .join("\n\n"); // Join with double newlines for readability
  const formattedTranscript = `Video title: ${title}\nVideo URL: ${url}\nVideo language: ${language}\n\n--------------------------------\n\n${combinedLines}`;

  return formattedTranscript;
};

export const cleanDuplicateLines = (transcript: string, lineLength = 80) => {
  const lines = transcript.split("\n");
  const cleanedLines = [];
  let previousLine = "";
  let currentParagraph = "";

  for (let line of lines) {
    // Trim whitespace for better comparison
    line = line.trim();

    // Skip empty lines
    if (!line) continue;

    // Avoid duplicates
    if (line !== previousLine) {
      currentParagraph += line + " ";
      previousLine = line;
    }

    // If the current paragraph exceeds the line length, add it to the result
    if (currentParagraph.length >= lineLength) {
      cleanedLines.push(currentParagraph.trim());
      currentParagraph = "";
    }
  }

  // Add the last paragraph if it's not empty
  if (currentParagraph) {
    cleanedLines.push(currentParagraph.trim());
  }

  // Return the formatted text as a single string
  return cleanedLines.join("\n");
};

export const generateAndDownloadFile = (
  transcript: string,
  format: string,
  filename: string,
) => {
  const doc = new jsPDF();
  try {
    const blob = (() => {
      if (format === "txt") {
        return new Blob([transcript], { type: "text/plain;charset=utf-8" });
      } else if (format === "doc") {
        return new Blob(
          [`<html><body><pre>${transcript}</pre></body></html>`],
          { type: "application/msword" },
        );
      } else if (format === "pdf") {
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 10;
        const maxWidth = pageWidth - margin * 2;
        const lineHeight = 10;

        // Split text into lines
        const lines = doc.splitTextToSize(transcript, maxWidth);
        let cursorY = margin;

        lines.forEach((line: any) => {
          if (cursorY + lineHeight > pageHeight - margin) {
            doc.addPage(); // Add a new page if content exceeds the current page
            cursorY = margin;
          }
          doc.text(line, margin, cursorY);
          cursorY += lineHeight;
        });

        return doc.output("blob");
      }
      return null;
    })();

    if (!blob) throw new Error("Unsupported file format");

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${filename}.${format}`;
    anchor.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error generating and downloading file:", error);
  }
};

export const sanitizeFileName = (name: string): string => {
  const sanitizedName = name
    .normalize("NFKD") // Normalize to decompose diacritics
    .replace(/\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu, "") // Remove emojis
    .replace(/[^a-zA-Z0-9 \\-]/g, "") // Allow letters, numbers, spaces, and dashes
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
    .replace(/-+/g, "-") // Replace multiple dashes with a single dash
    .trim(); // Remove leading and trailing spaces

  return `${sanitizedName}__${MANDATORY_CT_PROMO_TEXT}`
};

export const addResolutionInPixels = (thumbnails: any[]) => {
  return thumbnails.map((thumbnail) => {
    const res = thumbnail.resolutionText.split("x");
    const width = res[0] + "px";
    const height = res[1] + "px";

    return {
      ...thumbnail,
      width,
      height
    }
  })
}

export const isAudioOnlyFormat = (f: VideoFormat) => {
  if (!f) return false;
  if (f.isAudioFile &&
    !f.isVideoFile &&
    !f.isMuxedFile) {
    return true
  }
  return false
}


export const isVideoOnlyFormat = (f: VideoFormat) => {
  if (!f) return false;
  if (!f.isAudioFile &&
    f.isVideoFile &&
    !f.isMuxedFile) {
    return true
  }
  return false
}

export const getCountryCodeFromGeoLocationService = async () => {
  const locationData = await getUserLocationData();
  if (locationData) {
    return locationData.countryCode;
  } else {
    return null;
  }
}