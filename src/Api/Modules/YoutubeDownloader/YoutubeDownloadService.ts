import { get, post } from "@src/Api/Core/HttpClient";
import { DownloadProgress, DownloadRequest, YoutubeDownloaderApiResponse } from "@src/types/YoutubeDownloaderTypes";


export const fetchYouTubeVideoDetails = async (videoUrl: string): Promise<YoutubeDownloaderApiResponse> => {
    return get('youtube-downloader/video-details', { videoUrl });
};

export const getBlobForMediaUrl = async (url: string): Promise<Blob> => {
    return get("youtube-downloader/fetch-media", { url }, { responseType: "blob" })
}

export const generateSignedURI = async (request: DownloadRequest, requestId: string): Promise<any> => {
    try {
        const response = await post("youtube-downloader/generate-download-url", { ...request }, {
            headers: {
                "CT-Request-ID": requestId,
            },
        })
        const { signedUrl } = response;
        if (!signedUrl) throw new Error("Error downloading video, please try again!");
        return signedUrl;
    } catch (error) {
        console.error('Error downloading video:', error);
        throw error;
    }
};

export const trackDownloadProgress = async (requestId: string): Promise<DownloadProgress> => {
    const response = await get(`youtube-downloader/download-progress/${requestId}`);
    return response;
}
