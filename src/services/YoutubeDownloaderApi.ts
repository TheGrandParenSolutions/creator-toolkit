import { downloadYouTubeVideo, fetchYouTubeVideoDetails, trackDownloadProgress } from "@src/services/YoutubeDownloadService";
import { VideoDetails, VideoFormat } from "@src/types/YoutubeDownloaderTypes";

export const getVideoDetails = async (youtubeUrl: string): Promise<VideoDetails> => {
    return fetchYouTubeVideoDetails(youtubeUrl);
};

export const downloadVideoFormat = async (videoUrl: string, format: VideoFormat, videoDetails: VideoDetails | null, requestId: string) => {
    return downloadYouTubeVideo({
        videoUrl, format,
        fileName: `${videoDetails?.title}__${format.quality}`
    }, requestId)
}

export const getDownloadProgress = async (requestId: string) => {
    const response = await trackDownloadProgress(requestId);
    const { progress } = response;
    return progress
}


