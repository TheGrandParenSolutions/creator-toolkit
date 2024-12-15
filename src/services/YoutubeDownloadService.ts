import { get, post, } from "@src/services/HttpClient";
import { DownloadProgress, DownloadRequest, YoutubeDownloaderApiResponse } from "@src/types/YoutubeDownloaderTypes";


export const fetchYouTubeVideoDetails = async (videoUrl: string): Promise<YoutubeDownloaderApiResponse> => {
    return get('youtube-downloader/video-details', { videoUrl });
};

export const downloadYouTubeVideo = async (request: DownloadRequest, requestId: string): Promise<any> => {
    try {
        const response = await post(`youtube-downloader/download-video`, { ...request }, {
            responseType: 'arraybuffer', headers: {
                "Content-Type": "application/json",
                "CT-Request-ID": requestId, // Pass the requestId
            },
        }, true);
        return response;
    } catch (error) {
        console.error('Error downloading video:', error);
        throw error;
    }
};

export const trackDownloadProgress = async (requestId: string): Promise<DownloadProgress> => {
    const response = await get(`youtube-downloader/download-progress/${requestId}`);
    return response;
}