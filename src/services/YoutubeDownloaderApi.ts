import { generateSignedURI, fetchYouTubeVideoDetails, trackDownloadProgress } from "@src/Api/Modules/YoutubeDownloader/YoutubeDownloadService";
import { VideoDetails, VideoFormat } from "@src/types/YoutubeDownloaderTypes";
import { sanitizeFileName } from "@src/utils/HelperUtils";

export const getVideoDetails = async (youtubeUrl: string): Promise<VideoDetails> => {
    return fetchYouTubeVideoDetails(youtubeUrl);
};

export const getDownloadURI = async (videoUrl: string, format: VideoFormat, videoDetails: VideoDetails | null, requestId: string, audioUrl: string) => {
    return generateSignedURI({
        videoUrl, format,
        fileName: sanitizeFileName(`${videoDetails?.title}__${format.quality}`),
        audioUrl
    }, requestId)
}

export const getDownloadProgress = async (requestId: string) => {
    const response = await trackDownloadProgress(requestId);
    const { progress } = response;
    return progress
}


