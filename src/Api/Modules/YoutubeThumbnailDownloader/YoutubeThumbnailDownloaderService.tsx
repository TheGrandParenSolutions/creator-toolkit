import { get } from "@src/Api/Core/HttpClient";
import { addResolutionInPixels } from "@src/utils/HelperUtils";

export const fetchYoutubeThumbnails = (youtubeUrl: string) => {
  const videoId = extractVideoId(youtubeUrl);
  const fetchedThumbnails = [
    {
      resolution: "Max Resolution",
      resolutionText: "1128x635",
      url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    },
    {
      resolution: "High Quality",
      resolutionText: "638x478",
      url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
    },
    {
      resolution: "Standard Quality",
      resolutionText: "480x360",
      url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    },
    {
      resolution: "Medium Quality",
      resolutionText: "320x180",
      url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    },
  ];
  const thumbnailsWithResolutions = addResolutionInPixels(fetchedThumbnails);
  return thumbnailsWithResolutions;
};

const extractVideoId = (url: string) => {
  try {
    const parsedUrl = new URL(url);

    // Case 1: Full YouTube URL with `v` parameter
    const videoIdFromQuery = parsedUrl.searchParams.get("v");
    if (videoIdFromQuery) {
      return videoIdFromQuery;
    }

    // Case 2: Shortened YouTube URL (youtu.be)
    const videoIdFromPath = parsedUrl.pathname.slice(1); // Get the path after '/'
    if (videoIdFromPath) {
      return videoIdFromPath;
    }

    throw new Error("Invalid YouTube URL");
  } catch (error) {
    throw new Error("Invalid YouTube URL" + error);
  }
};

export const fetchDownloadUrl = async (url: string) => {
  try {
    const blob = await get(
      "thumbnail-downloader/fetch-thumbnail",
      { url },
      {
        responseType: "blob", // Expecting a binary file (image) as the response
      },
    );
    const downloadUrl = URL.createObjectURL(blob);
    return downloadUrl;
  } catch (error) {
    throw new Error("Unable to generate downloadable thumbnail link" + error);
  }
};
