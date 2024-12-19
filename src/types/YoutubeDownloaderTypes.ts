export interface VideoFormat {
    quality: string;         // Video quality (e.g., 2160p60, 720p60)
    mimeType: string;        // MIME type (e.g., webm, mp4)
    url: string;             // Direct download URL
    duration: string;        // Duration of the video (e.g., "00:05:33")
    sizeInBytes: number;     // File size in bytes
    isAudioFile: boolean;
    isVideoFile: boolean;
    isMuxedFile: boolean;
    formatId: number;
}

export interface VideoDetails {
    title: string;           // Title of the YouTube video
    channelName: string;     // Name of the YouTube channel
    channelLogoUrl: string;  // URL of the channel's logo
    thumbnailUrl: string;    // Thumbnail URL of the video
    formats: VideoFormat[];  // Array of available video formats
    duration: string;        // Total duration of the video (e.g., "00:05:33")
    youtubeVideoAge: string;// like how many days or months ago or year ago  this video was uploaded
    totalViews: string;
}

export interface DownloadRequest {
    videoUrl: string;
    format: VideoFormat;
    fileName: string;
}

export interface DownloadProgress {
    requestId: string;
    progress: number;
}

export type YoutubeDownloaderApiResponse = VideoDetails;
export interface DownloadOptionsProps {
    videoDetails: VideoDetails;
    videoUrl: string;
}
